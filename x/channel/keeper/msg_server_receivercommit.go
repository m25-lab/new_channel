package keeper

import (
	"context"
	"errors"
	"fmt"
	"strconv"

	"github.com/AstraProtocol/channel/x/channel/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Receivercommit(goCtx context.Context, msg *types.MsgReceivercommit) (*types.MsgReceivercommitResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	val, found := k.Keeper.GetChannel(ctx, msg.ChannelID)
	if !found {
		return nil, errors.New("ChannelID is not existing")
	}

	var toTimelock, toHashlock string
	if msg.From == val.PartA {
		toTimelock = val.PartB
		toHashlock = val.PartA
	} else {
		toTimelock = val.PartA
		toHashlock = val.PartB
	}

	toReceiver, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}

	from, err := sdk.AccAddressFromBech32(msg.Multisig)
	if err != nil {
		return nil, err
	}

	// Send coin to creator of commitment
	if msg.CoinToReceiver.Amount.IsPositive() {
		err = k.bankKeeper.SendCoins(ctx, from, toReceiver, sdk.Coins{*msg.CoinToReceiver})
		if err != nil {
			return nil, err
		}
	}

	// Send to HTLC
	indexHtlc := fmt.Sprintf("%s:%s", msg.Multisig, msg.HashcodeHtlc)
	CoinToHtlc := msg.CoinToHtlc
	if CoinToHtlc.Amount.IsPositive() {
		err = k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, from, types.ModuleName, sdk.Coins{*CoinToHtlc})
		if err != nil {
			return nil, err
		}

		numblock, err := strconv.ParseUint(msg.TimelockHtlc, 10, 64)
		if err != nil {
			return nil, err
		}
		unlockBlock := numblock + uint64(ctx.BlockHeight())

		commitment := types.Commitment{
			Index:          indexHtlc,
			From:           msg.From,
			CoinToCreator:  msg.CoinToReceiver,
			ToTimelockAddr: toTimelock,
			ToHashlockAddr: toHashlock,
			CoinToHtlc:     msg.CoinToHtlc,
			Timelock:       unlockBlock,
			Hashcode:       msg.HashcodeHtlc,
		}
		k.Keeper.SetCommitment(ctx, commitment)
	}

	// Send to FwdContract
	CointoFC := msg.CoinTransfer
	if CointoFC.Amount.IsPositive() {
		err = k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, from, types.ModuleName, sdk.Coins{*CointoFC})
		if err != nil {
			return nil, err
		}
	}

	creator := "receiver"
	indexTransfer := fmt.Sprintf("%s:%s:%s", msg.ChannelID, msg.HashcodeDest, creator)

	Timelocksender, err := strconv.ParseUint(msg.TimelockSender, 10, 64)
	if err != nil {
		return nil, err
	}
	Timelocksender = Timelocksender + uint64(ctx.BlockHeight())

	fwscommitment := types.Fwdcommit{
		Index:            indexTransfer,
		ChannelID:        msg.ChannelID,
		Sender:           toTimelock,
		Receiver:         toHashlock,
		HashcodeDest:     msg.HashcodeDest,
		TimelockReceiver: string(0),
		TimelockSender:   string(Timelocksender),
		HashcodeHtlc:     msg.HashcodeHtlc,
		CoinTransfer:     msg.CoinTransfer,
		Creator:          creator,
	}
	k.Keeper.SetFwdcommit(ctx, fwscommitment)

	k.Keeper.RemoveChannel(ctx, msg.ChannelID)

	return &types.MsgReceivercommitResponse{
		IndexHtlc:     indexHtlc,
		IndexTransfer: indexTransfer,
	}, nil

}
