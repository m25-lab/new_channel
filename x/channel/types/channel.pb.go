// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: channel/channel.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Channel struct {
	Index        string `protobuf:"bytes,1,opt,name=Index,proto3" json:"Index,omitempty"`
	MultisigAddr string `protobuf:"bytes,2,opt,name=MultisigAddr,proto3" json:"MultisigAddr,omitempty"`
	PartA        string `protobuf:"bytes,3,opt,name=PartA,proto3" json:"PartA,omitempty"`
	PartB        string `protobuf:"bytes,4,opt,name=PartB,proto3" json:"PartB,omitempty"`
	Denom        string `protobuf:"bytes,5,opt,name=Denom,proto3" json:"Denom,omitempty"`
	Sequence     string `protobuf:"bytes,6,opt,name=Sequence,proto3" json:"Sequence,omitempty"`
}

func (m *Channel) Reset()         { *m = Channel{} }
func (m *Channel) String() string { return proto.CompactTextString(m) }
func (*Channel) ProtoMessage()    {}
func (*Channel) Descriptor() ([]byte, []int) {
	return fileDescriptor_3d995edae05c9a88, []int{0}
}
func (m *Channel) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Channel) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Channel.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Channel) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Channel.Merge(m, src)
}
func (m *Channel) XXX_Size() int {
	return m.Size()
}
func (m *Channel) XXX_DiscardUnknown() {
	xxx_messageInfo_Channel.DiscardUnknown(m)
}

var xxx_messageInfo_Channel proto.InternalMessageInfo

func (m *Channel) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *Channel) GetMultisigAddr() string {
	if m != nil {
		return m.MultisigAddr
	}
	return ""
}

func (m *Channel) GetPartA() string {
	if m != nil {
		return m.PartA
	}
	return ""
}

func (m *Channel) GetPartB() string {
	if m != nil {
		return m.PartB
	}
	return ""
}

func (m *Channel) GetDenom() string {
	if m != nil {
		return m.Denom
	}
	return ""
}

func (m *Channel) GetSequence() string {
	if m != nil {
		return m.Sequence
	}
	return ""
}

func init() {
	proto.RegisterType((*Channel)(nil), "channel.channel.Channel")
}

func init() { proto.RegisterFile("channel/channel.proto", fileDescriptor_3d995edae05c9a88) }

var fileDescriptor_3d995edae05c9a88 = []byte{
	// 209 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x4d, 0xce, 0x48, 0xcc,
	0xcb, 0x4b, 0xcd, 0xd1, 0x87, 0xd2, 0x7a, 0x05, 0x45, 0xf9, 0x25, 0xf9, 0x42, 0xfc, 0x30, 0x2e,
	0x94, 0x56, 0x5a, 0xc8, 0xc8, 0xc5, 0xee, 0x0c, 0x61, 0x0b, 0x89, 0x70, 0xb1, 0x7a, 0xe6, 0xa5,
	0xa4, 0x56, 0x48, 0x30, 0x2a, 0x30, 0x6a, 0x70, 0x06, 0x41, 0x38, 0x42, 0x4a, 0x5c, 0x3c, 0xbe,
	0xa5, 0x39, 0x25, 0x99, 0xc5, 0x99, 0xe9, 0x8e, 0x29, 0x29, 0x45, 0x12, 0x4c, 0x60, 0x49, 0x14,
	0x31, 0x90, 0xce, 0x80, 0xc4, 0xa2, 0x12, 0x47, 0x09, 0x66, 0x88, 0x4e, 0x30, 0x07, 0x26, 0xea,
	0x24, 0xc1, 0x82, 0x10, 0x75, 0x02, 0x89, 0xba, 0xa4, 0xe6, 0xe5, 0xe7, 0x4a, 0xb0, 0x42, 0x44,
	0xc1, 0x1c, 0x21, 0x29, 0x2e, 0x8e, 0xe0, 0xd4, 0xc2, 0xd2, 0xd4, 0xbc, 0xe4, 0x54, 0x09, 0x36,
	0xb0, 0x04, 0x9c, 0xef, 0xe4, 0x72, 0xe2, 0x91, 0x1c, 0xe3, 0x85, 0x47, 0x72, 0x8c, 0x0f, 0x1e,
	0xc9, 0x31, 0x4e, 0x78, 0x2c, 0xc7, 0x70, 0xe1, 0xb1, 0x1c, 0xc3, 0x8d, 0xc7, 0x72, 0x0c, 0x51,
	0x5a, 0xe9, 0x99, 0x25, 0x19, 0xa5, 0x49, 0x7a, 0xc9, 0xf9, 0xb9, 0xfa, 0xb9, 0x46, 0xa6, 0xba,
	0x39, 0x89, 0x49, 0x30, 0x0f, 0xeb, 0x57, 0xc0, 0x59, 0x25, 0x95, 0x05, 0xa9, 0xc5, 0x49, 0x6c,
	0xe0, 0x10, 0x30, 0x06, 0x04, 0x00, 0x00, 0xff, 0xff, 0xd4, 0xa9, 0xa4, 0xa1, 0x1a, 0x01, 0x00,
	0x00,
}

func (m *Channel) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Channel) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Channel) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Sequence) > 0 {
		i -= len(m.Sequence)
		copy(dAtA[i:], m.Sequence)
		i = encodeVarintChannel(dAtA, i, uint64(len(m.Sequence)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.Denom) > 0 {
		i -= len(m.Denom)
		copy(dAtA[i:], m.Denom)
		i = encodeVarintChannel(dAtA, i, uint64(len(m.Denom)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.PartB) > 0 {
		i -= len(m.PartB)
		copy(dAtA[i:], m.PartB)
		i = encodeVarintChannel(dAtA, i, uint64(len(m.PartB)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.PartA) > 0 {
		i -= len(m.PartA)
		copy(dAtA[i:], m.PartA)
		i = encodeVarintChannel(dAtA, i, uint64(len(m.PartA)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.MultisigAddr) > 0 {
		i -= len(m.MultisigAddr)
		copy(dAtA[i:], m.MultisigAddr)
		i = encodeVarintChannel(dAtA, i, uint64(len(m.MultisigAddr)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintChannel(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintChannel(dAtA []byte, offset int, v uint64) int {
	offset -= sovChannel(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Channel) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovChannel(uint64(l))
	}
	l = len(m.MultisigAddr)
	if l > 0 {
		n += 1 + l + sovChannel(uint64(l))
	}
	l = len(m.PartA)
	if l > 0 {
		n += 1 + l + sovChannel(uint64(l))
	}
	l = len(m.PartB)
	if l > 0 {
		n += 1 + l + sovChannel(uint64(l))
	}
	l = len(m.Denom)
	if l > 0 {
		n += 1 + l + sovChannel(uint64(l))
	}
	l = len(m.Sequence)
	if l > 0 {
		n += 1 + l + sovChannel(uint64(l))
	}
	return n
}

func sovChannel(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozChannel(x uint64) (n int) {
	return sovChannel(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Channel) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowChannel
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Channel: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Channel: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthChannel
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthChannel
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MultisigAddr", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthChannel
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthChannel
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.MultisigAddr = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PartA", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthChannel
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthChannel
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PartA = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PartB", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthChannel
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthChannel
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PartB = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Denom", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthChannel
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthChannel
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Denom = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Sequence", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthChannel
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthChannel
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Sequence = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipChannel(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthChannel
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipChannel(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowChannel
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthChannel
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupChannel
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthChannel
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthChannel        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowChannel          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupChannel = fmt.Errorf("proto: unexpected end of group")
)
