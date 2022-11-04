/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "channel.channel";

export interface MsgCommitment {
  Creator: string;
  From: string;
  CoinToCreator: Coin | undefined;
  ToTimelockAddr: string;
  Timelock: number;
  ToHashlockAddr: string;
  Hashcode: string;
  CoinToHtlc: Coin | undefined;
  ChannelID: string;
}

export interface MsgCommitmentResponse {
  Index: string;
}

export interface MsgWithdrawTimelock {
  Creator: string;
  To: string;
  Index: string;
}

export interface MsgWithdrawTimelockResponse {}

export interface MsgWithdrawHashlock {
  Creator: string;
  To: string;
  Index: string;
  Secret: string;
}

export interface MsgWithdrawHashlockResponse {}

export interface MsgCloseChannel {
  Creator: string;
  From: string;
  ToA: string;
  CoinA: Coin | undefined;
  ToB: string;
  CoinB: Coin | undefined;
  ChannelID: string;
}

export interface MsgCloseChannelResponse {}

export interface MsgOpenChannel {
  Creator: string;
  PartA: string;
  PartB: string;
  CoinA: Coin | undefined;
  CoinB: Coin | undefined;
  MultisigAddr: string;
  Sequence: string;
}

export interface MsgOpenChannelResponse {
  Index: string;
}

export interface MsgFund {
  Creator: string;
  From: string;
  ChannelID: string;
  CoinToHtlc: Coin | undefined;
  Hashcode: string;
  Timelock: string;
  Multisig: string;
}

export interface MsgFundResponse {
  Index: string;
}

export interface MsgAcceptfund {
  Creator: string;
  From: string;
  ChannelID: string;
  CoinToAcceptSide: Coin | undefined;
  Hashcode: string;
  Timelock: string;
  Multisig: string;
}

export interface MsgAcceptfundResponse {
  Index: string;
}

export interface MsgSendercommit {
  Creator: string;
  From: string;
  ChannelID: string;
  CoinToSender: Coin | undefined;
  CoinToHtlc: Coin | undefined;
  HashcodeHtlc: string;
  TimelockHtlc: string;
  CoinTransfer: Coin | undefined;
  HashcodeDest: string;
  TimelockReceiver: string;
  TimelockSender: string;
  Multisig: string;
}

export interface MsgSendercommitResponse {
  IndexHtlc: string;
  IndexTransfer: string;
}

export interface MsgSenderwithdrawtimelock {
  Creator: string;
  TransferIndex: string;
  To: string;
}

export interface MsgSenderwithdrawtimelockResponse {}

export interface MsgSenderwithdrawhashlock {
  Creator: string;
  TransferIndex: string;
  To: string;
  Secret: string;
}

export interface MsgSenderwithdrawhashlockResponse {}

export interface MsgReceiverwithdraw {
  Creator: string;
  TransferIndex: string;
  To: string;
  Secret: string;
}

export interface MsgReceiverwithdrawResponse {}

export interface MsgReceivercommit {
  Creator: string;
  From: string;
  ChannelID: string;
  CoinToReceiver: Coin | undefined;
  CoinToHtlc: Coin | undefined;
  HashcodeHtlc: string;
  TimelockHtlc: string;
  CoinTransfer: Coin | undefined;
  HashcodeDest: string;
  TimelockSender: string;
  Multisig: string;
}

export interface MsgReceivercommitResponse {
  IndexHtlc: string;
  IndexTransfer: string;
}

const baseMsgCommitment: object = {
  Creator: "",
  From: "",
  ToTimelockAddr: "",
  Timelock: 0,
  ToHashlockAddr: "",
  Hashcode: "",
  ChannelID: "",
};

export const MsgCommitment = {
  encode(message: MsgCommitment, writer: Writer = Writer.create()): Writer {
    if (message.Creator !== "") {
      writer.uint32(10).string(message.Creator);
    }
    if (message.From !== "") {
      writer.uint32(18).string(message.From);
    }
    if (message.CoinToCreator !== undefined) {
      Coin.encode(message.CoinToCreator, writer.uint32(26).fork()).ldelim();
    }
    if (message.ToTimelockAddr !== "") {
      writer.uint32(34).string(message.ToTimelockAddr);
    }
    if (message.Timelock !== 0) {
      writer.uint32(40).uint64(message.Timelock);
    }
    if (message.ToHashlockAddr !== "") {
      writer.uint32(50).string(message.ToHashlockAddr);
    }
    if (message.Hashcode !== "") {
      writer.uint32(58).string(message.Hashcode);
    }
    if (message.CoinToHtlc !== undefined) {
      Coin.encode(message.CoinToHtlc, writer.uint32(66).fork()).ldelim();
    }
    if (message.ChannelID !== "") {
      writer.uint32(74).string(message.ChannelID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCommitment {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCommitment } as MsgCommitment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Creator = reader.string();
          break;
        case 2:
          message.From = reader.string();
          break;
        case 3:
          message.CoinToCreator = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.ToTimelockAddr = reader.string();
          break;
        case 5:
          message.Timelock = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.ToHashlockAddr = reader.string();
          break;
        case 7:
          message.Hashcode = reader.string();
          break;
        case 8:
          message.CoinToHtlc = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.ChannelID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCommitment {
    const message = { ...baseMsgCommitment } as MsgCommitment;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = String(object.Creator);
    } else {
      message.Creator = "";
    }
    if (object.From !== undefined && object.From !== null) {
      message.From = String(object.From);
    } else {
      message.From = "";
    }
    if (object.CoinToCreator !== undefined && object.CoinToCreator !== null) {
      message.CoinToCreator = Coin.fromJSON(object.CoinToCreator);
    } else {
      message.CoinToCreator = undefined;
    }
    if (object.ToTimelockAddr !== undefined && object.ToTimelockAddr !== null) {
      message.ToTimelockAddr = String(object.ToTimelockAddr);
    } else {
      message.ToTimelockAddr = "";
    }
    if (object.Timelock !== undefined && object.Timelock !== null) {
      message.Timelock = Number(object.Timelock);
    } else {
      message.Timelock = 0;
    }
    if (object.ToHashlockAddr !== undefined && object.ToHashlockAddr !== null) {
      message.ToHashlockAddr = String(object.ToHashlockAddr);
    } else {
      message.ToHashlockAddr = "";
    }
    if (object.Hashcode !== undefined && object.Hashcode !== null) {
      message.Hashcode = String(object.Hashcode);
    } else {
      message.Hashcode = "";
    }
    if (object.CoinToHtlc !== undefined && object.CoinToHtlc !== null) {
      message.CoinToHtlc = Coin.fromJSON(object.CoinToHtlc);
    } else {
      message.CoinToHtlc = undefined;
    }
    if (object.ChannelID !== undefined && object.ChannelID !== null) {
      message.ChannelID = String(object.ChannelID);
    } else {
      message.ChannelID = "";
    }
    return message;
  },

  toJSON(message: MsgCommitment): unknown {
    const obj: any = {};
    message.Creator !== undefined && (obj.Creator = message.Creator);
    message.From !== undefined && (obj.From = message.From);
    message.CoinToCreator !== undefined &&
      (obj.CoinToCreator = message.CoinToCreator
        ? Coin.toJSON(message.CoinToCreator)
        : undefined);
    message.ToTimelockAddr !== undefined &&
      (obj.ToTimelockAddr = message.ToTimelockAddr);
    message.Timelock !== undefined && (obj.Timelock = message.Timelock);
    message.ToHashlockAddr !== undefined &&
      (obj.ToHashlockAddr = message.ToHashlockAddr);
    message.Hashcode !== undefined && (obj.Hashcode = message.Hashcode);
    message.CoinToHtlc !== undefined &&
      (obj.CoinToHtlc = message.CoinToHtlc
        ? Coin.toJSON(message.CoinToHtlc)
        : undefined);
    message.ChannelID !== undefined && (obj.ChannelID = message.ChannelID);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCommitment>): MsgCommitment {
    const message = { ...baseMsgCommitment } as MsgCommitment;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = object.Creator;
    } else {
      message.Creator = "";
    }
    if (object.From !== undefined && object.From !== null) {
      message.From = object.From;
    } else {
      message.From = "";
    }
    if (object.CoinToCreator !== undefined && object.CoinToCreator !== null) {
      message.CoinToCreator = Coin.fromPartial(object.CoinToCreator);
    } else {
      message.CoinToCreator = undefined;
    }
    if (object.ToTimelockAddr !== undefined && object.ToTimelockAddr !== null) {
      message.ToTimelockAddr = object.ToTimelockAddr;
    } else {
      message.ToTimelockAddr = "";
    }
    if (object.Timelock !== undefined && object.Timelock !== null) {
      message.Timelock = object.Timelock;
    } else {
      message.Timelock = 0;
    }
    if (object.ToHashlockAddr !== undefined && object.ToHashlockAddr !== null) {
      message.ToHashlockAddr = object.ToHashlockAddr;
    } else {
      message.ToHashlockAddr = "";
    }
    if (object.Hashcode !== undefined && object.Hashcode !== null) {
      message.Hashcode = object.Hashcode;
    } else {
      message.Hashcode = "";
    }
    if (object.CoinToHtlc !== undefined && object.CoinToHtlc !== null) {
      message.CoinToHtlc = Coin.fromPartial(object.CoinToHtlc);
    } else {
      message.CoinToHtlc = undefined;
    }
    if (object.ChannelID !== undefined && object.ChannelID !== null) {
      message.ChannelID = object.ChannelID;
    } else {
      message.ChannelID = "";
    }
    return message;
  },
};

const baseMsgCommitmentResponse: object = { Index: "" };

export const MsgCommitmentResponse = {
  encode(
    message: MsgCommitmentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Index !== "") {
      writer.uint32(10).string(message.Index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCommitmentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCommitmentResponse } as MsgCommitmentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCommitmentResponse {
    const message = { ...baseMsgCommitmentResponse } as MsgCommitmentResponse;
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = String(object.Index);
    } else {
      message.Index = "";
    }
    return message;
  },

  toJSON(message: MsgCommitmentResponse): unknown {
    const obj: any = {};
    message.Index !== undefined && (obj.Index = message.Index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCommitmentResponse>
  ): MsgCommitmentResponse {
    const message = { ...baseMsgCommitmentResponse } as MsgCommitmentResponse;
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = object.Index;
    } else {
      message.Index = "";
    }
    return message;
  },
};

const baseMsgWithdrawTimelock: object = { Creator: "", To: "", Index: "" };

export const MsgWithdrawTimelock = {
  encode(
    message: MsgWithdrawTimelock,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Creator !== "") {
      writer.uint32(10).string(message.Creator);
    }
    if (message.To !== "") {
      writer.uint32(18).string(message.To);
    }
    if (message.Index !== "") {
      writer.uint32(26).string(message.Index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWithdrawTimelock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawTimelock } as MsgWithdrawTimelock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Creator = reader.string();
          break;
        case 2:
          message.To = reader.string();
          break;
        case 3:
          message.Index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawTimelock {
    const message = { ...baseMsgWithdrawTimelock } as MsgWithdrawTimelock;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = String(object.Creator);
    } else {
      message.Creator = "";
    }
    if (object.To !== undefined && object.To !== null) {
      message.To = String(object.To);
    } else {
      message.To = "";
    }
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = String(object.Index);
    } else {
      message.Index = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawTimelock): unknown {
    const obj: any = {};
    message.Creator !== undefined && (obj.Creator = message.Creator);
    message.To !== undefined && (obj.To = message.To);
    message.Index !== undefined && (obj.Index = message.Index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawTimelock>): MsgWithdrawTimelock {
    const message = { ...baseMsgWithdrawTimelock } as MsgWithdrawTimelock;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = object.Creator;
    } else {
      message.Creator = "";
    }
    if (object.To !== undefined && object.To !== null) {
      message.To = object.To;
    } else {
      message.To = "";
    }
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = object.Index;
    } else {
      message.Index = "";
    }
    return message;
  },
};

