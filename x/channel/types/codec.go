package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	cryptocodec "github.com/cosmos/cosmos-sdk/crypto/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCommitment{}, "channel/Commitment", nil)
	cdc.RegisterConcrete(&MsgWithdrawTimelock{}, "channel/WithdrawTimelock", nil)
	cdc.RegisterConcrete(&MsgWithdrawHashlock{}, "channel/WithdrawHashlock", nil)
	cdc.RegisterConcrete(&MsgCloseChannel{}, "channel/CloseChannel", nil)
	cdc.RegisterConcrete(&MsgOpenChannel{}, "channel/OpenChannel", nil)
	cdc.RegisterConcrete(&MsgFund{}, "channel/Fund", nil)
	cdc.RegisterConcrete(&MsgAcceptfund{}, "channel/Acceptfund", nil)
// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCommitment{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgWithdrawTimelock{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgWithdrawHashlock{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCloseChannel{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgOpenChannel{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgFund{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
	&MsgAcceptfund{},
)
// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewAminoCodec(Amino)
)

func init() {
	RegisterCodec(Amino)
	cryptocodec.RegisterCrypto(Amino)
}
