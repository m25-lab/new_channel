/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "channel.channel";

export interface MsgCommitment {
  creator: string;
  from: string;
  coinA: Coin | undefined;
  toATimelock: string;
  blockheight: number;
  toBHashlock: string;
  hashcode: string;
  coinlock: Coin | undefined;
}

export interface MsgCommitmentResponse {
  index: string;
}

export interface MsgWithdrawTimelock {
  creator: string;
  to: string;
  index: string;
}

export interface MsgWithdrawTimelockResponse {}

export interface MsgWithdrawHashlock {
  creator: string;
  to: string;
  index: string;
  secret: string;
}

export interface MsgWithdrawHashlockResponse {}

export interface MsgCloseChannel {
  creator: string;
  from: string;
  toA: string;
  coinA: Coin | undefined;
  toB: string;
  coinB: Coin | undefined;
  channelid: string;
}

export interface MsgCloseChannelResponse {}

export interface MsgOpenChannel {
  creator: string;
  partA: string;
  partB: string;
  coinA: Coin | undefined;
  coinB: Coin | undefined;
  multisigAddr: string;
  sequence: string;
}

export interface MsgOpenChannelResponse {
  index: string;
}

export interface MsgFund {
  creator: string;
  from: string;
  channelid: string;
  coin: Coin | undefined;
  balanceA: Coin | undefined;
  balanceB: Coin | undefined;
  hashcodeB: string;
  multisig: string;
}

export interface MsgFundResponse {
  index: string;
}

const baseMsgCommitment: object = {
  creator: "",
  from: "",
  toATimelock: "",
  blockheight: 0,
  toBHashlock: "",
  hashcode: "",
};

export const MsgCommitment = {
  encode(message: MsgCommitment, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.coinA !== undefined) {
      Coin.encode(message.coinA, writer.uint32(26).fork()).ldelim();
    }
    if (message.toATimelock !== "") {
      writer.uint32(34).string(message.toATimelock);
    }
    if (message.blockheight !== 0) {
      writer.uint32(40).uint64(message.blockheight);
    }
    if (message.toBHashlock !== "") {
      writer.uint32(50).string(message.toBHashlock);
    }
    if (message.hashcode !== "") {
      writer.uint32(58).string(message.hashcode);
    }
    if (message.coinlock !== undefined) {
      Coin.encode(message.coinlock, writer.uint32(66).fork()).ldelim();
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
          message.creator = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.coinA = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.toATimelock = reader.string();
          break;
        case 5:
          message.blockheight = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.toBHashlock = reader.string();
          break;
        case 7:
          message.hashcode = reader.string();
          break;
        case 8:
          message.coinlock = Coin.decode(reader, reader.uint32());
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.coinA !== undefined && object.coinA !== null) {
      message.coinA = Coin.fromJSON(object.coinA);
    } else {
      message.coinA = undefined;
    }
    if (object.toATimelock !== undefined && object.toATimelock !== null) {
      message.toATimelock = String(object.toATimelock);
    } else {
      message.toATimelock = "";
    }
    if (object.blockheight !== undefined && object.blockheight !== null) {
      message.blockheight = Number(object.blockheight);
    } else {
      message.blockheight = 0;
    }
    if (object.toBHashlock !== undefined && object.toBHashlock !== null) {
      message.toBHashlock = String(object.toBHashlock);
    } else {
      message.toBHashlock = "";
    }
    if (object.hashcode !== undefined && object.hashcode !== null) {
      message.hashcode = String(object.hashcode);
    } else {
      message.hashcode = "";
    }
    if (object.coinlock !== undefined && object.coinlock !== null) {
      message.coinlock = Coin.fromJSON(object.coinlock);
    } else {
      message.coinlock = undefined;
    }
    return message;
  },

  toJSON(message: MsgCommitment): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.from !== undefined && (obj.from = message.from);
    message.coinA !== undefined &&
      (obj.coinA = message.coinA ? Coin.toJSON(message.coinA) : undefined);
    message.toATimelock !== undefined &&
      (obj.toATimelock = message.toATimelock);
    message.blockheight !== undefined &&
      (obj.blockheight = message.blockheight);
    message.toBHashlock !== undefined &&
      (obj.toBHashlock = message.toBHashlock);
    message.hashcode !== undefined && (obj.hashcode = message.hashcode);
    message.coinlock !== undefined &&
      (obj.coinlock = message.coinlock
        ? Coin.toJSON(message.coinlock)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCommitment>): MsgCommitment {
    const message = { ...baseMsgCommitment } as MsgCommitment;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.coinA !== undefined && object.coinA !== null) {
      message.coinA = Coin.fromPartial(object.coinA);
    } else {
      message.coinA = undefined;
    }
    if (object.toATimelock !== undefined && object.toATimelock !== null) {
      message.toATimelock = object.toATimelock;
    } else {
      message.toATimelock = "";
    }
    if (object.blockheight !== undefined && object.blockheight !== null) {
      message.blockheight = object.blockheight;
    } else {
      message.blockheight = 0;
    }
    if (object.toBHashlock !== undefined && object.toBHashlock !== null) {
      message.toBHashlock = object.toBHashlock;
    } else {
      message.toBHashlock = "";
    }
    if (object.hashcode !== undefined && object.hashcode !== null) {
      message.hashcode = object.hashcode;
    } else {
      message.hashcode = "";
    }
    if (object.coinlock !== undefined && object.coinlock !== null) {
      message.coinlock = Coin.fromPartial(object.coinlock);
    } else {
      message.coinlock = undefined;
    }
    return message;
  },
};