const baseMsgWithdrawTimelockResponse: object = {};

export const MsgWithdrawTimelockResponse = {
  encode(
    _: MsgWithdrawTimelockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgWithdrawTimelockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawTimelockResponse,
    } as MsgWithdrawTimelockResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawTimelockResponse {
    const message = {
      ...baseMsgWithdrawTimelockResponse,
    } as MsgWithdrawTimelockResponse;
    return message;
  },

  toJSON(_: MsgWithdrawTimelockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawTimelockResponse>
  ): MsgWithdrawTimelockResponse {
    const message = {
      ...baseMsgWithdrawTimelockResponse,
    } as MsgWithdrawTimelockResponse;
    return message;
  },
};

const baseMsgWithdrawHashlock: object = {
  Creator: "",
  To: "",
  Index: "",
  Secret: "",
};

export const MsgWithdrawHashlock = {
  encode(
    message: MsgWithdrawHashlock,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Creator !== "") {
      writer.uint32(10).string(message.Creator);
    }
    if (message.To !== "") {
      writer.uint32(18).string(message.To);
    }
    if (message.Index !== "") {
      writer.uint32(26).string(message.Index);
    }
    if (message.Secret !== "") {
      writer.uint32(34).string(message.Secret);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWithdrawHashlock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawHashlock } as MsgWithdrawHashlock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Creator = reader.string();
          break;
        case 2:
          message.To = reader.string();
          break;
        case 3:
          message.Index = reader.string();
          break;
        case 4:
          message.Secret = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawHashlock {
    const message = { ...baseMsgWithdrawHashlock } as MsgWithdrawHashlock;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = String(object.Creator);
    } else {
      message.Creator = "";
    }
    if (object.To !== undefined && object.To !== null) {
      message.To = String(object.To);
    } else {
      message.To = "";
    }
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = String(object.Index);
    } else {
      message.Index = "";
    }
    if (object.Secret !== undefined && object.Secret !== null) {
      message.Secret = String(object.Secret);
    } else {
      message.Secret = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawHashlock): unknown {
    const obj: any = {};
    message.Creator !== undefined && (obj.Creator = message.Creator);
    message.To !== undefined && (obj.To = message.To);
    message.Index !== undefined && (obj.Index = message.Index);
    message.Secret !== undefined && (obj.Secret = message.Secret);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawHashlock>): MsgWithdrawHashlock {
    const message = { ...baseMsgWithdrawHashlock } as MsgWithdrawHashlock;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = object.Creator;
    } else {
      message.Creator = "";
    }
    if (object.To !== undefined && object.To !== null) {
      message.To = object.To;
    } else {
      message.To = "";
    }
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = object.Index;
    } else {
      message.Index = "";
    }
    if (object.Secret !== undefined && object.Secret !== null) {
      message.Secret = object.Secret;
    } else {
      message.Secret = "";
    }
    return message;
  },
};

const baseMsgWithdrawHashlockResponse: object = {};

export const MsgWithdrawHashlockResponse = {
  encode(
    _: MsgWithdrawHashlockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgWithdrawHashlockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawHashlockResponse,
    } as MsgWithdrawHashlockResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawHashlockResponse {
    const message = {
      ...baseMsgWithdrawHashlockResponse,
    } as MsgWithdrawHashlockResponse;
    return message;
  },

  toJSON(_: MsgWithdrawHashlockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawHashlockResponse>
  ): MsgWithdrawHashlockResponse {
    const message = {
      ...baseMsgWithdrawHashlockResponse,
    } as MsgWithdrawHashlockResponse;
    return message;
  },
};

const baseMsgCloseChannel: object = {
  Creator: "",
  From: "",
  ToA: "",
  ToB: "",
  ChannelID: "",
};

export const MsgCloseChannel = {
  encode(message: MsgCloseChannel, writer: Writer = Writer.create()): Writer {
    if (message.Creator !== "") {
      writer.uint32(10).string(message.Creator);
    }
    if (message.From !== "") {
      writer.uint32(18).string(message.From);
    }
    if (message.ToA !== "") {
      writer.uint32(26).string(message.ToA);
    }
    if (message.CoinA !== undefined) {
      Coin.encode(message.CoinA, writer.uint32(34).fork()).ldelim();
    }
    if (message.ToB !== "") {
      writer.uint32(42).string(message.ToB);
    }
    if (message.CoinB !== undefined) {
      Coin.encode(message.CoinB, writer.uint32(50).fork()).ldelim();
    }
    if (message.ChannelID !== "") {
      writer.uint32(58).string(message.ChannelID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCloseChannel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCloseChannel } as MsgCloseChannel;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Creator = reader.string();
          break;
        case 2:
          message.From = reader.string();
          break;
        case 3:
          message.ToA = reader.string();
          break;
        case 4:
          message.CoinA = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.ToB = reader.string();
          break;
        case 6:
          message.CoinB = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.ChannelID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCloseChannel {
    const message = { ...baseMsgCloseChannel } as MsgCloseChannel;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = String(object.Creator);
    } else {
      message.Creator = "";
    }
    if (object.From !== undefined && object.From !== null) {
      message.From = String(object.From);
    } else {
      message.From = "";
    }
    if (object.ToA !== undefined && object.ToA !== null) {
      message.ToA = String(object.ToA);
    } else {
      message.ToA = "";
    }
    if (object.CoinA !== undefined && object.CoinA !== null) {
      message.CoinA = Coin.fromJSON(object.CoinA);
    } else {
      message.CoinA = undefined;
    }
    if (object.ToB !== undefined && object.ToB !== null) {
      message.ToB = String(object.ToB);
    } else {
      message.ToB = "";
    }
    if (object.CoinB !== undefined && object.CoinB !== null) {
      message.CoinB = Coin.fromJSON(object.CoinB);
    } else {
      message.CoinB = undefined;
    }
    if (object.ChannelID !== undefined && object.ChannelID !== null) {
      message.ChannelID = String(object.ChannelID);
    } else {
      message.ChannelID = "";
    }
    return message;
  },

  toJSON(message: MsgCloseChannel): unknown {
    const obj: any = {};
    message.Creator !== undefined && (obj.Creator = message.Creator);
    message.From !== undefined && (obj.From = message.From);
    message.ToA !== undefined && (obj.ToA = message.ToA);
    message.CoinA !== undefined &&
      (obj.CoinA = message.CoinA ? Coin.toJSON(message.CoinA) : undefined);
    message.ToB !== undefined && (obj.ToB = message.ToB);
    message.CoinB !== undefined &&
      (obj.CoinB = message.CoinB ? Coin.toJSON(message.CoinB) : undefined);
    message.ChannelID !== undefined && (obj.ChannelID = message.ChannelID);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCloseChannel>): MsgCloseChannel {
    const message = { ...baseMsgCloseChannel } as MsgCloseChannel;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = object.Creator;
    } else {
      message.Creator = "";
    }
    if (object.From !== undefined && object.From !== null) {
      message.From = object.From;
    } else {
      message.From = "";
    }
    if (object.ToA !== undefined && object.ToA !== null) {
      message.ToA = object.ToA;
    } else {
      message.ToA = "";
    }
    if (object.CoinA !== undefined && object.CoinA !== null) {
      message.CoinA = Coin.fromPartial(object.CoinA);
    } else {
      message.CoinA = undefined;
    }
    if (object.ToB !== undefined && object.ToB !== null) {
      message.ToB = object.ToB;
    } else {
      message.ToB = "";
    }
    if (object.CoinB !== undefined && object.CoinB !== null) {
      message.CoinB = Coin.fromPartial(object.CoinB);
    } else {
      message.CoinB = undefined;
    }
    if (object.ChannelID !== undefined && object.ChannelID !== null) {
      message.ChannelID = object.ChannelID;
    } else {
      message.ChannelID = "";
    }
    return message;
  },
};

