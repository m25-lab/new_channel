package keeper

import (
	"github.com/AstraProtocol/channel/x/channel/types"
)

var _ types.QueryServer = Keeper{}
