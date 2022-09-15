package keeper

import (
	"context"
	"fmt"

	"channel/x/channel/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) OpenChannel(goCtx context.Context, msg *types.MsgOpenChannel) (*types.MsgOpenChannelResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	addrA, err := sdk.AccAddressFromBech32(msg.PartA)
	if err != nil {
		return nil, err
	}

	addrB, err := sdk.AccAddressFromBech32(msg.PartB)
	if err != nil {
		return nil, err
	}

	multiAddr := msg.GetSigners()[0]

	err = k.bankKeeper.SendCoins(ctx, addrA, multiAddr, sdk.Coins{*msg.CoinA})
	if err != nil {
		return nil, err
	}

	err = k.bankKeeper.SendCoins(ctx, addrB, multiAddr, sdk.Coins{*msg.CoinB})
	if err != nil {
		return nil, err
	}

	indexStr := fmt.Sprintf("%s:%s:%s:%s:%d", msg.MultisigAddr, msg.CoinA.Denom,
		msg.CoinA.Amount.String(), msg.CoinB.Amount.String(), ctx.BlockHeight())

	channel := types.Channel{
		Index:        indexStr,
		MultisigAddr: msg.MultisigAddr,
		PartA:        msg.PartA,
		PartB:        msg.PartB,
	}
	k.Keeper.SetChannel(ctx, channel)

	return &types.MsgOpenChannelResponse{
		Index: indexStr,
	}, nil
}
