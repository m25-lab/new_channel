package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendercommit = "sendercommit"

var _ sdk.Msg = &MsgSendercommit{}

func NewMsgSendercommit(creator string, from string, channelid string, cointosender *sdk.Coin, cointohtlc *sdk.Coin, hashcodehtlc string, timelockhtlc string, cointransfer *sdk.Coin, hashcodedest string, timelockreceiver string, timelocksender string, multisig string) *MsgSendercommit {
	return &MsgSendercommit{
		Creator:          creator,
		From:             from,
		ChannelID:        channelid,
		CoinToSender:     cointosender,
		CoinToHtlc:       cointohtlc,
		HashcodeHtlc:     hashcodehtlc,
		TimelockHtlc:     timelockhtlc,
		CoinTransfer:     cointransfer,
		HashcodeDest:     hashcodedest,
		TimelockReceiver: timelockreceiver,
		TimelockSender:   timelocksender,
		Multisig:         multisig,
	}
}

func (msg *MsgSendercommit) Route() string {
	return RouterKey
}

func (msg *MsgSendercommit) Type() string {
	return TypeMsgSendercommit
}

func (msg *MsgSendercommit) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendercommit) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendercommit) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
