package keeper_test

import (
	"context"
	"testing"

	keepertest "channel/testutil/keeper"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/dungtran8tiki/channel/x/channel/keeper"
	"github.com/dungtran8tiki/channel/x/channel/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.ChannelKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
