package keeper

import (
	"context"
	"fmt"

	"github.com/AstraProtocol/channel/x/channel/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Commitment(goCtx context.Context, msg *types.MsgCommitment) (*types.MsgCommitmentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	from, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}

	toA, err := sdk.AccAddressFromBech32(msg.ToTimelock)
	if err != nil {
		return nil, err
	}

	// Send coin to creator of commitment
	if msg.Cointocreator.Amount.IsPositive() {
		err = k.bankKeeper.SendCoins(ctx, from, toA, sdk.Coins{*msg.Cointocreator})
		if err != nil {
			return nil, err
		}
	}

	// Send to HTLC
	indexStr := fmt.Sprintf("%s:%s", msg.From, msg.Hashcode)
	if msg.Coinhtlc.Amount.IsPositive() {
		err = k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, from, types.ModuleName, sdk.Coins{
			sdk.Coin{
				Denom:  msg.Coinhtlc.Denom,
				Amount: msg.Coinhtlc.Amount,
			},
		})
		if err != nil {
			return nil, err
		}

		unlockBlock := msg.Blockheight + uint64(ctx.BlockHeight())

		commitment := types.Commitment{
			Index:         indexStr,
			From:          msg.From,
			Cointocreator: msg.Cointocreator,
			ToTimelock:    msg.ToTimelock,
			ToHashlock:    msg.ToHashlock,
			Coinhtlc:      msg.Coinhtlc,
			Blockheight:   unlockBlock,
			Hashcode:      msg.Hashcode,
		}
		k.Keeper.SetCommitment(ctx, commitment)
	}

	k.Keeper.RemoveChannel(ctx, msg.Channelid)

	return &types.MsgCommitmentResponse{
		Index: indexStr,
	}, nil
}
