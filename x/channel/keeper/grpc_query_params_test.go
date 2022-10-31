package keeper_test

import (
	"testing"

	testkeeper "channel/testutil/keeper"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/dungtran8tiki/channel/x/channel/types"
	"github.com/stretchr/testify/require"
)

func TestParamsQuery(t *testing.T) {
	keeper, ctx := testkeeper.ChannelKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	params := types.DefaultParams()
	keeper.SetParams(ctx, params)

	response, err := keeper.Params(wctx, &types.QueryParamsRequest{})
	require.NoError(t, err)
	require.Equal(t, &types.QueryParamsResponse{Params: params}, response)
}
