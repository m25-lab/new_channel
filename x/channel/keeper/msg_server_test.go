package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/AstraProtocol/channel/testutil/keeper"
	"github.com/AstraProtocol/channel/x/channel/keeper"
	"github.com/AstraProtocol/channel/x/channel/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.ChannelKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
