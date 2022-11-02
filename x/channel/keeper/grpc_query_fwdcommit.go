package keeper

import (
	"context"

	"github.com/AstraProtocol/channel/x/channel/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) FwdcommitAll(c context.Context, req *types.QueryAllFwdcommitRequest) (*types.QueryAllFwdcommitResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var fwdcommits []types.Fwdcommit
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	fwdcommitStore := prefix.NewStore(store, types.KeyPrefix(types.FwdcommitKeyPrefix))

	pageRes, err := query.Paginate(fwdcommitStore, req.Pagination, func(key []byte, value []byte) error {
		var fwdcommit types.Fwdcommit
		if err := k.cdc.Unmarshal(value, &fwdcommit); err != nil {
			return err
		}

		fwdcommits = append(fwdcommits, fwdcommit)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllFwdcommitResponse{Fwdcommit: fwdcommits, Pagination: pageRes}, nil
}

func (k Keeper) Fwdcommit(c context.Context, req *types.QueryGetFwdcommitRequest) (*types.QueryGetFwdcommitResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetFwdcommit(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetFwdcommitResponse{Fwdcommit: val}, nil
}
