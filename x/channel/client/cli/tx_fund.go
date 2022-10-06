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

func CmdFund() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "fund [from] [channelid] [coinfund] [coinlock] [hashcode] [timelock] [multisig]",
		Short: "Broadcast message fund",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFrom := args[0]
			argChannelid := args[1]
			argHashcode := args[4]
			argTimelock := args[5]
			multisig := args[6]

			cmd.Flags().Set(flags.FlagFrom, multisig)
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			decCoin, err := sdk.ParseDecCoin(args[2])
			if err != nil {
				return err
			}
			coinfund, _ := sdk.NormalizeDecCoin(decCoin).TruncateDecimal()

			decCoin, err = sdk.ParseDecCoin(args[3])
			if err != nil {
				return err
			}
			coinlock, _ := sdk.NormalizeDecCoin(decCoin).TruncateDecimal()

			msg := types.NewMsgFund(
				clientCtx.GetFromAddress().String(),
				argFrom,
				argChannelid,
				&coinfund,
				&coinlock,
				argHashcode,
				argTimelock,
				multisig,
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
