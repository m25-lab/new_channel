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

func CmdCommitment() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "commitment [from] [cointocreator] [tohashlock] [hashcode] [totimelock] [num_block] [coinhtlc] [channelid]",
		Short: "Broadcast message commitment",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFrom := args[0]
			argToHashlock := args[2]
			argToTimelock := args[4]
			argHashcode := args[3]
			argChannelId := args[7]

			//todo validate channelid

			cmd.Flags().Set(flags.FlagFrom, args[0])
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			argBlockheight, err := strconv.ParseUint(args[5], 10, 64)
			if err != nil {
				return err
			}

			decCoin, err := sdk.ParseDecCoin(args[1])
			if err != nil {
				return err
			}
			coinToCreator, _ := sdk.NormalizeDecCoin(decCoin).TruncateDecimal()

			decCoin, err = sdk.ParseDecCoin(args[6])
			if err != nil {
				return err
			}
			coinHtlc, _ := sdk.NormalizeDecCoin(decCoin).TruncateDecimal()

			msg := types.NewMsgCommitment(
				clientCtx.GetFromAddress().String(),
				argFrom,
				&coinToCreator,
				argToTimelock,
				argBlockheight,
				argToHashlock,
				argHashcode,
				&coinHtlc,
				argChannelId,
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