const baseMsgCommitmentResponse: object = { index: "" };

export const MsgCommitmentResponse = {
  encode(
    message: MsgCommitmentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
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
          message.index = reader.string();
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
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgCommitmentResponse): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCommitmentResponse>
  ): MsgCommitmentResponse {
    const message = { ...baseMsgCommitmentResponse } as MsgCommitmentResponse;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgWithdrawTimelock: object = { creator: "", to: "", index: "" };

export const MsgWithdrawTimelock = {
  encode(
    message: MsgWithdrawTimelock,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
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
          message.creator = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.index = reader.string();
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawTimelock): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.to !== undefined && (obj.to = message.to);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawTimelock>): MsgWithdrawTimelock {
    const message = { ...baseMsgWithdrawTimelock } as MsgWithdrawTimelock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
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
  creator: "",
  to: "",
  index: "",
  secret: "",
};

export const MsgWithdrawHashlock = {
  encode(
    message: MsgWithdrawHashlock,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
    }
    if (message.secret !== "") {
      writer.uint32(34).string(message.secret);
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
          message.creator = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.index = reader.string();
          break;
        case 4:
          message.secret = reader.string();
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.secret !== undefined && object.secret !== null) {
      message.secret = String(object.secret);
    } else {
      message.secret = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawHashlock): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.to !== undefined && (obj.to = message.to);
    message.index !== undefined && (obj.index = message.index);
    message.secret !== undefined && (obj.secret = message.secret);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawHashlock>): MsgWithdrawHashlock {
    const message = { ...baseMsgWithdrawHashlock } as MsgWithdrawHashlock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.secret !== undefined && object.secret !== null) {
      message.secret = object.secret;
    } else {
      message.secret = "";
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
  creator: "",
  from: "",
  toA: "",
  toB: "",
  channelid: "",
};

export const MsgCloseChannel = {
  encode(message: MsgCloseChannel, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.toA !== "") {
      writer.uint32(26).string(message.toA);
    }
    if (message.coinA !== undefined) {
      Coin.encode(message.coinA, writer.uint32(34).fork()).ldelim();
    }
    if (message.toB !== "") {
      writer.uint32(42).string(message.toB);
    }
    if (message.coinB !== undefined) {
      Coin.encode(message.coinB, writer.uint32(50).fork()).ldelim();
    }
    if (message.channelid !== "") {
      writer.uint32(58).string(message.channelid);
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
          message.creator = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.toA = reader.string();
          break;
        case 4:
          message.coinA = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.toB = reader.string();
          break;
        case 6:
          message.coinB = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.channelid = reader.string();
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.toA !== undefined && object.toA !== null) {
      message.toA = String(object.toA);
    } else {
      message.toA = "";
    }
    if (object.coinA !== undefined && object.coinA !== null) {
      message.coinA = Coin.fromJSON(object.coinA);
    } else {
      message.coinA = undefined;
    }
    if (object.toB !== undefined && object.toB !== null) {
      message.toB = String(object.toB);
    } else {
      message.toB = "";
    }
    if (object.coinB !== undefined && object.coinB !== null) {
      message.coinB = Coin.fromJSON(object.coinB);
    } else {
      message.coinB = undefined;
    }
    if (object.channelid !== undefined && object.channelid !== null) {
      message.channelid = String(object.channelid);
    } else {
      message.channelid = "";
    }
    return message;
  },

  toJSON(message: MsgCloseChannel): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.from !== undefined && (obj.from = message.from);
    message.toA !== undefined && (obj.toA = message.toA);
    message.coinA !== undefined &&
      (obj.coinA = message.coinA ? Coin.toJSON(message.coinA) : undefined);
    message.toB !== undefined && (obj.toB = message.toB);
    message.coinB !== undefined &&
      (obj.coinB = message.coinB ? Coin.toJSON(message.coinB) : undefined);
    message.channelid !== undefined && (obj.channelid = message.channelid);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCloseChannel>): MsgCloseChannel {
    const message = { ...baseMsgCloseChannel } as MsgCloseChannel;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.toA !== undefined && object.toA !== null) {
      message.toA = object.toA;
    } else {
      message.toA = "";
    }
    if (object.coinA !== undefined && object.coinA !== null) {
      message.coinA = Coin.fromPartial(object.coinA);
    } else {
      message.coinA = undefined;
    }
    if (object.toB !== undefined && object.toB !== null) {
      message.toB = object.toB;
    } else {
      message.toB = "";
    }
    if (object.coinB !== undefined && object.coinB !== null) {
      message.coinB = Coin.fromPartial(object.coinB);
    } else {
      message.coinB = undefined;
    }
    if (object.channelid !== undefined && object.channelid !== null) {
      message.channelid = object.channelid;
    } else {
      message.channelid = "";
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
  creator: "",
  partA: "",
  partB: "",
  multisigAddr: "",
  sequence: "",
};

