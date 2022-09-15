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
		//amount = msg.Coin.Amount.Add(msg.BalanceA.Amount)
		coinLock = msg.BalanceB
	} else {
		toTimelock = val.PartA
		toHashlock = val.PartB
		//amount = msg.Coin.Amount.Add(msg.BalanceB.Amount)
		coinLock = msg.BalanceA
	}

	from, err := sdk.AccAddressFromBech32(val.MultisigAddr)
	if err != nil {
		return nil, err
	}

	coin := k.Keeper.bankKeeper.GetBalance(ctx, from, coinLock.Denom)

	ctx.Logger().Info("@@@@ balance of addr", val.MultisigAddr,
		" balance:", coin.Amount.Uint64(), "coinlock", coinLock.Amount.Uint64())

	if coin.Amount.Uint64() < coinLock.Amount.Uint64() {
		ctx.Logger().Info("@@@ not enough coin")
	}

	// Send to LockTx (other) or HashTx (creator)
	err = k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, from, types.ModuleName, sdk.Coins{*coinLock})
	if err != nil {
		return nil, fmt.Errorf("@@@ SendCoinsFromAccountToModule failed balance of addr", val.MultisigAddr, " balance:", coin.Amount.Uint64())
	}

	indexStr := fmt.Sprintf("%s:%s:%d", msg.Channelid, msg.HashcodeB, ctx.BlockHeight())

	unlockBlock := 10 + uint64(ctx.BlockHeight())

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

	if toHashlock != msg.From {
		return nil, fmt.Errorf("not matching receiver address! expected:", toHashlock)
	}

	// Send coin to creator of the funding commitment
	to, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}

	amount = coin.Amount.Sub(coinLock.Amount)
	ctx.Logger().Info("@@@@ remain balance of multisig:", amount.String())
	err = k.bankKeeper.SendCoins(ctx, from, to, sdk.Coins{
		sdk.Coin{
			Denom:  msg.Coin.Denom,
			Amount: amount,
		},
	})
	if err != nil {
		return nil, fmt.Errorf("@@@ SendCoins failed balance of addr", val.MultisigAddr, " balance:", coin.Amount.Uint64(),
			"required amount:", amount.Uint64())
	}

	return &types.MsgFundResponse{
		Index: indexStr,
	}, nil
}
