package keeper

import (
	"context"
	"cosmossdk.io/math"
	"errors"
	"fmt"

	"channel/x/channel/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Fund(goCtx context.Context, msg *types.MsgFund) (*types.MsgFundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	msg.GetSigners()
	msg.GetSignBytes()

	_, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}

	val, found := k.Keeper.GetChannel(ctx, msg.Channelid)
	if !found {
		return nil, errors.New("ChannelID is not existing")
	}

	if msg.Multisig != val.MultisigAddr {
		return nil, errors.New("Not matching multisig address!")
	}

	if msg.From != val.PartA && msg.From != val.PartB {
		return nil, errors.New("Not matching any part in this channel!")
	}

	var amount math.Int
	var toTimelock, toHashlock string
	var coinLock *sdk.Coin

	if msg.From == val.PartA {
		toTimelock = val.PartB
		toHashlock = val.PartA
		amount = msg.Coin.Amount.Add(msg.BalanceA.Amount)
		coinLock = msg.BalanceB
	} else {
		toTimelock = val.PartA
		toHashlock = val.PartB
		amount = msg.Coin.Amount.Add(msg.BalanceB.Amount)
		coinLock = msg.BalanceA
	}

	coin := k.Keeper.bankKeeper.GetBalance(ctx, sdk.AccAddress(val.MultisigAddr), coinLock.Denom)
	if coin.Amount.Uint64() != 12 {
		return nil, fmt.Errorf("@@@ wrong balance of addr", val.MultisigAddr, " balance:", coin.Amount.Uint64())
	}

	if coin.Amount.Uint64() < coinLock.Amount.Uint64() {
		return nil, fmt.Errorf("@@@ not enough coin")
	}
	// Send to LockTx (other) or HashTx (creator)
	fmt.Println("@@@@ balance of addr", val.MultisigAddr, " balance:", coin.Amount.Uint64())
	fmt.Println("@@@@ balance of coinlock balance:", coinLock.Amount.Uint64())

	err = k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, sdk.AccAddress(val.MultisigAddr),
		types.ModuleName, sdk.Coins{*coinLock})
	if err != nil {
		return nil, fmt.Errorf("@@@ SendCoinsFromAccountToModule balance of addr", val.MultisigAddr, " balance:", coin.Amount.Uint64())
	}

	indexStr := fmt.Sprintf("%s:%s:%d", msg.Channelid, msg.HashcodeB, ctx.BlockHeight())

	unlockBlock := 300 + uint64(ctx.BlockHeight())

	commitment := types.Commitment{
		Index:       indexStr,
		From:        msg.From,
		CoinA:       coinLock, // unused
		ToATimelock: toTimelock,
		ToBHashlock: toHashlock,
		Coinlock:    coinLock,
		Blockheight: unlockBlock,
		Hashcode:    msg.HashcodeB,
	}
	k.Keeper.SetCommitment(ctx, commitment)

	if val.PartA != msg.From {
		return nil, fmt.Errorf("not matching receiver address! expected:", val.PartA)
	}

	// Send coin to part A (creator) of the funding commitment
	err = k.bankKeeper.SendCoins(ctx, sdk.AccAddress(val.MultisigAddr), sdk.AccAddress(toHashlock), sdk.Coins{
		sdk.Coin{
			Denom:  msg.Coin.Denom,
			Amount: amount,
		},
	})
	if err != nil {
		return nil, fmt.Errorf("@@@ SendCoins balance of addr", val.MultisigAddr, " balance:", coin.Amount.Uint64(),
			"required amount:", amount.Uint64())
	}

	return &types.MsgFundResponse{
		Index: indexStr,
	}, nil
}
