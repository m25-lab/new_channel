package simulation

import (
	"math/rand"

	"github.com/AstraProtocol/channel/x/channel/keeper"
	"github.com/AstraProtocol/channel/x/channel/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgReceivercommit(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgReceivercommit{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the Receivercommit simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "Receivercommit simulation not implemented"), nil, nil
	}
}