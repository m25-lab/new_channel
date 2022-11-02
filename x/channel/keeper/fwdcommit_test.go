package keeper_test

import (
	"strconv"
	"testing"

	keepertest "github.com/AstraProtocol/channel/testutil/keeper"
	"github.com/AstraProtocol/channel/testutil/nullify"
	"github.com/AstraProtocol/channel/x/channel/keeper"
	"github.com/AstraProtocol/channel/x/channel/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNFwdcommit(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Fwdcommit {
	items := make([]types.Fwdcommit, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetFwdcommit(ctx, items[i])
	}
	return items
}

func TestFwdcommitGet(t *testing.T) {
	keeper, ctx := keepertest.ChannelKeeper(t)
	items := createNFwdcommit(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetFwdcommit(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestFwdcommitRemove(t *testing.T) {
	keeper, ctx := keepertest.ChannelKeeper(t)
	items := createNFwdcommit(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveFwdcommit(ctx,
			item.Index,
		)
		_, found := keeper.GetFwdcommit(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestFwdcommitGetAll(t *testing.T) {
	keeper, ctx := keepertest.ChannelKeeper(t)
	items := createNFwdcommit(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllFwdcommit(ctx)),
	)
}