export const MsgOpenChannel = {
  encode(message: MsgOpenChannel, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.partA !== "") {
      writer.uint32(18).string(message.partA);
    }
    if (message.partB !== "") {
      writer.uint32(26).string(message.partB);
    }
    if (message.coinA !== undefined) {
      Coin.encode(message.coinA, writer.uint32(34).fork()).ldelim();
    }
    if (message.coinB !== undefined) {
      Coin.encode(message.coinB, writer.uint32(42).fork()).ldelim();
    }
    if (message.multisigAddr !== "") {
      writer.uint32(50).string(message.multisigAddr);
    }
    if (message.sequence !== "") {
      writer.uint32(58).string(message.sequence);
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
          message.creator = reader.string();
          break;
        case 2:
          message.partA = reader.string();
          break;
        case 3:
          message.partB = reader.string();
          break;
        case 4:
          message.coinA = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.coinB = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.multisigAddr = reader.string();
          break;
        case 7:
          message.sequence = reader.string();
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.partA !== undefined && object.partA !== null) {
      message.partA = String(object.partA);
    } else {
      message.partA = "";
    }
    if (object.partB !== undefined && object.partB !== null) {
      message.partB = String(object.partB);
    } else {
      message.partB = "";
    }
    if (object.coinA !== undefined && object.coinA !== null) {
      message.coinA = Coin.fromJSON(object.coinA);
    } else {
      message.coinA = undefined;
    }
    if (object.coinB !== undefined && object.coinB !== null) {
      message.coinB = Coin.fromJSON(object.coinB);
    } else {
      message.coinB = undefined;
    }
    if (object.multisigAddr !== undefined && object.multisigAddr !== null) {
      message.multisigAddr = String(object.multisigAddr);
    } else {
      message.multisigAddr = "";
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = String(object.sequence);
    } else {
      message.sequence = "";
    }
    return message;
  },

  toJSON(message: MsgOpenChannel): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.partA !== undefined && (obj.partA = message.partA);
    message.partB !== undefined && (obj.partB = message.partB);
    message.coinA !== undefined &&
      (obj.coinA = message.coinA ? Coin.toJSON(message.coinA) : undefined);
    message.coinB !== undefined &&
      (obj.coinB = message.coinB ? Coin.toJSON(message.coinB) : undefined);
    message.multisigAddr !== undefined &&
      (obj.multisigAddr = message.multisigAddr);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgOpenChannel>): MsgOpenChannel {
    const message = { ...baseMsgOpenChannel } as MsgOpenChannel;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.partA !== undefined && object.partA !== null) {
      message.partA = object.partA;
    } else {
      message.partA = "";
    }
    if (object.partB !== undefined && object.partB !== null) {
      message.partB = object.partB;
    } else {
      message.partB = "";
    }
    if (object.coinA !== undefined && object.coinA !== null) {
      message.coinA = Coin.fromPartial(object.coinA);
    } else {
      message.coinA = undefined;
    }
    if (object.coinB !== undefined && object.coinB !== null) {
      message.coinB = Coin.fromPartial(object.coinB);
    } else {
      message.coinB = undefined;
    }
    if (object.multisigAddr !== undefined && object.multisigAddr !== null) {
      message.multisigAddr = object.multisigAddr;
    } else {
      message.multisigAddr = "";
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = "";
    }
    return message;
  },
};

