package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/AstraProtocol/channel/x/channel/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CloseChannel(goCtx context.Context, msg *types.MsgCloseChannel) (*types.MsgCloseChannelResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	if err := k.bankKeeper.IsSendEnabledCoins(ctx, *msg.CoinA); err != nil {
		return nil, err
	}

	from, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}
	toA, err := sdk.AccAddressFromBech32(msg.ToA)
	if err != nil {
		return nil, err
	}
	toB, err := sdk.AccAddressFromBech32(msg.ToB)
	if err != nil {
		return nil, err
	}

	// todo: Check from_amount > coinA + coin B

	if k.bankKeeper.BlockedAddr(toA) {
		err = sdkerrors.Wrapf(sdkerrors.ErrUnauthorized, "%s is not allowed to receive funds", msg.ToA)
	} else {
		if msg.CoinA.Amount.IsPositive() {
			err = k.bankKeeper.SendCoins(ctx, from, toA, sdk.Coins{*msg.CoinA})
		}
	}

	if k.bankKeeper.BlockedAddr(toB) {
		err = sdkerrors.Wrapf(sdkerrors.ErrUnauthorized, "%s is not allowed to receive funds", msg.ToB)
	} else {
		if msg.CoinB.Amount.IsPositive() {
			err = k.bankKeeper.SendCoins(ctx, from, toB, sdk.Coins{*msg.CoinB})
		}
	}

	if err != nil {
		return nil, err
	}

	k.Keeper.RemoveChannel(ctx, msg.Channelid)

	return &types.MsgCloseChannelResponse{}, nil
}
