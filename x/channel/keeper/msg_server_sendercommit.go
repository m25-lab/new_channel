package keeper

import (
	"context"
	"errors"
	"fmt"
	"github.com/AstraProtocol/channel/x/channel/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

func (k msgServer) Sendercommit(goCtx context.Context, msg *types.MsgSendercommit) (*types.MsgSendercommitResponse, error) {
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

	toSender, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}

	from, err := sdk.AccAddressFromBech32(msg.Multisig)
	if err != nil {
		return nil, err
	}

	// Send coin to creator of commitment
	if msg.CoinToSender.Amount.IsPositive() {
		err = k.bankKeeper.SendCoins(ctx, from, toSender, sdk.Coins{*msg.CoinToSender})
		if err != nil {
			return nil, err
		}
	}

	// Send to HTLC
	indexHtlc := ""
	CointoHTLC := msg.CoinToHtlc
	if CointoHTLC.Amount.IsPositive() {
		err = k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, from, types.ModuleName, sdk.Coins{*CointoHTLC})
		if err != nil {
			return nil, err
		}

		indexHtlc = fmt.Sprintf("%s:%s", msg.Multisig, msg.HashcodeHtlc)

		numblock, err := strconv.ParseUint(msg.TimelockHtlc, 10, 64)
		if err != nil {
			return nil, err
		}
		unlockBlock := numblock + uint64(ctx.BlockHeight())

		commitment := types.Commitment{
			Index:          indexHtlc,
			From:           msg.From,
			CoinToCreator:  msg.CoinToSender,
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

	creator := "sender"
	indexTransfer := fmt.Sprintf("%s:%s:%s", msg.ChannelID, msg.HashcodeDest, creator)

	Timelocksender, err := strconv.ParseUint(msg.TimelockSender, 10, 64)
	if err != nil {
		return nil, err
	}
	Timelocksender = Timelocksender + uint64(ctx.BlockHeight())

	Timelockreceiver, err := strconv.ParseUint(msg.TimelockReceiver, 10, 64)
	if err != nil {
		return nil, err
	}
	Timelockreceiver = Timelockreceiver + uint64(ctx.BlockHeight())

	fwscommitment := types.Fwdcommit{
		Index:            indexTransfer,
		ChannelID:        msg.ChannelID,
		Sender:           toHashlock,
		Receiver:         toTimelock,
		HashcodeDest:     msg.HashcodeDest,
		TimelockReceiver: strconv.FormatUint(Timelockreceiver, 10),
		TimelockSender:   strconv.FormatUint(Timelocksender, 10),
		HashcodeHtlc:     msg.HashcodeHtlc,
		CoinTransfer:     msg.CoinTransfer,
		Creator:          creator,
	}
	k.Keeper.SetFwdcommit(ctx, fwscommitment)

	k.Keeper.RemoveChannel(ctx, msg.ChannelID)

	return &types.MsgSendercommitResponse{
		IndexHtlc:     indexHtlc,
		IndexTransfer: indexTransfer,
	}, nil

}
