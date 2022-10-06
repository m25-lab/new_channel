package keeper

import (
	"context"
	"errors"
	"fmt"
	"strconv"

	"channel/x/channel/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Acceptfund(goCtx context.Context, msg *types.MsgAcceptfund) (*types.MsgAcceptfundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}

	val, found := k.Keeper.GetChannel(ctx, msg.Channelid)
	if !found {
		return nil, errors.New("ChannelID is not existing")
	}

	if msg.Multisig != val.MultisigAddr {
		return nil, errors.New("Not matching multisig address!")
	}

	if msg.From != val.PartA && msg.From != val.PartB {
		return nil, errors.New("Not matching any part in this channel!")
	}

	var toTimelock, toHashlock string
	if msg.From == val.PartA {
		toTimelock = val.PartB
		toHashlock = val.PartA
	} else {
		toTimelock = val.PartA
		toHashlock = val.PartB
	}

	from, err := sdk.AccAddressFromBech32(val.MultisigAddr)
	if err != nil {
		return nil, err
	}

	coin_acceptside := msg.Coin
	coin_channel := k.Keeper.bankKeeper.GetBalance(ctx, from, coin_acceptside.Denom)

	// Send coin to creator of the funding commitment
	to, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}

	if coin_acceptside.Amount.IsPositive() {
		err = k.bankKeeper.SendCoins(ctx, from, to, sdk.Coins{*coin_acceptside})
		if err != nil {
			return nil, fmt.Errorf("SendCoins failed balance of addr", val.MultisigAddr, " balance:", coin_channel.Amount.Uint64(),
				"required amount:", coin_acceptside.Amount.Uint64())
		}
	}

	// Send to HTLC
	amount := coin_channel.Amount.Sub(coin_acceptside.Amount)
	if amount.IsPositive() {
		err = k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, from, types.ModuleName, sdk.Coins{
			sdk.Coin{
				Denom:  coin_channel.Denom,
				Amount: amount,
			},
		})
		if err != nil {
			return nil, fmt.Errorf("@@@ SendCoinsFromAccountToModule failed balance of addr", val.MultisigAddr, " balance:", coin_channel.Amount.Uint64())
		}
	}

	indexStr := fmt.Sprintf("%s:%s", msg.Channelid, msg.Hashcode)

	numblock, err := strconv.ParseUint(msg.Timelock, 10, 64)
	if err != nil {
		return nil, err
	}

	unlockBlock := numblock + uint64(ctx.BlockHeight())
	coin_htlc := sdk.Coin{Denom: coin_channel.Denom, Amount: amount}

	commitment := types.Commitment{
		Index:       indexStr,
		From:        msg.From,
		CoinA:       nil, // unused
		ToATimelock: toTimelock,
		ToBHashlock: toHashlock,
		Coinlock:    &coin_htlc,
		Blockheight: unlockBlock,
		Hashcode:    msg.Hashcode,
	}
	k.Keeper.SetCommitment(ctx, commitment)

	if toHashlock != msg.From {
		return nil, fmt.Errorf("not matching receiver address! expected:", toHashlock)
	}

	return &types.MsgAcceptfundResponse{
		Index: indexStr,
	}, nil
}