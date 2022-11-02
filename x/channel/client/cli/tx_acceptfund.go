package cli

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"

	"github.com/AstraProtocol/channel/x/channel/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdAcceptfund() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "acceptfund [from] [channelid] [coin] [hashcode] [timelock] [multisig]",
		Short: "Broadcast message acceptfund",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFrom := args[0]
			argChannelid := args[1]
			argHashcode := args[3]
			argTimelock := args[4]
			argMultisig := args[5]

			cmd.Flags().Set(flags.FlagFrom, argMultisig)
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			decCoin, err := sdk.ParseDecCoin(args[2])
			if err != nil {
				return err
			}
			coin, _ := sdk.NormalizeDecCoin(decCoin).TruncateDecimal()

			msg := types.NewMsgAcceptfund(
				clientCtx.GetFromAddress().String(),
				argFrom,
				argChannelid,
				&coin,
				argHashcode,
				argTimelock,
				argMultisig,
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
