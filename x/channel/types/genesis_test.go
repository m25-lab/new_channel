package types_test

import (
	"testing"

	"github.com/AstraProtocol/channel/x/channel/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				CommitmentList: []types.Commitment{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				ChannelList: []types.Channel{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				FwdcommitList: []types.Fwdcommit{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated commitment",
			genState: &types.GenesisState{
				CommitmentList: []types.Commitment{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated channel",
			genState: &types.GenesisState{
				ChannelList: []types.Channel{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated fwdcommit",
			genState: &types.GenesisState{
				FwdcommitList: []types.Fwdcommit{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