const baseMsgOpenChannelResponse: object = { index: "" };

export const MsgOpenChannelResponse = {
  encode(
    message: MsgOpenChannelResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
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
          message.index = reader.string();
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
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgOpenChannelResponse): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgOpenChannelResponse>
  ): MsgOpenChannelResponse {
    const message = { ...baseMsgOpenChannelResponse } as MsgOpenChannelResponse;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgFund: object = {
  creator: "",
  from: "",
  channelid: "",
  hashcodeB: "",
  multisig: "",
};

export const MsgFund = {
  encode(message: MsgFund, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.channelid !== "") {
      writer.uint32(26).string(message.channelid);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
    }
    if (message.balanceA !== undefined) {
      Coin.encode(message.balanceA, writer.uint32(42).fork()).ldelim();
    }
    if (message.balanceB !== undefined) {
      Coin.encode(message.balanceB, writer.uint32(50).fork()).ldelim();
    }
    if (message.hashcodeB !== "") {
      writer.uint32(58).string(message.hashcodeB);
    }
    if (message.multisig !== "") {
      writer.uint32(66).string(message.multisig);
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
          message.creator = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.channelid = reader.string();
          break;
        case 4:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.balanceA = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.balanceB = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.hashcodeB = reader.string();
          break;
        case 8:
          message.multisig = reader.string();
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.channelid !== undefined && object.channelid !== null) {
      message.channelid = String(object.channelid);
    } else {
      message.channelid = "";
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromJSON(object.coin);
    } else {
      message.coin = undefined;
    }
    if (object.balanceA !== undefined && object.balanceA !== null) {
      message.balanceA = Coin.fromJSON(object.balanceA);
    } else {
      message.balanceA = undefined;
    }
    if (object.balanceB !== undefined && object.balanceB !== null) {
      message.balanceB = Coin.fromJSON(object.balanceB);
    } else {
      message.balanceB = undefined;
    }
    if (object.hashcodeB !== undefined && object.hashcodeB !== null) {
      message.hashcodeB = String(object.hashcodeB);
    } else {
      message.hashcodeB = "";
    }
    if (object.multisig !== undefined && object.multisig !== null) {
      message.multisig = String(object.multisig);
    } else {
      message.multisig = "";
    }
    return message;
  },

  toJSON(message: MsgFund): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.from !== undefined && (obj.from = message.from);
    message.channelid !== undefined && (obj.channelid = message.channelid);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.balanceA !== undefined &&
      (obj.balanceA = message.balanceA
        ? Coin.toJSON(message.balanceA)
        : undefined);
    message.balanceB !== undefined &&
      (obj.balanceB = message.balanceB
        ? Coin.toJSON(message.balanceB)
        : undefined);
    message.hashcodeB !== undefined && (obj.hashcodeB = message.hashcodeB);
    message.multisig !== undefined && (obj.multisig = message.multisig);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgFund>): MsgFund {
    const message = { ...baseMsgFund } as MsgFund;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.channelid !== undefined && object.channelid !== null) {
      message.channelid = object.channelid;
    } else {
      message.channelid = "";
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromPartial(object.coin);
    } else {
      message.coin = undefined;
    }
    if (object.balanceA !== undefined && object.balanceA !== null) {
      message.balanceA = Coin.fromPartial(object.balanceA);
    } else {
      message.balanceA = undefined;
    }
    if (object.balanceB !== undefined && object.balanceB !== null) {
      message.balanceB = Coin.fromPartial(object.balanceB);
    } else {
      message.balanceB = undefined;
    }
    if (object.hashcodeB !== undefined && object.hashcodeB !== null) {
      message.hashcodeB = object.hashcodeB;
    } else {
      message.hashcodeB = "";
    }
    if (object.multisig !== undefined && object.multisig !== null) {
      message.multisig = object.multisig;
    } else {
      message.multisig = "";
    }
    return message;
  },
};

const baseMsgFundResponse: object = { index: "" };

export const MsgFundResponse = {
  encode(message: MsgFundResponse, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
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
          message.index = reader.string();
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
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgFundResponse): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgFundResponse>): MsgFundResponse {
    const message = { ...baseMsgFundResponse } as MsgFundResponse;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
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
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Fund(request: MsgFund): Promise<MsgFundResponse>;
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
