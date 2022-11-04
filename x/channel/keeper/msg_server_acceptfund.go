package keeper

import (
	"context"
	"errors"
	"fmt"
	"strconv"

	"github.com/AstraProtocol/channel/x/channel/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Acceptfund(goCtx context.Context, msg *types.MsgAcceptfund) (*types.MsgAcceptfundResponse, error) {
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

	coin_acceptside := msg.CoinToAcceptSide
	coin_channel := k.Keeper.bankKeeper.GetBalance(ctx, from, coin_acceptside.Denom)

	// Send coin to accepted side first
	to, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}

	if coin_acceptside.Amount.IsPositive() {
		err = k.bankKeeper.SendCoins(ctx, from, to, sdk.Coins{*coin_acceptside})
		if err != nil {
			return nil, fmt.Errorf("SendCoins failed balance of addr", val.MultisigAddr, " balance:", coin_channel.Amount.Uint64(),
				"required amount:", coin_acceptside.Amount.Uint64())
		}
	}

	// Send the remain coin to HTLC = coin_channel - coin_acceptside
	coin_htlc := coin_channel.Sub(*coin_acceptside)

	if coin_htlc.Amount.IsPositive() {
		err = k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, from, types.ModuleName, sdk.Coins{coin_htlc})
		if err != nil {
			return nil, fmt.Errorf("@@@ SendCoinsFromAccountToModule failed balance of addr", val.MultisigAddr, " balance:", coin_channel.Amount.Uint64())
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
		CoinToHtlc:     &coin_htlc,
		Timelock:       unlockBlock,
		Hashcode:       msg.Hashcode,
	}
	k.Keeper.SetCommitment(ctx, commitment)

	if toHashlock != msg.From {
		return nil, fmt.Errorf("not matching receiver address! expected:", toHashlock)
	}

	k.Keeper.RemoveChannel(ctx, msg.ChannelID)

	return &types.MsgAcceptfundResponse{
		Index: indexStr,
	}, nil
}
