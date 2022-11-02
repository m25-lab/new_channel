package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/AstraProtocol/channel/x/channel/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdCommitment())
	cmd.AddCommand(CmdWithdrawTimelock())
	cmd.AddCommand(CmdWithdrawHashlock())
	cmd.AddCommand(CmdCloseChannel())
	cmd.AddCommand(CmdOpenChannel())
	cmd.AddCommand(CmdFund())
	cmd.AddCommand(CmdAcceptfund())
	cmd.AddCommand(CmdSendercommit())
	cmd.AddCommand(CmdSenderwithdrawtimelock())
	cmd.AddCommand(CmdSenderwithdrawhashlock())
	cmd.AddCommand(CmdReceiverwithdraw())
	cmd.AddCommand(CmdReceivercommit())
	// this line is used by starport scaffolding # 1

	return cmd
}