const baseMsgCloseChannelResponse: object = {};

export const MsgCloseChannelResponse = {
  encode(_: MsgCloseChannelResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCloseChannelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCloseChannelResponse,
    } as MsgCloseChannelResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCloseChannelResponse {
    const message = {
      ...baseMsgCloseChannelResponse,
    } as MsgCloseChannelResponse;
    return message;
  },

  toJSON(_: MsgCloseChannelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCloseChannelResponse>
  ): MsgCloseChannelResponse {
    const message = {
      ...baseMsgCloseChannelResponse,
    } as MsgCloseChannelResponse;
    return message;
  },
};

const baseMsgOpenChannel: object = {
  Creator: "",
  PartA: "",
  PartB: "",
  MultisigAddr: "",
  Sequence: "",
};

export const MsgOpenChannel = {
  encode(message: MsgOpenChannel, writer: Writer = Writer.create()): Writer {
    if (message.Creator !== "") {
      writer.uint32(10).string(message.Creator);
    }
    if (message.PartA !== "") {
      writer.uint32(18).string(message.PartA);
    }
    if (message.PartB !== "") {
      writer.uint32(26).string(message.PartB);
    }
    if (message.CoinA !== undefined) {
      Coin.encode(message.CoinA, writer.uint32(34).fork()).ldelim();
    }
    if (message.CoinB !== undefined) {
      Coin.encode(message.CoinB, writer.uint32(42).fork()).ldelim();
    }
    if (message.MultisigAddr !== "") {
      writer.uint32(50).string(message.MultisigAddr);
    }
    if (message.Sequence !== "") {
      writer.uint32(58).string(message.Sequence);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgOpenChannel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgOpenChannel } as MsgOpenChannel;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Creator = reader.string();
          break;
        case 2:
          message.PartA = reader.string();
          break;
        case 3:
          message.PartB = reader.string();
          break;
        case 4:
          message.CoinA = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.CoinB = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.MultisigAddr = reader.string();
          break;
        case 7:
          message.Sequence = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOpenChannel {
    const message = { ...baseMsgOpenChannel } as MsgOpenChannel;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = String(object.Creator);
    } else {
      message.Creator = "";
    }
    if (object.PartA !== undefined && object.PartA !== null) {
      message.PartA = String(object.PartA);
    } else {
      message.PartA = "";
    }
    if (object.PartB !== undefined && object.PartB !== null) {
      message.PartB = String(object.PartB);
    } else {
      message.PartB = "";
    }
    if (object.CoinA !== undefined && object.CoinA !== null) {
      message.CoinA = Coin.fromJSON(object.CoinA);
    } else {
      message.CoinA = undefined;
    }
    if (object.CoinB !== undefined && object.CoinB !== null) {
      message.CoinB = Coin.fromJSON(object.CoinB);
    } else {
      message.CoinB = undefined;
    }
    if (object.MultisigAddr !== undefined && object.MultisigAddr !== null) {
      message.MultisigAddr = String(object.MultisigAddr);
    } else {
      message.MultisigAddr = "";
    }
    if (object.Sequence !== undefined && object.Sequence !== null) {
      message.Sequence = String(object.Sequence);
    } else {
      message.Sequence = "";
    }
    return message;
  },

  toJSON(message: MsgOpenChannel): unknown {
    const obj: any = {};
    message.Creator !== undefined && (obj.Creator = message.Creator);
    message.PartA !== undefined && (obj.PartA = message.PartA);
    message.PartB !== undefined && (obj.PartB = message.PartB);
    message.CoinA !== undefined &&
      (obj.CoinA = message.CoinA ? Coin.toJSON(message.CoinA) : undefined);
    message.CoinB !== undefined &&
      (obj.CoinB = message.CoinB ? Coin.toJSON(message.CoinB) : undefined);
    message.MultisigAddr !== undefined &&
      (obj.MultisigAddr = message.MultisigAddr);
    message.Sequence !== undefined && (obj.Sequence = message.Sequence);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgOpenChannel>): MsgOpenChannel {
    const message = { ...baseMsgOpenChannel } as MsgOpenChannel;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = object.Creator;
    } else {
      message.Creator = "";
    }
    if (object.PartA !== undefined && object.PartA !== null) {
      message.PartA = object.PartA;
    } else {
      message.PartA = "";
    }
    if (object.PartB !== undefined && object.PartB !== null) {
      message.PartB = object.PartB;
    } else {
      message.PartB = "";
    }
    if (object.CoinA !== undefined && object.CoinA !== null) {
      message.CoinA = Coin.fromPartial(object.CoinA);
    } else {
      message.CoinA = undefined;
    }
    if (object.CoinB !== undefined && object.CoinB !== null) {
      message.CoinB = Coin.fromPartial(object.CoinB);
    } else {
      message.CoinB = undefined;
    }
    if (object.MultisigAddr !== undefined && object.MultisigAddr !== null) {
      message.MultisigAddr = object.MultisigAddr;
    } else {
      message.MultisigAddr = "";
    }
    if (object.Sequence !== undefined && object.Sequence !== null) {
      message.Sequence = object.Sequence;
    } else {
      message.Sequence = "";
    }
    return message;
  },
};

const baseMsgOpenChannelResponse: object = { Index: "" };

export const MsgOpenChannelResponse = {
  encode(
    message: MsgOpenChannelResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Index !== "") {
      writer.uint32(10).string(message.Index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgOpenChannelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgOpenChannelResponse } as MsgOpenChannelResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOpenChannelResponse {
    const message = { ...baseMsgOpenChannelResponse } as MsgOpenChannelResponse;
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = String(object.Index);
    } else {
      message.Index = "";
    }
    return message;
  },

  toJSON(message: MsgOpenChannelResponse): unknown {
    const obj: any = {};
    message.Index !== undefined && (obj.Index = message.Index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgOpenChannelResponse>
  ): MsgOpenChannelResponse {
    const message = { ...baseMsgOpenChannelResponse } as MsgOpenChannelResponse;
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = object.Index;
    } else {
      message.Index = "";
    }
    return message;
  },
};

const baseMsgFund: object = {
  Creator: "",
  From: "",
  ChannelID: "",
  Hashcode: "",
  Timelock: "",
  Multisig: "",
};

