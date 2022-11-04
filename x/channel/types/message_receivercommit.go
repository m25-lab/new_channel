package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgReceivercommit = "receivercommit"

var _ sdk.Msg = &MsgReceivercommit{}

func NewMsgReceivercommit(creator string, from string, channelid string, cointoreceiver *sdk.Coin, cointohtlc *sdk.Coin, hashcodehtlc string, timelockhtlc string, cointransfer *sdk.Coin, hashcodedest string, timelocksender string, multisig string) *MsgReceivercommit {
	return &MsgReceivercommit{
		Creator:        creator,
		From:           from,
		ChannelID:      channelid,
		CoinToReceiver: cointoreceiver,
		CoinToHtlc:     cointohtlc,
		HashcodeHtlc:   hashcodehtlc,
		TimelockHtlc:   timelockhtlc,
		CoinTransfer:   cointransfer,
		HashcodeDest:   hashcodedest,
		TimelockSender: timelocksender,
		Multisig:       multisig,
	}
}

func (msg *MsgReceivercommit) Route() string {
	return RouterKey
}

func (msg *MsgReceivercommit) Type() string {
	return TypeMsgReceivercommit
}

func (msg *MsgReceivercommit) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgReceivercommit) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgReceivercommit) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
