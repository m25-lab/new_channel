package keeper_test

import (
	"testing"

	testkeeper "github.com/AstraProtocol/channel/testutil/keeper"
	"github.com/AstraProtocol/channel/x/channel/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.ChannelKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