export const MsgFund = {
  encode(message: MsgFund, writer: Writer = Writer.create()): Writer {
    if (message.Creator !== "") {
      writer.uint32(10).string(message.Creator);
    }
    if (message.From !== "") {
      writer.uint32(18).string(message.From);
    }
    if (message.ChannelID !== "") {
      writer.uint32(26).string(message.ChannelID);
    }
    if (message.CoinToHtlc !== undefined) {
      Coin.encode(message.CoinToHtlc, writer.uint32(34).fork()).ldelim();
    }
    if (message.Hashcode !== "") {
      writer.uint32(42).string(message.Hashcode);
    }
    if (message.Timelock !== "") {
      writer.uint32(50).string(message.Timelock);
    }
    if (message.Multisig !== "") {
      writer.uint32(58).string(message.Multisig);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFund {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFund } as MsgFund;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Creator = reader.string();
          break;
        case 2:
          message.From = reader.string();
          break;
        case 3:
          message.ChannelID = reader.string();
          break;
        case 4:
          message.CoinToHtlc = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.Hashcode = reader.string();
          break;
        case 6:
          message.Timelock = reader.string();
          break;
        case 7:
          message.Multisig = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFund {
    const message = { ...baseMsgFund } as MsgFund;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = String(object.Creator);
    } else {
      message.Creator = "";
    }
    if (object.From !== undefined && object.From !== null) {
      message.From = String(object.From);
    } else {
      message.From = "";
    }
    if (object.ChannelID !== undefined && object.ChannelID !== null) {
      message.ChannelID = String(object.ChannelID);
    } else {
      message.ChannelID = "";
    }
    if (object.CoinToHtlc !== undefined && object.CoinToHtlc !== null) {
      message.CoinToHtlc = Coin.fromJSON(object.CoinToHtlc);
    } else {
      message.CoinToHtlc = undefined;
    }
    if (object.Hashcode !== undefined && object.Hashcode !== null) {
      message.Hashcode = String(object.Hashcode);
    } else {
      message.Hashcode = "";
    }
    if (object.Timelock !== undefined && object.Timelock !== null) {
      message.Timelock = String(object.Timelock);
    } else {
      message.Timelock = "";
    }
    if (object.Multisig !== undefined && object.Multisig !== null) {
      message.Multisig = String(object.Multisig);
    } else {
      message.Multisig = "";
    }
    return message;
  },

  toJSON(message: MsgFund): unknown {
    const obj: any = {};
    message.Creator !== undefined && (obj.Creator = message.Creator);
    message.From !== undefined && (obj.From = message.From);
    message.ChannelID !== undefined && (obj.ChannelID = message.ChannelID);
    message.CoinToHtlc !== undefined &&
      (obj.CoinToHtlc = message.CoinToHtlc
        ? Coin.toJSON(message.CoinToHtlc)
        : undefined);
    message.Hashcode !== undefined && (obj.Hashcode = message.Hashcode);
    message.Timelock !== undefined && (obj.Timelock = message.Timelock);
    message.Multisig !== undefined && (obj.Multisig = message.Multisig);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgFund>): MsgFund {
    const message = { ...baseMsgFund } as MsgFund;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = object.Creator;
    } else {
      message.Creator = "";
    }
    if (object.From !== undefined && object.From !== null) {
      message.From = object.From;
    } else {
      message.From = "";
    }
    if (object.ChannelID !== undefined && object.ChannelID !== null) {
      message.ChannelID = object.ChannelID;
    } else {
      message.ChannelID = "";
    }
    if (object.CoinToHtlc !== undefined && object.CoinToHtlc !== null) {
      message.CoinToHtlc = Coin.fromPartial(object.CoinToHtlc);
    } else {
      message.CoinToHtlc = undefined;
    }
    if (object.Hashcode !== undefined && object.Hashcode !== null) {
      message.Hashcode = object.Hashcode;
    } else {
      message.Hashcode = "";
    }
    if (object.Timelock !== undefined && object.Timelock !== null) {
      message.Timelock = object.Timelock;
    } else {
      message.Timelock = "";
    }
    if (object.Multisig !== undefined && object.Multisig !== null) {
      message.Multisig = object.Multisig;
    } else {
      message.Multisig = "";
    }
    return message;
  },
};

const baseMsgFundResponse: object = { Index: "" };

