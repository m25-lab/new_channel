package types

import "encoding/binary"

var _ binary.ByteOrder

const (
    // FwdcommitKeyPrefix is the prefix to retrieve all Fwdcommit
	FwdcommitKeyPrefix = "Fwdcommit/value/"
)

// FwdcommitKey returns the store key to retrieve a Fwdcommit from the index fields
func FwdcommitKey(
index string,
) []byte {
	var key []byte
    
    indexBytes := []byte(index)
    key = append(key, indexBytes...)
    key = append(key, []byte("/")...)
    
	return key
}