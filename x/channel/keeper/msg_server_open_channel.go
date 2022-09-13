package keeper

import (
	"context"

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

	k.bankKeeper.SendCoins(ctx, addrA, multiAddr, sdk.Coins{*msg.CoinA})
	k.bankKeeper.SendCoins(ctx, addrB, multiAddr, sdk.Coins{*msg.CoinB})
	
	return &types.MsgOpenChannelResponse{}, nil
}