export const MsgFundResponse = {
  encode(message: MsgFundResponse, writer: Writer = Writer.create()): Writer {
    if (message.Index !== "") {
      writer.uint32(10).string(message.Index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFundResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFundResponse } as MsgFundResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFundResponse {
    const message = { ...baseMsgFundResponse } as MsgFundResponse;
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = String(object.Index);
    } else {
      message.Index = "";
    }
    return message;
  },

  toJSON(message: MsgFundResponse): unknown {
    const obj: any = {};
    message.Index !== undefined && (obj.Index = message.Index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgFundResponse>): MsgFundResponse {
    const message = { ...baseMsgFundResponse } as MsgFundResponse;
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = object.Index;
    } else {
      message.Index = "";
    }
    return message;
  },
};

const baseMsgAcceptfund: object = {
  Creator: "",
  From: "",
  ChannelID: "",
  Hashcode: "",
  Timelock: "",
  Multisig: "",
};

export const MsgAcceptfund = {
  encode(message: MsgAcceptfund, writer: Writer = Writer.create()): Writer {
    if (message.Creator !== "") {
      writer.uint32(10).string(message.Creator);
    }
    if (message.From !== "") {
      writer.uint32(18).string(message.From);
    }
    if (message.ChannelID !== "") {
      writer.uint32(26).string(message.ChannelID);
    }
    if (message.CoinToAcceptSide !== undefined) {
      Coin.encode(message.CoinToAcceptSide, writer.uint32(34).fork()).ldelim();
    }
    if (message.Hashcode !== "") {
      writer.uint32(42).string(message.Hashcode);
    }
    if (message.Timelock !== "") {
      writer.uint32(50).string(message.Timelock);
    }
    if (message.Multisig !== "") {
      writer.uint32(58).string(message.Multisig);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAcceptfund {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAcceptfund } as MsgAcceptfund;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Creator = reader.string();
          break;
        case 2:
          message.From = reader.string();
          break;
        case 3:
          message.ChannelID = reader.string();
          break;
        case 4:
          message.CoinToAcceptSide = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.Hashcode = reader.string();
          break;
        case 6:
          message.Timelock = reader.string();
          break;
        case 7:
          message.Multisig = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAcceptfund {
    const message = { ...baseMsgAcceptfund } as MsgAcceptfund;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = String(object.Creator);
    } else {
      message.Creator = "";
    }
    if (object.From !== undefined && object.From !== null) {
      message.From = String(object.From);
    } else {
      message.From = "";
    }
    if (object.ChannelID !== undefined && object.ChannelID !== null) {
      message.ChannelID = String(object.ChannelID);
    } else {
      message.ChannelID = "";
    }
    if (
      object.CoinToAcceptSide !== undefined &&
      object.CoinToAcceptSide !== null
    ) {
      message.CoinToAcceptSide = Coin.fromJSON(object.CoinToAcceptSide);
    } else {
      message.CoinToAcceptSide = undefined;
    }
    if (object.Hashcode !== undefined && object.Hashcode !== null) {
      message.Hashcode = String(object.Hashcode);
    } else {
      message.Hashcode = "";
    }
    if (object.Timelock !== undefined && object.Timelock !== null) {
      message.Timelock = String(object.Timelock);
    } else {
      message.Timelock = "";
    }
    if (object.Multisig !== undefined && object.Multisig !== null) {
      message.Multisig = String(object.Multisig);
    } else {
      message.Multisig = "";
    }
    return message;
  },

  toJSON(message: MsgAcceptfund): unknown {
    const obj: any = {};
    message.Creator !== undefined && (obj.Creator = message.Creator);
    message.From !== undefined && (obj.From = message.From);
    message.ChannelID !== undefined && (obj.ChannelID = message.ChannelID);
    message.CoinToAcceptSide !== undefined &&
      (obj.CoinToAcceptSide = message.CoinToAcceptSide
        ? Coin.toJSON(message.CoinToAcceptSide)
        : undefined);
    message.Hashcode !== undefined && (obj.Hashcode = message.Hashcode);
    message.Timelock !== undefined && (obj.Timelock = message.Timelock);
    message.Multisig !== undefined && (obj.Multisig = message.Multisig);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAcceptfund>): MsgAcceptfund {
    const message = { ...baseMsgAcceptfund } as MsgAcceptfund;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = object.Creator;
    } else {
      message.Creator = "";
    }
    if (object.From !== undefined && object.From !== null) {
      message.From = object.From;
    } else {
      message.From = "";
    }
    if (object.ChannelID !== undefined && object.ChannelID !== null) {
      message.ChannelID = object.ChannelID;
    } else {
      message.ChannelID = "";
    }
    if (
      object.CoinToAcceptSide !== undefined &&
      object.CoinToAcceptSide !== null
    ) {
      message.CoinToAcceptSide = Coin.fromPartial(object.CoinToAcceptSide);
    } else {
      message.CoinToAcceptSide = undefined;
    }
    if (object.Hashcode !== undefined && object.Hashcode !== null) {
      message.Hashcode = object.Hashcode;
    } else {
      message.Hashcode = "";
    }
    if (object.Timelock !== undefined && object.Timelock !== null) {
      message.Timelock = object.Timelock;
    } else {
      message.Timelock = "";
    }
    if (object.Multisig !== undefined && object.Multisig !== null) {
      message.Multisig = object.Multisig;
    } else {
      message.Multisig = "";
    }
    return message;
  },
};

const baseMsgAcceptfundResponse: object = { Index: "" };

export const MsgAcceptfundResponse = {
  encode(
    message: MsgAcceptfundResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Index !== "") {
      writer.uint32(10).string(message.Index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAcceptfundResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAcceptfundResponse } as MsgAcceptfundResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAcceptfundResponse {
    const message = { ...baseMsgAcceptfundResponse } as MsgAcceptfundResponse;
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = String(object.Index);
    } else {
      message.Index = "";
    }
    return message;
  },

  toJSON(message: MsgAcceptfundResponse): unknown {
    const obj: any = {};
    message.Index !== undefined && (obj.Index = message.Index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAcceptfundResponse>
  ): MsgAcceptfundResponse {
    const message = { ...baseMsgAcceptfundResponse } as MsgAcceptfundResponse;
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = object.Index;
    } else {
      message.Index = "";
    }
    return message;
  },
};

const baseMsgSendercommit: object = {
  Creator: "",
  From: "",
  ChannelID: "",
  HashcodeHtlc: "",
  TimelockHtlc: "",
  HashcodeDest: "",
  TimelockReceiver: "",
  TimelockSender: "",
  Multisig: "",
};

export const MsgSendercommit = {
  encode(message: MsgSendercommit, writer: Writer = Writer.create()): Writer {
    if (message.Creator !== "") {
      writer.uint32(10).string(message.Creator);
    }
    if (message.From !== "") {
      writer.uint32(18).string(message.From);
    }
    if (message.ChannelID !== "") {
      writer.uint32(26).string(message.ChannelID);
    }
    if (message.CoinToSender !== undefined) {
      Coin.encode(message.CoinToSender, writer.uint32(34).fork()).ldelim();
    }
    if (message.CoinToHtlc !== undefined) {
      Coin.encode(message.CoinToHtlc, writer.uint32(42).fork()).ldelim();
    }
    if (message.HashcodeHtlc !== "") {
      writer.uint32(50).string(message.HashcodeHtlc);
    }
    if (message.TimelockHtlc !== "") {
      writer.uint32(58).string(message.TimelockHtlc);
    }
    if (message.CoinTransfer !== undefined) {
      Coin.encode(message.CoinTransfer, writer.uint32(66).fork()).ldelim();
    }
    if (message.HashcodeDest !== "") {
      writer.uint32(74).string(message.HashcodeDest);
    }
    if (message.TimelockReceiver !== "") {
      writer.uint32(82).string(message.TimelockReceiver);
    }
    if (message.TimelockSender !== "") {
      writer.uint32(90).string(message.TimelockSender);
    }
    if (message.Multisig !== "") {
      writer.uint32(98).string(message.Multisig);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendercommit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendercommit } as MsgSendercommit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Creator = reader.string();
          break;
        case 2:
          message.From = reader.string();
          break;
        case 3:
          message.ChannelID = reader.string();
          break;
        case 4:
          message.CoinToSender = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.CoinToHtlc = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.HashcodeHtlc = reader.string();
          break;
        case 7:
          message.TimelockHtlc = reader.string();
          break;
        case 8:
          message.CoinTransfer = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.HashcodeDest = reader.string();
          break;
        case 10:
          message.TimelockReceiver = reader.string();
          break;
        case 11:
          message.TimelockSender = reader.string();
          break;
        case 12:
          message.Multisig = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendercommit {
    const message = { ...baseMsgSendercommit } as MsgSendercommit;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = String(object.Creator);
    } else {
      message.Creator = "";
    }
    if (object.From !== undefined && object.From !== null) {
      message.From = String(object.From);
    } else {
      message.From = "";
    }
    if (object.ChannelID !== undefined && object.ChannelID !== null) {
      message.ChannelID = String(object.ChannelID);
    } else {
      message.ChannelID = "";
    }
    if (object.CoinToSender !== undefined && object.CoinToSender !== null) {
      message.CoinToSender = Coin.fromJSON(object.CoinToSender);
    } else {
      message.CoinToSender = undefined;
    }
    if (object.CoinToHtlc !== undefined && object.CoinToHtlc !== null) {
      message.CoinToHtlc = Coin.fromJSON(object.CoinToHtlc);
    } else {
      message.CoinToHtlc = undefined;
    }
    if (object.HashcodeHtlc !== undefined && object.HashcodeHtlc !== null) {
      message.HashcodeHtlc = String(object.HashcodeHtlc);
    } else {
      message.HashcodeHtlc = "";
    }
    if (object.TimelockHtlc !== undefined && object.TimelockHtlc !== null) {
      message.TimelockHtlc = String(object.TimelockHtlc);
    } else {
      message.TimelockHtlc = "";
    }
    if (object.CoinTransfer !== undefined && object.CoinTransfer !== null) {
      message.CoinTransfer = Coin.fromJSON(object.CoinTransfer);
    } else {
      message.CoinTransfer = undefined;
    }
    if (object.HashcodeDest !== undefined && object.HashcodeDest !== null) {
      message.HashcodeDest = String(object.HashcodeDest);
    } else {
      message.HashcodeDest = "";
    }
    if (
      object.TimelockReceiver !== undefined &&
      object.TimelockReceiver !== null
    ) {
      message.TimelockReceiver = String(object.TimelockReceiver);
    } else {
      message.TimelockReceiver = "";
    }
    if (object.TimelockSender !== undefined && object.TimelockSender !== null) {
      message.TimelockSender = String(object.TimelockSender);
    } else {
      message.TimelockSender = "";
    }
    if (object.Multisig !== undefined && object.Multisig !== null) {
      message.Multisig = String(object.Multisig);
    } else {
      message.Multisig = "";
    }
    return message;
  },

  toJSON(message: MsgSendercommit): unknown {
    const obj: any = {};
    message.Creator !== undefined && (obj.Creator = message.Creator);
    message.From !== undefined && (obj.From = message.From);
    message.ChannelID !== undefined && (obj.ChannelID = message.ChannelID);
    message.CoinToSender !== undefined &&
      (obj.CoinToSender = message.CoinToSender
        ? Coin.toJSON(message.CoinToSender)
        : undefined);
    message.CoinToHtlc !== undefined &&
      (obj.CoinToHtlc = message.CoinToHtlc
        ? Coin.toJSON(message.CoinToHtlc)
        : undefined);
    message.HashcodeHtlc !== undefined &&
      (obj.HashcodeHtlc = message.HashcodeHtlc);
    message.TimelockHtlc !== undefined &&
      (obj.TimelockHtlc = message.TimelockHtlc);
    message.CoinTransfer !== undefined &&
      (obj.CoinTransfer = message.CoinTransfer
        ? Coin.toJSON(message.CoinTransfer)
        : undefined);
    message.HashcodeDest !== undefined &&
      (obj.HashcodeDest = message.HashcodeDest);
    message.TimelockReceiver !== undefined &&
      (obj.TimelockReceiver = message.TimelockReceiver);
    message.TimelockSender !== undefined &&
      (obj.TimelockSender = message.TimelockSender);
    message.Multisig !== undefined && (obj.Multisig = message.Multisig);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendercommit>): MsgSendercommit {
    const message = { ...baseMsgSendercommit } as MsgSendercommit;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = object.Creator;
    } else {
      message.Creator = "";
    }
    if (object.From !== undefined && object.From !== null) {
      message.From = object.From;
    } else {
      message.From = "";
    }
    if (object.ChannelID !== undefined && object.ChannelID !== null) {
      message.ChannelID = object.ChannelID;
    } else {
      message.ChannelID = "";
    }
    if (object.CoinToSender !== undefined && object.CoinToSender !== null) {
      message.CoinToSender = Coin.fromPartial(object.CoinToSender);
    } else {
      message.CoinToSender = undefined;
    }
    if (object.CoinToHtlc !== undefined && object.CoinToHtlc !== null) {
      message.CoinToHtlc = Coin.fromPartial(object.CoinToHtlc);
    } else {
      message.CoinToHtlc = undefined;
    }
    if (object.HashcodeHtlc !== undefined && object.HashcodeHtlc !== null) {
      message.HashcodeHtlc = object.HashcodeHtlc;
    } else {
      message.HashcodeHtlc = "";
    }
    if (object.TimelockHtlc !== undefined && object.TimelockHtlc !== null) {
      message.TimelockHtlc = object.TimelockHtlc;
    } else {
      message.TimelockHtlc = "";
    }
    if (object.CoinTransfer !== undefined && object.CoinTransfer !== null) {
      message.CoinTransfer = Coin.fromPartial(object.CoinTransfer);
    } else {
      message.CoinTransfer = undefined;
    }
    if (object.HashcodeDest !== undefined && object.HashcodeDest !== null) {
      message.HashcodeDest = object.HashcodeDest;
    } else {
      message.HashcodeDest = "";
    }
    if (
      object.TimelockReceiver !== undefined &&
      object.TimelockReceiver !== null
    ) {
      message.TimelockReceiver = object.TimelockReceiver;
    } else {
      message.TimelockReceiver = "";
    }
    if (object.TimelockSender !== undefined && object.TimelockSender !== null) {
      message.TimelockSender = object.TimelockSender;
    } else {
      message.TimelockSender = "";
    }
    if (object.Multisig !== undefined && object.Multisig !== null) {
      message.Multisig = object.Multisig;
    } else {
      message.Multisig = "";
    }
    return message;
  },
};

const baseMsgSendercommitResponse: object = {
  IndexHtlc: "",
  IndexTransfer: "",
};

