package keeper

import (
	"github.com/AstraProtocol/channel/x/channel/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetFwdcommit set a specific fwdcommit in the store from its index
func (k Keeper) SetFwdcommit(ctx sdk.Context, fwdcommit types.Fwdcommit) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FwdcommitKeyPrefix))
	b := k.cdc.MustMarshal(&fwdcommit)
	store.Set(types.FwdcommitKey(
		fwdcommit.Index,
	), b)
}

// GetFwdcommit returns a fwdcommit from its index
func (k Keeper) GetFwdcommit(
	ctx sdk.Context,
	index string,

) (val types.Fwdcommit, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FwdcommitKeyPrefix))

	b := store.Get(types.FwdcommitKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveFwdcommit removes a fwdcommit from the store
func (k Keeper) RemoveFwdcommit(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FwdcommitKeyPrefix))
	store.Delete(types.FwdcommitKey(
		index,
	))
}

// GetAllFwdcommit returns all fwdcommit
func (k Keeper) GetAllFwdcommit(ctx sdk.Context) (list []types.Fwdcommit) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FwdcommitKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Fwdcommit
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
