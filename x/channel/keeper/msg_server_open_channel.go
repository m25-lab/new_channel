package keeper

import (
	"context"
	"fmt"

	"github.com/AstraProtocol/channel/x/channel/types"
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

	if msg.CoinA.Amount.IsPositive() {
		err = k.bankKeeper.SendCoins(ctx, addrA, multiAddr, sdk.Coins{*msg.CoinA})
		if err != nil {
			return nil, err
		}
	}

	if msg.CoinB.Amount.IsPositive() {
		err = k.bankKeeper.SendCoins(ctx, addrB, multiAddr, sdk.Coins{*msg.CoinB})
		if err != nil {
			return nil, err
		}
	}

	indexStr := fmt.Sprintf("%s:%s:%s", msg.MultisigAddr, msg.CoinA.Denom, msg.Sequence)

	channel := types.Channel{
		Index:        indexStr,
		MultisigAddr: msg.MultisigAddr,
		PartA:        msg.PartA,
		PartB:        msg.PartB,
		Denom:        msg.CoinA.Denom,
		Sequence:     msg.Sequence,
	}
	k.Keeper.SetChannel(ctx, channel)

	return &types.MsgOpenChannelResponse{
		Index: indexStr,
	}, nil
}