export const MsgSendercommitResponse = {
  encode(
    message: MsgSendercommitResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.IndexHtlc !== "") {
      writer.uint32(10).string(message.IndexHtlc);
    }
    if (message.IndexTransfer !== "") {
      writer.uint32(18).string(message.IndexTransfer);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendercommitResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendercommitResponse,
    } as MsgSendercommitResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.IndexHtlc = reader.string();
          break;
        case 2:
          message.IndexTransfer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendercommitResponse {
    const message = {
      ...baseMsgSendercommitResponse,
    } as MsgSendercommitResponse;
    if (object.IndexHtlc !== undefined && object.IndexHtlc !== null) {
      message.IndexHtlc = String(object.IndexHtlc);
    } else {
      message.IndexHtlc = "";
    }
    if (object.IndexTransfer !== undefined && object.IndexTransfer !== null) {
      message.IndexTransfer = String(object.IndexTransfer);
    } else {
      message.IndexTransfer = "";
    }
    return message;
  },

  toJSON(message: MsgSendercommitResponse): unknown {
    const obj: any = {};
    message.IndexHtlc !== undefined && (obj.IndexHtlc = message.IndexHtlc);
    message.IndexTransfer !== undefined &&
      (obj.IndexTransfer = message.IndexTransfer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendercommitResponse>
  ): MsgSendercommitResponse {
    const message = {
      ...baseMsgSendercommitResponse,
    } as MsgSendercommitResponse;
    if (object.IndexHtlc !== undefined && object.IndexHtlc !== null) {
      message.IndexHtlc = object.IndexHtlc;
    } else {
      message.IndexHtlc = "";
    }
    if (object.IndexTransfer !== undefined && object.IndexTransfer !== null) {
      message.IndexTransfer = object.IndexTransfer;
    } else {
      message.IndexTransfer = "";
    }
    return message;
  },
};

const baseMsgSenderwithdrawtimelock: object = {
  Creator: "",
  TransferIndex: "",
  To: "",
};

export const MsgSenderwithdrawtimelock = {
  encode(
    message: MsgSenderwithdrawtimelock,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Creator !== "") {
      writer.uint32(10).string(message.Creator);
    }
    if (message.TransferIndex !== "") {
      writer.uint32(18).string(message.TransferIndex);
    }
    if (message.To !== "") {
      writer.uint32(26).string(message.To);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSenderwithdrawtimelock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSenderwithdrawtimelock,
    } as MsgSenderwithdrawtimelock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Creator = reader.string();
          break;
        case 2:
          message.TransferIndex = reader.string();
          break;
        case 3:
          message.To = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSenderwithdrawtimelock {
    const message = {
      ...baseMsgSenderwithdrawtimelock,
    } as MsgSenderwithdrawtimelock;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = String(object.Creator);
    } else {
      message.Creator = "";
    }
    if (object.TransferIndex !== undefined && object.TransferIndex !== null) {
      message.TransferIndex = String(object.TransferIndex);
    } else {
      message.TransferIndex = "";
    }
    if (object.To !== undefined && object.To !== null) {
      message.To = String(object.To);
    } else {
      message.To = "";
    }
    return message;
  },

  toJSON(message: MsgSenderwithdrawtimelock): unknown {
    const obj: any = {};
    message.Creator !== undefined && (obj.Creator = message.Creator);
    message.TransferIndex !== undefined &&
      (obj.TransferIndex = message.TransferIndex);
    message.To !== undefined && (obj.To = message.To);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSenderwithdrawtimelock>
  ): MsgSenderwithdrawtimelock {
    const message = {
      ...baseMsgSenderwithdrawtimelock,
    } as MsgSenderwithdrawtimelock;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = object.Creator;
    } else {
      message.Creator = "";
    }
    if (object.TransferIndex !== undefined && object.TransferIndex !== null) {
      message.TransferIndex = object.TransferIndex;
    } else {
      message.TransferIndex = "";
    }
    if (object.To !== undefined && object.To !== null) {
      message.To = object.To;
    } else {
      message.To = "";
    }
    return message;
  },
};

const baseMsgSenderwithdrawtimelockResponse: object = {};

export const MsgSenderwithdrawtimelockResponse = {
  encode(
    _: MsgSenderwithdrawtimelockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSenderwithdrawtimelockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSenderwithdrawtimelockResponse,
    } as MsgSenderwithdrawtimelockResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSenderwithdrawtimelockResponse {
    const message = {
      ...baseMsgSenderwithdrawtimelockResponse,
    } as MsgSenderwithdrawtimelockResponse;
    return message;
  },

  toJSON(_: MsgSenderwithdrawtimelockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSenderwithdrawtimelockResponse>
  ): MsgSenderwithdrawtimelockResponse {
    const message = {
      ...baseMsgSenderwithdrawtimelockResponse,
    } as MsgSenderwithdrawtimelockResponse;
    return message;
  },
};

const baseMsgSenderwithdrawhashlock: object = {
  Creator: "",
  TransferIndex: "",
  To: "",
  Secret: "",
};

export const MsgSenderwithdrawhashlock = {
  encode(
    message: MsgSenderwithdrawhashlock,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Creator !== "") {
      writer.uint32(10).string(message.Creator);
    }
    if (message.TransferIndex !== "") {
      writer.uint32(18).string(message.TransferIndex);
    }
    if (message.To !== "") {
      writer.uint32(26).string(message.To);
    }
    if (message.Secret !== "") {
      writer.uint32(34).string(message.Secret);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSenderwithdrawhashlock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSenderwithdrawhashlock,
    } as MsgSenderwithdrawhashlock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Creator = reader.string();
          break;
        case 2:
          message.TransferIndex = reader.string();
          break;
        case 3:
          message.To = reader.string();
          break;
        case 4:
          message.Secret = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSenderwithdrawhashlock {
    const message = {
      ...baseMsgSenderwithdrawhashlock,
    } as MsgSenderwithdrawhashlock;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = String(object.Creator);
    } else {
      message.Creator = "";
    }
    if (object.TransferIndex !== undefined && object.TransferIndex !== null) {
      message.TransferIndex = String(object.TransferIndex);
    } else {
      message.TransferIndex = "";
    }
    if (object.To !== undefined && object.To !== null) {
      message.To = String(object.To);
    } else {
      message.To = "";
    }
    if (object.Secret !== undefined && object.Secret !== null) {
      message.Secret = String(object.Secret);
    } else {
      message.Secret = "";
    }
    return message;
  },

  toJSON(message: MsgSenderwithdrawhashlock): unknown {
    const obj: any = {};
    message.Creator !== undefined && (obj.Creator = message.Creator);
    message.TransferIndex !== undefined &&
      (obj.TransferIndex = message.TransferIndex);
    message.To !== undefined && (obj.To = message.To);
    message.Secret !== undefined && (obj.Secret = message.Secret);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSenderwithdrawhashlock>
  ): MsgSenderwithdrawhashlock {
    const message = {
      ...baseMsgSenderwithdrawhashlock,
    } as MsgSenderwithdrawhashlock;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = object.Creator;
    } else {
      message.Creator = "";
    }
    if (object.TransferIndex !== undefined && object.TransferIndex !== null) {
      message.TransferIndex = object.TransferIndex;
    } else {
      message.TransferIndex = "";
    }
    if (object.To !== undefined && object.To !== null) {
      message.To = object.To;
    } else {
      message.To = "";
    }
    if (object.Secret !== undefined && object.Secret !== null) {
      message.Secret = object.Secret;
    } else {
      message.Secret = "";
    }
    return message;
  },
};

const baseMsgSenderwithdrawhashlockResponse: object = {};

export const MsgSenderwithdrawhashlockResponse = {
  encode(
    _: MsgSenderwithdrawhashlockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSenderwithdrawhashlockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSenderwithdrawhashlockResponse,
    } as MsgSenderwithdrawhashlockResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSenderwithdrawhashlockResponse {
    const message = {
      ...baseMsgSenderwithdrawhashlockResponse,
    } as MsgSenderwithdrawhashlockResponse;
    return message;
  },

  toJSON(_: MsgSenderwithdrawhashlockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSenderwithdrawhashlockResponse>
  ): MsgSenderwithdrawhashlockResponse {
    const message = {
      ...baseMsgSenderwithdrawhashlockResponse,
    } as MsgSenderwithdrawhashlockResponse;
    return message;
  },
};

const baseMsgReceiverwithdraw: object = {
  Creator: "",
  TransferIndex: "",
  To: "",
  Secret: "",
};

