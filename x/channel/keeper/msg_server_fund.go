package keeper

import (
	"context"
	"errors"
	"fmt"
	"strconv"

	"github.com/AstraProtocol/channel/x/channel/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Fund(goCtx context.Context, msg *types.MsgFund) (*types.MsgFundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}

	val, found := k.Keeper.GetChannel(ctx, msg.ChannelID)
	if !found {
		return nil, errors.New("ChannelID is not existing")
	}

	if msg.Multisig != val.MultisigAddr {
		return nil, errors.New("Not matching multisig address!")
	}

	if msg.From != val.PartA && msg.From != val.PartB {
		return nil, errors.New("Not matching any part in this channel!")
	}

	var toTimelock, toHashlock string
	if msg.From == val.PartA {
		toTimelock = val.PartB
		toHashlock = val.PartA
	} else {
		toTimelock = val.PartA
		toHashlock = val.PartB
	}

	from, err := sdk.AccAddressFromBech32(val.MultisigAddr)
	if err != nil {
		return nil, err
	}

	coinToHtlc := msg.CoinToHtlc

	coin_channel := k.Keeper.bankKeeper.GetBalance(ctx, from, coinToHtlc.Denom)

	// Send to LockTx (other) or HashTx (creator)
	if coinToHtlc.Amount.IsPositive() {
		err = k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, from, types.ModuleName, sdk.Coins{*coinToHtlc})
		if err != nil {
			return nil, fmt.Errorf("SendCoinsFromAccountToModule failed, balance of addr", val.MultisigAddr, " balance:", coinToHtlc.Amount.Uint64())
		}
	}

	indexStr := fmt.Sprintf("%s:%s", msg.ChannelID, msg.Hashcode)

	numblock, err := strconv.ParseUint(msg.Timelock, 10, 64)
	if err != nil {
		return nil, err
	}

	unlockBlock := numblock + uint64(ctx.BlockHeight())

	commitment := types.Commitment{
		Index:          indexStr,
		From:           msg.From,
		CoinToCreator:  nil, // unused
		ToTimelockAddr: toTimelock,
		ToHashlockAddr: toHashlock,
		CoinToHtlc:     coinToHtlc,
		Timelock:       unlockBlock,
		Hashcode:       msg.Hashcode,
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

	coin_fundside := coin_channel.Sub(*coinToHtlc)
	if coin_fundside.Amount.IsPositive() {
		err = k.bankKeeper.SendCoins(ctx, from, to, sdk.Coins{sdk.Coin{coin_fundside.Denom, coin_fundside.Amount}})
		if err != nil {
			return nil, fmt.Errorf("SendCoins failed balance of addr", val.MultisigAddr, " balance:", coin_channel.Amount.Uint64(),
				"required amount:", coin_fundside.Amount.Uint64())
		}
	}

	k.Keeper.RemoveChannel(ctx, msg.ChannelID)

	return &types.MsgFundResponse{
		Index: indexStr,
	}, nil
}
