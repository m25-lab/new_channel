package cli

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"

	"channel/x/channel/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCommitment() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "commitment [from] [coin-a] [to-a-hashlock] [hashcode] [to-b-timelock] [blockheight] [coinlock]",
		Short: "Broadcast message commitment",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFrom := args[0]
			argToBHashlock := args[2]
			argToATimelock := args[4]
			argHashcode := args[3]

			cmd.Flags().Set(flags.FlagFrom, args[0])
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			argBlockheight, err := strconv.Atoi(args[5])
			if err != nil {
				return err
			}

			decCoin, err := sdk.ParseDecCoin(args[1])
			if err != nil {
				return err
			}
			coinA, _ := sdk.NormalizeDecCoin(decCoin).TruncateDecimal()

			decCoin, err = sdk.ParseDecCoin(args[6])
			if err != nil {
				return err
			}
			coinLock, _ := sdk.NormalizeDecCoin(decCoin).TruncateDecimal()

			msg := types.NewMsgCommitment(
				clientCtx.GetFromAddress().String(),
				argFrom,
				&coinA,
				argToATimelock,
				uint64(argBlockheight),
				argToBHashlock,
				argHashcode,
				&coinLock,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