export const MsgReceiverwithdraw = {
  encode(
    message: MsgReceiverwithdraw,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Creator !== "") {
      writer.uint32(10).string(message.Creator);
    }
    if (message.TransferIndex !== "") {
      writer.uint32(18).string(message.TransferIndex);
    }
    if (message.To !== "") {
      writer.uint32(26).string(message.To);
    }
    if (message.Secret !== "") {
      writer.uint32(34).string(message.Secret);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgReceiverwithdraw {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgReceiverwithdraw } as MsgReceiverwithdraw;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Creator = reader.string();
          break;
        case 2:
          message.TransferIndex = reader.string();
          break;
        case 3:
          message.To = reader.string();
          break;
        case 4:
          message.Secret = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReceiverwithdraw {
    const message = { ...baseMsgReceiverwithdraw } as MsgReceiverwithdraw;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = String(object.Creator);
    } else {
      message.Creator = "";
    }
    if (object.TransferIndex !== undefined && object.TransferIndex !== null) {
      message.TransferIndex = String(object.TransferIndex);
    } else {
      message.TransferIndex = "";
    }
    if (object.To !== undefined && object.To !== null) {
      message.To = String(object.To);
    } else {
      message.To = "";
    }
    if (object.Secret !== undefined && object.Secret !== null) {
      message.Secret = String(object.Secret);
    } else {
      message.Secret = "";
    }
    return message;
  },

  toJSON(message: MsgReceiverwithdraw): unknown {
    const obj: any = {};
    message.Creator !== undefined && (obj.Creator = message.Creator);
    message.TransferIndex !== undefined &&
      (obj.TransferIndex = message.TransferIndex);
    message.To !== undefined && (obj.To = message.To);
    message.Secret !== undefined && (obj.Secret = message.Secret);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgReceiverwithdraw>): MsgReceiverwithdraw {
    const message = { ...baseMsgReceiverwithdraw } as MsgReceiverwithdraw;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = object.Creator;
    } else {
      message.Creator = "";
    }
    if (object.TransferIndex !== undefined && object.TransferIndex !== null) {
      message.TransferIndex = object.TransferIndex;
    } else {
      message.TransferIndex = "";
    }
    if (object.To !== undefined && object.To !== null) {
      message.To = object.To;
    } else {
      message.To = "";
    }
    if (object.Secret !== undefined && object.Secret !== null) {
      message.Secret = object.Secret;
    } else {
      message.Secret = "";
    }
    return message;
  },
};

const baseMsgReceiverwithdrawResponse: object = {};

export const MsgReceiverwithdrawResponse = {
  encode(
    _: MsgReceiverwithdrawResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgReceiverwithdrawResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgReceiverwithdrawResponse,
    } as MsgReceiverwithdrawResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgReceiverwithdrawResponse {
    const message = {
      ...baseMsgReceiverwithdrawResponse,
    } as MsgReceiverwithdrawResponse;
    return message;
  },

  toJSON(_: MsgReceiverwithdrawResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgReceiverwithdrawResponse>
  ): MsgReceiverwithdrawResponse {
    const message = {
      ...baseMsgReceiverwithdrawResponse,
    } as MsgReceiverwithdrawResponse;
    return message;
  },
};

const baseMsgReceivercommit: object = {
  Creator: "",
  From: "",
  ChannelID: "",
  HashcodeHtlc: "",
  TimelockHtlc: "",
  HashcodeDest: "",
  TimelockSender: "",
  Multisig: "",
};

export const MsgReceivercommit = {
  encode(message: MsgReceivercommit, writer: Writer = Writer.create()): Writer {
    if (message.Creator !== "") {
      writer.uint32(10).string(message.Creator);
    }
    if (message.From !== "") {
      writer.uint32(18).string(message.From);
    }
    if (message.ChannelID !== "") {
      writer.uint32(26).string(message.ChannelID);
    }
    if (message.CoinToReceiver !== undefined) {
      Coin.encode(message.CoinToReceiver, writer.uint32(34).fork()).ldelim();
    }
    if (message.CoinToHtlc !== undefined) {
      Coin.encode(message.CoinToHtlc, writer.uint32(42).fork()).ldelim();
    }
    if (message.HashcodeHtlc !== "") {
      writer.uint32(50).string(message.HashcodeHtlc);
    }
    if (message.TimelockHtlc !== "") {
      writer.uint32(58).string(message.TimelockHtlc);
    }
    if (message.CoinTransfer !== undefined) {
      Coin.encode(message.CoinTransfer, writer.uint32(66).fork()).ldelim();
    }
    if (message.HashcodeDest !== "") {
      writer.uint32(74).string(message.HashcodeDest);
    }
    if (message.TimelockSender !== "") {
      writer.uint32(82).string(message.TimelockSender);
    }
    if (message.Multisig !== "") {
      writer.uint32(90).string(message.Multisig);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgReceivercommit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgReceivercommit } as MsgReceivercommit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Creator = reader.string();
          break;
        case 2:
          message.From = reader.string();
          break;
        case 3:
          message.ChannelID = reader.string();
          break;
        case 4:
          message.CoinToReceiver = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.CoinToHtlc = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.HashcodeHtlc = reader.string();
          break;
        case 7:
          message.TimelockHtlc = reader.string();
          break;
        case 8:
          message.CoinTransfer = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.HashcodeDest = reader.string();
          break;
        case 10:
          message.TimelockSender = reader.string();
          break;
        case 11:
          message.Multisig = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReceivercommit {
    const message = { ...baseMsgReceivercommit } as MsgReceivercommit;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = String(object.Creator);
    } else {
      message.Creator = "";
    }
    if (object.From !== undefined && object.From !== null) {
      message.From = String(object.From);
    } else {
      message.From = "";
    }
    if (object.ChannelID !== undefined && object.ChannelID !== null) {
      message.ChannelID = String(object.ChannelID);
    } else {
      message.ChannelID = "";
    }
    if (object.CoinToReceiver !== undefined && object.CoinToReceiver !== null) {
      message.CoinToReceiver = Coin.fromJSON(object.CoinToReceiver);
    } else {
      message.CoinToReceiver = undefined;
    }
    if (object.CoinToHtlc !== undefined && object.CoinToHtlc !== null) {
      message.CoinToHtlc = Coin.fromJSON(object.CoinToHtlc);
    } else {
      message.CoinToHtlc = undefined;
    }
    if (object.HashcodeHtlc !== undefined && object.HashcodeHtlc !== null) {
      message.HashcodeHtlc = String(object.HashcodeHtlc);
    } else {
      message.HashcodeHtlc = "";
    }
    if (object.TimelockHtlc !== undefined && object.TimelockHtlc !== null) {
      message.TimelockHtlc = String(object.TimelockHtlc);
    } else {
      message.TimelockHtlc = "";
    }
    if (object.CoinTransfer !== undefined && object.CoinTransfer !== null) {
      message.CoinTransfer = Coin.fromJSON(object.CoinTransfer);
    } else {
      message.CoinTransfer = undefined;
    }
    if (object.HashcodeDest !== undefined && object.HashcodeDest !== null) {
      message.HashcodeDest = String(object.HashcodeDest);
    } else {
      message.HashcodeDest = "";
    }
    if (object.TimelockSender !== undefined && object.TimelockSender !== null) {
      message.TimelockSender = String(object.TimelockSender);
    } else {
      message.TimelockSender = "";
    }
    if (object.Multisig !== undefined && object.Multisig !== null) {
      message.Multisig = String(object.Multisig);
    } else {
      message.Multisig = "";
    }
    return message;
  },

  toJSON(message: MsgReceivercommit): unknown {
    const obj: any = {};
    message.Creator !== undefined && (obj.Creator = message.Creator);
    message.From !== undefined && (obj.From = message.From);
    message.ChannelID !== undefined && (obj.ChannelID = message.ChannelID);
    message.CoinToReceiver !== undefined &&
      (obj.CoinToReceiver = message.CoinToReceiver
        ? Coin.toJSON(message.CoinToReceiver)
        : undefined);
    message.CoinToHtlc !== undefined &&
      (obj.CoinToHtlc = message.CoinToHtlc
        ? Coin.toJSON(message.CoinToHtlc)
        : undefined);
    message.HashcodeHtlc !== undefined &&
      (obj.HashcodeHtlc = message.HashcodeHtlc);
    message.TimelockHtlc !== undefined &&
      (obj.TimelockHtlc = message.TimelockHtlc);
    message.CoinTransfer !== undefined &&
      (obj.CoinTransfer = message.CoinTransfer
        ? Coin.toJSON(message.CoinTransfer)
        : undefined);
    message.HashcodeDest !== undefined &&
      (obj.HashcodeDest = message.HashcodeDest);
    message.TimelockSender !== undefined &&
      (obj.TimelockSender = message.TimelockSender);
    message.Multisig !== undefined && (obj.Multisig = message.Multisig);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgReceivercommit>): MsgReceivercommit {
    const message = { ...baseMsgReceivercommit } as MsgReceivercommit;
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = object.Creator;
    } else {
      message.Creator = "";
    }
    if (object.From !== undefined && object.From !== null) {
      message.From = object.From;
    } else {
      message.From = "";
    }
    if (object.ChannelID !== undefined && object.ChannelID !== null) {
      message.ChannelID = object.ChannelID;
    } else {
      message.ChannelID = "";
    }
    if (object.CoinToReceiver !== undefined && object.CoinToReceiver !== null) {
      message.CoinToReceiver = Coin.fromPartial(object.CoinToReceiver);
    } else {
      message.CoinToReceiver = undefined;
    }
    if (object.CoinToHtlc !== undefined && object.CoinToHtlc !== null) {
      message.CoinToHtlc = Coin.fromPartial(object.CoinToHtlc);
    } else {
      message.CoinToHtlc = undefined;
    }
    if (object.HashcodeHtlc !== undefined && object.HashcodeHtlc !== null) {
      message.HashcodeHtlc = object.HashcodeHtlc;
    } else {
      message.HashcodeHtlc = "";
    }
    if (object.TimelockHtlc !== undefined && object.TimelockHtlc !== null) {
      message.TimelockHtlc = object.TimelockHtlc;
    } else {
      message.TimelockHtlc = "";
    }
    if (object.CoinTransfer !== undefined && object.CoinTransfer !== null) {
      message.CoinTransfer = Coin.fromPartial(object.CoinTransfer);
    } else {
      message.CoinTransfer = undefined;
    }
    if (object.HashcodeDest !== undefined && object.HashcodeDest !== null) {
      message.HashcodeDest = object.HashcodeDest;
    } else {
      message.HashcodeDest = "";
    }
    if (object.TimelockSender !== undefined && object.TimelockSender !== null) {
      message.TimelockSender = object.TimelockSender;
    } else {
      message.TimelockSender = "";
    }
    if (object.Multisig !== undefined && object.Multisig !== null) {
      message.Multisig = object.Multisig;
    } else {
      message.Multisig = "";
    }
    return message;
  },
};

