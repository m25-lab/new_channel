package cli

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"strconv"

	"github.com/AstraProtocol/channel/x/channel/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdOpenChannel() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "open-channel [part-a] [part-b] [coin-a] [coin-b] [multisig-addr] [sequence]",
		Short: "Broadcast message open-channel",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argPartA := args[0]
			argPartB := args[1]
			multisig_addr := args[4]
			sequence := args[5]

			//sequence, err := strconv.ParseUint(args[5], 10, 64)
			//if err != nil {
			//	return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid sequence number (%s)", err)
			//}

			_, err = sdk.AccAddressFromBech32(argPartA)
			if err != nil {
				return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid partA address (%s)", err)
			}

			_, err = sdk.AccAddressFromBech32(argPartB)
			if err != nil {
				return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid partB address (%s)", err)
			}

			_, err = sdk.AccAddressFromBech32(multisig_addr)
			if err != nil {
				return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid multisig address (%s)", err)
			}

			cmd.Flags().Set(flags.FlagFrom, multisig_addr)
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			decCoin, err := sdk.ParseDecCoin(args[2])
			if err != nil {
				return err
			}
			coinA, _ := sdk.NormalizeDecCoin(decCoin).TruncateDecimal()

			decCoin, err = sdk.ParseDecCoin(args[3])
			if err != nil {
				return err
			}
			coinB, _ := sdk.NormalizeDecCoin(decCoin).TruncateDecimal()

			msg := types.NewMsgOpenChannel(
				clientCtx.GetFromAddress().String(),
				argPartA,
				argPartB,
				&coinA,
				&coinB,
				multisig_addr,
				sequence,
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
