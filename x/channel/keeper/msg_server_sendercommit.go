package keeper

import (
	"channel/x/channel/types"
	"context"
	"errors"
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

func (k msgServer) Sendercommit(goCtx context.Context, msg *types.MsgSendercommit) (*types.MsgSendercommitResponse, error) {
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

	toSender, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}

	from, err := sdk.AccAddressFromBech32(msg.Multisig)
	if err != nil {
		return nil, err
	}

	// Send coin to creator of commitment
	if msg.Cointosender.Amount.IsPositive() {
		err = k.bankKeeper.SendCoins(ctx, from, toSender, sdk.Coins{*msg.Cointosender})
		if err != nil {
			return nil, err
		}
	}

	// Send to HTLC
	Cointohtlc := msg.Cointohtlc
	if Cointohtlc.Amount.IsPositive() {
		err = k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, from, types.ModuleName, sdk.Coins{*Cointohtlc})
		if err != nil {
			return nil, err
		}
	}

	indexStr := fmt.Sprintf("%s:%s", msg.Multisig, msg.Hashcodehtlc)

	numblock, err := strconv.ParseUint(msg.Timelockhtlc, 10, 64)
	if err != nil {
		return nil, err
	}
	unlockBlock := numblock + uint64(ctx.BlockHeight())

	commitment := types.Commitment{
		Index:       indexStr,
		From:        msg.From,
		CoinA:       msg.Cointosender,
		ToATimelock: toTimelock,
		ToBHashlock: toHashlock,
		Coinlock:    msg.Cointohtlc,
		Blockheight: unlockBlock,
		Hashcode:    msg.Hashcodehtlc,
	}
	k.Keeper.SetCommitment(ctx, commitment)

	// Send to FwdContract
	CointoFC := msg.Cointransfer
	if CointoFC.Amount.IsPositive() {
		err = k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, from, types.ModuleName, sdk.Coins{*CointoFC})
		if err != nil {
			return nil, err
		}
	}

	indexStr = fmt.Sprintf("%s:%s", msg.Channelid, msg.Hashcodedest)

	Timelocksender, err := strconv.ParseUint(msg.Timelocksender, 10, 64)
	if err != nil {
		return nil, err
	}
	Timelocksender = Timelocksender + uint64(ctx.BlockHeight())

	Timelockreceiver, err := strconv.ParseUint(msg.Timelockreceiver, 10, 64)
	if err != nil {
		return nil, err
	}
	Timelockreceiver = Timelockreceiver + uint64(ctx.BlockHeight())

	fwscommitment := types.Fwdcommit{
		Index:            indexStr,
		Channelid:        msg.Channelid,
		Hashcodedest:     msg.Hashcodedest,
		Timelockreceiver: string(Timelockreceiver),
		Timelocksender:   string(Timelocksender),
		Hashcodehtlc:     msg.Hashcodehtlc,
	}
	k.Keeper.SetFwdcommit(ctx, fwscommitment)

	if err != nil {
		return nil, err
	}
	return &types.MsgSendercommitResponse{
		//		Index: indexStr,
	}, nil

}
