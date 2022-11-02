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

func CmdReceivercommit() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "receivercommit [from] [channelid] [cointoreceiver] [cointohtlc] [hashcodehtlc] [timelockhtlc] [cointransfer] [hashcodedest] [timelocksender] [multisig]",
		Short: "Broadcast message receivercommit",
		Args:  cobra.ExactArgs(10),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFrom := args[0]
			argChannelid := args[1]
			//argCointoreceiver := args[2]
			//argCointohtlc := args[3]
			argHashcodehtlc := args[4]
			argTimelockhtlc := args[5]
			//argCointransfer := args[6]
			argHashcodedest := args[7]
			argTimelocksender := args[8]
			argMultisig := args[9]

			cmd.Flags().Set(flags.FlagFrom, argMultisig)
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			decCoin, err := sdk.ParseDecCoin(args[2])
			if err != nil {
				return err
			}
			argCointoreceiver, _ := sdk.NormalizeDecCoin(decCoin).TruncateDecimal()

			decCoin, err = sdk.ParseDecCoin(args[3])
			if err != nil {
				return err
			}
			argCointohtlc, _ := sdk.NormalizeDecCoin(decCoin).TruncateDecimal()

			decCoin, err = sdk.ParseDecCoin(args[6])
			if err != nil {
				return err
			}
			argCointransfer, _ := sdk.NormalizeDecCoin(decCoin).TruncateDecimal()

			msg := types.NewMsgReceivercommit(
				clientCtx.GetFromAddress().String(),
				argFrom,
				argChannelid,
				&argCointoreceiver,
				&argCointohtlc,
				argHashcodehtlc,
				argTimelockhtlc,
				&argCointransfer,
				argHashcodedest,
				argTimelocksender,
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
