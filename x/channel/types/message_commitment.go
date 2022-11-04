package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCommitment = "commitment"

var _ sdk.Msg = &MsgCommitment{}

func NewMsgCommitment(creator string, from string, coin *sdk.Coin, toTimelockAddr string, blockheight uint64, toBHashlockAddr string, hashcode string, coinlock *sdk.Coin, channelid string) *MsgCommitment {
	return &MsgCommitment{
		Creator:        creator,
		From:           from,
		CoinToCreator:  coin,
		ToTimelockAddr: toTimelockAddr,
		Timelock:       blockheight,
		ToHashlockAddr: toBHashlockAddr,
		Hashcode:       hashcode,
		CoinToHtlc:     coinlock,
		ChannelID:      channelid,
	}
}

func (msg *MsgCommitment) Route() string {
	return RouterKey
}

func (msg *MsgCommitment) Type() string {
	return TypeMsgCommitment
}

func (msg *MsgCommitment) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCommitment) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCommitment) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
