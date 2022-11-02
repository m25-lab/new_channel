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
	val, found := k.Keeper.GetChannel(ctx, msg.Channelid)
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
	if msg.Cointoreceiver.Amount.IsPositive() {
		err = k.bankKeeper.SendCoins(ctx, from, toReceiver, sdk.Coins{*msg.Cointoreceiver})
		if err != nil {
			return nil, err
		}
	}

	// Send to HTLC
	indexHtlc := fmt.Sprintf("%s:%s", msg.Multisig, msg.Hashcodehtlc)
	Cointohtlc := msg.Cointohtlc
	if Cointohtlc.Amount.IsPositive() {
		err = k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, from, types.ModuleName, sdk.Coins{*Cointohtlc})
		if err != nil {
			return nil, err
		}

		numblock, err := strconv.ParseUint(msg.Timelockhtlc, 10, 64)
		if err != nil {
			return nil, err
		}
		unlockBlock := numblock + uint64(ctx.BlockHeight())

		commitment := types.Commitment{
			Index:         indexHtlc,
			From:          msg.From,
			Cointocreator: msg.Cointoreceiver,
			ToTimelock:    toTimelock,
			ToHashlock:    toHashlock,
			Coinhtlc:      msg.Cointohtlc,
			Blockheight:   unlockBlock,
			Hashcode:      msg.Hashcodehtlc,
		}
		k.Keeper.SetCommitment(ctx, commitment)
	}

	// Send to FwdContract
	CointoFC := msg.Cointransfer
	if CointoFC.Amount.IsPositive() {
		err = k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, from, types.ModuleName, sdk.Coins{*CointoFC})
		if err != nil {
			return nil, err
		}
	}

	creator := "receiver"
	indexTransfer := fmt.Sprintf("%s:%s:%s", msg.Channelid, msg.Hashcodedest, creator)

	Timelocksender, err := strconv.ParseUint(msg.Timelocksender, 10, 64)
	if err != nil {
		return nil, err
	}
	Timelocksender = Timelocksender + uint64(ctx.BlockHeight())

	fwscommitment := types.Fwdcommit{
		Index:            indexTransfer,
		Channelid:        msg.Channelid,
		Sender:           toTimelock,
		Receiver:         toHashlock,
		Hashcodedest:     msg.Hashcodedest,
		Timelockreceiver: string(0),
		Timelocksender:   string(Timelocksender),
		Hashcodehtlc:     msg.Hashcodehtlc,
		Coin:             msg.Cointransfer,
		Creator:          creator,
	}
	k.Keeper.SetFwdcommit(ctx, fwscommitment)

	k.Keeper.RemoveChannel(ctx, msg.Channelid)

	return &types.MsgReceivercommitResponse{
		Indexhtlc:     indexHtlc,
		Indextransfer: indexTransfer,
	}, nil

}
