package keeper

import (
	"context"
	"fmt"

	"channel/x/channel/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Commitment(goCtx context.Context, msg *types.MsgCommitment) (*types.MsgCommitmentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	msg.GetSigners()
	msg.GetSignBytes()

	from, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}

	toA, err := sdk.AccAddressFromBech32(msg.ToATimelock)
	if err != nil {
		return nil, err
	}

	// Send coin to creator of commitment
	if msg.CoinA.Amount.IsPositive() {
		err = k.bankKeeper.SendCoins(ctx, from, toA, sdk.Coins{*msg.CoinA})
		if err != nil {
			return nil, err
		}
	}

	// Send to LockTx (other) or HashTx (creator)
	if msg.Coinlock.Amount.IsPositive() {
		err = k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, from, types.ModuleName, sdk.Coins{
			sdk.Coin{
				Denom:  msg.Coinlock.Denom,
				Amount: msg.Coinlock.Amount,
			},
		})
		if err != nil {
			return nil, err
		}
	}

	indexStr := fmt.Sprintf("%s:%s", msg.From, msg.Hashcode)

	unlockBlock := msg.Blockheight + uint64(ctx.BlockHeight())

	commitment := types.Commitment{
		Index:       indexStr,
		From:        msg.From,
		CoinA:       msg.CoinA,
		ToATimelock: msg.ToATimelock,
		ToBHashlock: msg.ToBHashlock,
		Coinlock:    msg.Coinlock,
		Blockheight: unlockBlock,
		Hashcode:    msg.Hashcode,
	}
	k.Keeper.SetCommitment(ctx, commitment)

	if err != nil {
		return nil, err
	}
	return &types.MsgCommitmentResponse{
		Index: indexStr,
	}, nil
}
