package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		CommitmentList: []Commitment{},
		ChannelList:    []Channel{},
		FwdcommitList: []Fwdcommit{},
// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in commitment
	commitmentIndexMap := make(map[string]struct{})

	for _, elem := range gs.CommitmentList {
		index := string(CommitmentKey(elem.Index))
		if _, ok := commitmentIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for commitment")
		}
		commitmentIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in channel
	channelIndexMap := make(map[string]struct{})

	for _, elem := range gs.ChannelList {
		index := string(ChannelKey(elem.Index))
		if _, ok := channelIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for channel")
		}
		channelIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in fwdcommit
fwdcommitIndexMap := make(map[string]struct{})

for _, elem := range gs.FwdcommitList {
	index := string(FwdcommitKey(elem.Index))
	if _, ok := fwdcommitIndexMap[index]; ok {
		return fmt.Errorf("duplicated index for fwdcommit")
	}
	fwdcommitIndexMap[index] = struct{}{}
}
// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