const baseMsgReceivercommitResponse: object = {
  IndexHtlc: "",
  IndexTransfer: "",
};

export const MsgReceivercommitResponse = {
  encode(
    message: MsgReceivercommitResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.IndexHtlc !== "") {
      writer.uint32(10).string(message.IndexHtlc);
    }
    if (message.IndexTransfer !== "") {
      writer.uint32(18).string(message.IndexTransfer);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgReceivercommitResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgReceivercommitResponse,
    } as MsgReceivercommitResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.IndexHtlc = reader.string();
          break;
        case 2:
          message.IndexTransfer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReceivercommitResponse {
    const message = {
      ...baseMsgReceivercommitResponse,
    } as MsgReceivercommitResponse;
    if (object.IndexHtlc !== undefined && object.IndexHtlc !== null) {
      message.IndexHtlc = String(object.IndexHtlc);
    } else {
      message.IndexHtlc = "";
    }
    if (object.IndexTransfer !== undefined && object.IndexTransfer !== null) {
      message.IndexTransfer = String(object.IndexTransfer);
    } else {
      message.IndexTransfer = "";
    }
    return message;
  },

  toJSON(message: MsgReceivercommitResponse): unknown {
    const obj: any = {};
    message.IndexHtlc !== undefined && (obj.IndexHtlc = message.IndexHtlc);
    message.IndexTransfer !== undefined &&
      (obj.IndexTransfer = message.IndexTransfer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgReceivercommitResponse>
  ): MsgReceivercommitResponse {
    const message = {
      ...baseMsgReceivercommitResponse,
    } as MsgReceivercommitResponse;
    if (object.IndexHtlc !== undefined && object.IndexHtlc !== null) {
      message.IndexHtlc = object.IndexHtlc;
    } else {
      message.IndexHtlc = "";
    }
    if (object.IndexTransfer !== undefined && object.IndexTransfer !== null) {
      message.IndexTransfer = object.IndexTransfer;
    } else {
      message.IndexTransfer = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Commitment(request: MsgCommitment): Promise<MsgCommitmentResponse>;
  WithdrawTimelock(
    request: MsgWithdrawTimelock
  ): Promise<MsgWithdrawTimelockResponse>;
  WithdrawHashlock(
    request: MsgWithdrawHashlock
  ): Promise<MsgWithdrawHashlockResponse>;
  CloseChannel(request: MsgCloseChannel): Promise<MsgCloseChannelResponse>;
  OpenChannel(request: MsgOpenChannel): Promise<MsgOpenChannelResponse>;
  Fund(request: MsgFund): Promise<MsgFundResponse>;
  Acceptfund(request: MsgAcceptfund): Promise<MsgAcceptfundResponse>;
  Sendercommit(request: MsgSendercommit): Promise<MsgSendercommitResponse>;
  Senderwithdrawtimelock(
    request: MsgSenderwithdrawtimelock
  ): Promise<MsgSenderwithdrawtimelockResponse>;
  Senderwithdrawhashlock(
    request: MsgSenderwithdrawhashlock
  ): Promise<MsgSenderwithdrawhashlockResponse>;
  Receiverwithdraw(
    request: MsgReceiverwithdraw
  ): Promise<MsgReceiverwithdrawResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Receivercommit(
    request: MsgReceivercommit
  ): Promise<MsgReceivercommitResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Commitment(request: MsgCommitment): Promise<MsgCommitmentResponse> {
    const data = MsgCommitment.encode(request).finish();
    const promise = this.rpc.request("channel.channel.Msg", "Commitment", data);
    return promise.then((data) =>
      MsgCommitmentResponse.decode(new Reader(data))
    );
  }

  WithdrawTimelock(
    request: MsgWithdrawTimelock
  ): Promise<MsgWithdrawTimelockResponse> {
    const data = MsgWithdrawTimelock.encode(request).finish();
    const promise = this.rpc.request(
      "channel.channel.Msg",
      "WithdrawTimelock",
      data
    );
    return promise.then((data) =>
      MsgWithdrawTimelockResponse.decode(new Reader(data))
    );
  }

  WithdrawHashlock(
    request: MsgWithdrawHashlock
  ): Promise<MsgWithdrawHashlockResponse> {
    const data = MsgWithdrawHashlock.encode(request).finish();
    const promise = this.rpc.request(
      "channel.channel.Msg",
      "WithdrawHashlock",
      data
    );
    return promise.then((data) =>
      MsgWithdrawHashlockResponse.decode(new Reader(data))
    );
  }

  CloseChannel(request: MsgCloseChannel): Promise<MsgCloseChannelResponse> {
    const data = MsgCloseChannel.encode(request).finish();
    const promise = this.rpc.request(
      "channel.channel.Msg",
      "CloseChannel",
      data
    );
    return promise.then((data) =>
      MsgCloseChannelResponse.decode(new Reader(data))
    );
  }

  OpenChannel(request: MsgOpenChannel): Promise<MsgOpenChannelResponse> {
    const data = MsgOpenChannel.encode(request).finish();
    const promise = this.rpc.request(
      "channel.channel.Msg",
      "OpenChannel",
      data
    );
    return promise.then((data) =>
      MsgOpenChannelResponse.decode(new Reader(data))
    );
  }

  Fund(request: MsgFund): Promise<MsgFundResponse> {
    const data = MsgFund.encode(request).finish();
    const promise = this.rpc.request("channel.channel.Msg", "Fund", data);
    return promise.then((data) => MsgFundResponse.decode(new Reader(data)));
  }

  Acceptfund(request: MsgAcceptfund): Promise<MsgAcceptfundResponse> {
    const data = MsgAcceptfund.encode(request).finish();
    const promise = this.rpc.request("channel.channel.Msg", "Acceptfund", data);
    return promise.then((data) =>
      MsgAcceptfundResponse.decode(new Reader(data))
    );
  }

  Sendercommit(request: MsgSendercommit): Promise<MsgSendercommitResponse> {
    const data = MsgSendercommit.encode(request).finish();
    const promise = this.rpc.request(
      "channel.channel.Msg",
      "Sendercommit",
      data
    );
    return promise.then((data) =>
      MsgSendercommitResponse.decode(new Reader(data))
    );
  }

  Senderwithdrawtimelock(
    request: MsgSenderwithdrawtimelock
  ): Promise<MsgSenderwithdrawtimelockResponse> {
    const data = MsgSenderwithdrawtimelock.encode(request).finish();
    const promise = this.rpc.request(
      "channel.channel.Msg",
      "Senderwithdrawtimelock",
      data
    );
    return promise.then((data) =>
      MsgSenderwithdrawtimelockResponse.decode(new Reader(data))
    );
  }

  Senderwithdrawhashlock(
    request: MsgSenderwithdrawhashlock
  ): Promise<MsgSenderwithdrawhashlockResponse> {
    const data = MsgSenderwithdrawhashlock.encode(request).finish();
    const promise = this.rpc.request(
      "channel.channel.Msg",
      "Senderwithdrawhashlock",
      data
    );
    return promise.then((data) =>
      MsgSenderwithdrawhashlockResponse.decode(new Reader(data))
    );
  }

  Receiverwithdraw(
    request: MsgReceiverwithdraw
  ): Promise<MsgReceiverwithdrawResponse> {
    const data = MsgReceiverwithdraw.encode(request).finish();
    const promise = this.rpc.request(
      "channel.channel.Msg",
      "Receiverwithdraw",
      data
    );
    return promise.then((data) =>
      MsgReceiverwithdrawResponse.decode(new Reader(data))
    );
  }

  Receivercommit(
    request: MsgReceivercommit
  ): Promise<MsgReceivercommitResponse> {
    const data = MsgReceivercommit.encode(request).finish();
    const promise = this.rpc.request(
      "channel.channel.Msg",
      "Receivercommit",
      data
    );
    return promise.then((data) =>
      MsgReceivercommitResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
