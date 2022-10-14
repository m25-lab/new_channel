/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "channel.channel";

export interface MsgCommitment {
  creator: string;
  from: string;
  cointocreator: Coin | undefined;
  toTimelock: string;
  blockheight: number;
  toHashlock: string;
  hashcode: string;
  coinhtlc: Coin | undefined;
  channelid: string;
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
  coinlock: Coin | undefined;
  hashcode: string;
  timelock: string;
  multisig: string;
}

export interface MsgFundResponse {
  index: string;
}

export interface MsgAcceptfund {
  creator: string;
  from: string;
  channelid: string;
  coin: Coin | undefined;
  hashcode: string;
  timelock: string;
  multisig: string;
}

export interface MsgAcceptfundResponse {
  index: string;
}

export interface MsgSendercommit {
  creator: string;
  from: string;
  channelid: string;
  cointosender: Coin | undefined;
  cointohtlc: Coin | undefined;
  hashcodehtlc: string;
  timelockhtlc: string;
  cointransfer: Coin | undefined;
  hashcodedest: string;
  timelockreceiver: string;
  timelocksender: string;
  multisig: string;
}

export interface MsgSendercommitResponse {
  indexhtlc: string;
  indextransfer: string;
}

export interface MsgSenderwithdrawtimelock {
  creator: string;
  transferindex: string;
  to: string;
}

export interface MsgSenderwithdrawtimelockResponse {}

export interface MsgSenderwithdrawhashlock {
  creator: string;
  transferindex: string;
  to: string;
  secret: string;
}

export interface MsgSenderwithdrawhashlockResponse {}

export interface MsgReceiverwithdraw {
  creator: string;
  transferindex: string;
  to: string;
  secret: string;
}

export interface MsgReceiverwithdrawResponse {}

export interface MsgReceivercommit {
  creator: string;
  from: string;
  channelid: string;
  cointoreceiver: Coin | undefined;
  cointohtlc: Coin | undefined;
  hashcodehtlc: string;
  timelockhtlc: string;
  cointransfer: Coin | undefined;
  hashcodedest: string;
  timelocksender: string;
  multisig: string;
}

export interface MsgReceivercommitResponse {
  indexhtlc: string;
  indextransfer: string;
}

const baseMsgCommitment: object = {
  creator: "",
  from: "",
  toTimelock: "",
  blockheight: 0,
  toHashlock: "",
  hashcode: "",
  channelid: "",
};

export const MsgCommitment = {
  encode(message: MsgCommitment, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.cointocreator !== undefined) {
      Coin.encode(message.cointocreator, writer.uint32(26).fork()).ldelim();
    }
    if (message.toTimelock !== "") {
      writer.uint32(34).string(message.toTimelock);
    }
    if (message.blockheight !== 0) {
      writer.uint32(40).uint64(message.blockheight);
    }
    if (message.toHashlock !== "") {
      writer.uint32(50).string(message.toHashlock);
    }
    if (message.hashcode !== "") {
      writer.uint32(58).string(message.hashcode);
    }
    if (message.coinhtlc !== undefined) {
      Coin.encode(message.coinhtlc, writer.uint32(66).fork()).ldelim();
    }
    if (message.channelid !== "") {
      writer.uint32(74).string(message.channelid);
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
          message.cointocreator = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.toTimelock = reader.string();
          break;
        case 5:
          message.blockheight = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.toHashlock = reader.string();
          break;
        case 7:
          message.hashcode = reader.string();
          break;
        case 8:
          message.coinhtlc = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.channelid = reader.string();
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
    if (object.cointocreator !== undefined && object.cointocreator !== null) {
      message.cointocreator = Coin.fromJSON(object.cointocreator);
    } else {
      message.cointocreator = undefined;
    }
    if (object.toTimelock !== undefined && object.toTimelock !== null) {
      message.toTimelock = String(object.toTimelock);
    } else {
      message.toTimelock = "";
    }
    if (object.blockheight !== undefined && object.blockheight !== null) {
      message.blockheight = Number(object.blockheight);
    } else {
      message.blockheight = 0;
    }
    if (object.toHashlock !== undefined && object.toHashlock !== null) {
      message.toHashlock = String(object.toHashlock);
    } else {
      message.toHashlock = "";
    }
    if (object.hashcode !== undefined && object.hashcode !== null) {
      message.hashcode = String(object.hashcode);
    } else {
      message.hashcode = "";
    }
    if (object.coinhtlc !== undefined && object.coinhtlc !== null) {
      message.coinhtlc = Coin.fromJSON(object.coinhtlc);
    } else {
      message.coinhtlc = undefined;
    }
    if (object.channelid !== undefined && object.channelid !== null) {
      message.channelid = String(object.channelid);
    } else {
      message.channelid = "";
    }
    return message;
  },

  toJSON(message: MsgCommitment): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.from !== undefined && (obj.from = message.from);
    message.cointocreator !== undefined &&
      (obj.cointocreator = message.cointocreator
        ? Coin.toJSON(message.cointocreator)
        : undefined);
    message.toTimelock !== undefined && (obj.toTimelock = message.toTimelock);
    message.blockheight !== undefined &&
      (obj.blockheight = message.blockheight);
    message.toHashlock !== undefined && (obj.toHashlock = message.toHashlock);
    message.hashcode !== undefined && (obj.hashcode = message.hashcode);
    message.coinhtlc !== undefined &&
      (obj.coinhtlc = message.coinhtlc
        ? Coin.toJSON(message.coinhtlc)
        : undefined);
    message.channelid !== undefined && (obj.channelid = message.channelid);
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
    if (object.cointocreator !== undefined && object.cointocreator !== null) {
      message.cointocreator = Coin.fromPartial(object.cointocreator);
    } else {
      message.cointocreator = undefined;
    }
    if (object.toTimelock !== undefined && object.toTimelock !== null) {
      message.toTimelock = object.toTimelock;
    } else {
      message.toTimelock = "";
    }
    if (object.blockheight !== undefined && object.blockheight !== null) {
      message.blockheight = object.blockheight;
    } else {
      message.blockheight = 0;
    }
    if (object.toHashlock !== undefined && object.toHashlock !== null) {
      message.toHashlock = object.toHashlock;
    } else {
      message.toHashlock = "";
    }
    if (object.hashcode !== undefined && object.hashcode !== null) {
      message.hashcode = object.hashcode;
    } else {
      message.hashcode = "";
    }
    if (object.coinhtlc !== undefined && object.coinhtlc !== null) {
      message.coinhtlc = Coin.fromPartial(object.coinhtlc);
    } else {
      message.coinhtlc = undefined;
    }
    if (object.channelid !== undefined && object.channelid !== null) {
      message.channelid = object.channelid;
    } else {
      message.channelid = "";
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
  hashcode: "",
  timelock: "",
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
    if (message.coinlock !== undefined) {
      Coin.encode(message.coinlock, writer.uint32(34).fork()).ldelim();
    }
    if (message.hashcode !== "") {
      writer.uint32(42).string(message.hashcode);
    }
    if (message.timelock !== "") {
      writer.uint32(50).string(message.timelock);
    }
    if (message.multisig !== "") {
      writer.uint32(58).string(message.multisig);
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
          message.coinlock = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.hashcode = reader.string();
          break;
        case 6:
          message.timelock = reader.string();
          break;
        case 7:
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
    if (object.coinlock !== undefined && object.coinlock !== null) {
      message.coinlock = Coin.fromJSON(object.coinlock);
    } else {
      message.coinlock = undefined;
    }
    if (object.hashcode !== undefined && object.hashcode !== null) {
      message.hashcode = String(object.hashcode);
    } else {
      message.hashcode = "";
    }
    if (object.timelock !== undefined && object.timelock !== null) {
      message.timelock = String(object.timelock);
    } else {
      message.timelock = "";
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
    message.coinlock !== undefined &&
      (obj.coinlock = message.coinlock
        ? Coin.toJSON(message.coinlock)
        : undefined);
    message.hashcode !== undefined && (obj.hashcode = message.hashcode);
    message.timelock !== undefined && (obj.timelock = message.timelock);
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
    if (object.coinlock !== undefined && object.coinlock !== null) {
      message.coinlock = Coin.fromPartial(object.coinlock);
    } else {
      message.coinlock = undefined;
    }
    if (object.hashcode !== undefined && object.hashcode !== null) {
      message.hashcode = object.hashcode;
    } else {
      message.hashcode = "";
    }
    if (object.timelock !== undefined && object.timelock !== null) {
      message.timelock = object.timelock;
    } else {
      message.timelock = "";
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

const baseMsgAcceptfund: object = {
  creator: "",
  from: "",
  channelid: "",
  hashcode: "",
  timelock: "",
  multisig: "",
};

export const MsgAcceptfund = {
  encode(message: MsgAcceptfund, writer: Writer = Writer.create()): Writer {
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
    if (message.hashcode !== "") {
      writer.uint32(42).string(message.hashcode);
    }
    if (message.timelock !== "") {
      writer.uint32(50).string(message.timelock);
    }
    if (message.multisig !== "") {
      writer.uint32(58).string(message.multisig);
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
          message.hashcode = reader.string();
          break;
        case 6:
          message.timelock = reader.string();
          break;
        case 7:
          message.multisig = reader.string();
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
    if (object.hashcode !== undefined && object.hashcode !== null) {
      message.hashcode = String(object.hashcode);
    } else {
      message.hashcode = "";
    }
    if (object.timelock !== undefined && object.timelock !== null) {
      message.timelock = String(object.timelock);
    } else {
      message.timelock = "";
    }
    if (object.multisig !== undefined && object.multisig !== null) {
      message.multisig = String(object.multisig);
    } else {
      message.multisig = "";
    }
    return message;
  },

  toJSON(message: MsgAcceptfund): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.from !== undefined && (obj.from = message.from);
    message.channelid !== undefined && (obj.channelid = message.channelid);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.hashcode !== undefined && (obj.hashcode = message.hashcode);
    message.timelock !== undefined && (obj.timelock = message.timelock);
    message.multisig !== undefined && (obj.multisig = message.multisig);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAcceptfund>): MsgAcceptfund {
    const message = { ...baseMsgAcceptfund } as MsgAcceptfund;
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
    if (object.hashcode !== undefined && object.hashcode !== null) {
      message.hashcode = object.hashcode;
    } else {
      message.hashcode = "";
    }
    if (object.timelock !== undefined && object.timelock !== null) {
      message.timelock = object.timelock;
    } else {
      message.timelock = "";
    }
    if (object.multisig !== undefined && object.multisig !== null) {
      message.multisig = object.multisig;
    } else {
      message.multisig = "";
    }
    return message;
  },
};

const baseMsgAcceptfundResponse: object = { index: "" };

export const MsgAcceptfundResponse = {
  encode(
    message: MsgAcceptfundResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
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
          message.index = reader.string();
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
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgAcceptfundResponse): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAcceptfundResponse>
  ): MsgAcceptfundResponse {
    const message = { ...baseMsgAcceptfundResponse } as MsgAcceptfundResponse;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgSendercommit: object = {
  creator: "",
  from: "",
  channelid: "",
  hashcodehtlc: "",
  timelockhtlc: "",
  hashcodedest: "",
  timelockreceiver: "",
  timelocksender: "",
  multisig: "",
};

export const MsgSendercommit = {
  encode(message: MsgSendercommit, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.channelid !== "") {
      writer.uint32(26).string(message.channelid);
    }
    if (message.cointosender !== undefined) {
      Coin.encode(message.cointosender, writer.uint32(34).fork()).ldelim();
    }
    if (message.cointohtlc !== undefined) {
      Coin.encode(message.cointohtlc, writer.uint32(42).fork()).ldelim();
    }
    if (message.hashcodehtlc !== "") {
      writer.uint32(50).string(message.hashcodehtlc);
    }
    if (message.timelockhtlc !== "") {
      writer.uint32(58).string(message.timelockhtlc);
    }
    if (message.cointransfer !== undefined) {
      Coin.encode(message.cointransfer, writer.uint32(66).fork()).ldelim();
    }
    if (message.hashcodedest !== "") {
      writer.uint32(74).string(message.hashcodedest);
    }
    if (message.timelockreceiver !== "") {
      writer.uint32(82).string(message.timelockreceiver);
    }
    if (message.timelocksender !== "") {
      writer.uint32(90).string(message.timelocksender);
    }
    if (message.multisig !== "") {
      writer.uint32(98).string(message.multisig);
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
          message.creator = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.channelid = reader.string();
          break;
        case 4:
          message.cointosender = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.cointohtlc = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.hashcodehtlc = reader.string();
          break;
        case 7:
          message.timelockhtlc = reader.string();
          break;
        case 8:
          message.cointransfer = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.hashcodedest = reader.string();
          break;
        case 10:
          message.timelockreceiver = reader.string();
          break;
        case 11:
          message.timelocksender = reader.string();
          break;
        case 12:
          message.multisig = reader.string();
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
    if (object.cointosender !== undefined && object.cointosender !== null) {
      message.cointosender = Coin.fromJSON(object.cointosender);
    } else {
      message.cointosender = undefined;
    }
    if (object.cointohtlc !== undefined && object.cointohtlc !== null) {
      message.cointohtlc = Coin.fromJSON(object.cointohtlc);
    } else {
      message.cointohtlc = undefined;
    }
    if (object.hashcodehtlc !== undefined && object.hashcodehtlc !== null) {
      message.hashcodehtlc = String(object.hashcodehtlc);
    } else {
      message.hashcodehtlc = "";
    }
    if (object.timelockhtlc !== undefined && object.timelockhtlc !== null) {
      message.timelockhtlc = String(object.timelockhtlc);
    } else {
      message.timelockhtlc = "";
    }
    if (object.cointransfer !== undefined && object.cointransfer !== null) {
      message.cointransfer = Coin.fromJSON(object.cointransfer);
    } else {
      message.cointransfer = undefined;
    }
    if (object.hashcodedest !== undefined && object.hashcodedest !== null) {
      message.hashcodedest = String(object.hashcodedest);
    } else {
      message.hashcodedest = "";
    }
    if (
      object.timelockreceiver !== undefined &&
      object.timelockreceiver !== null
    ) {
      message.timelockreceiver = String(object.timelockreceiver);
    } else {
      message.timelockreceiver = "";
    }
    if (object.timelocksender !== undefined && object.timelocksender !== null) {
      message.timelocksender = String(object.timelocksender);
    } else {
      message.timelocksender = "";
    }
    if (object.multisig !== undefined && object.multisig !== null) {
      message.multisig = String(object.multisig);
    } else {
      message.multisig = "";
    }
    return message;
  },

  toJSON(message: MsgSendercommit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.from !== undefined && (obj.from = message.from);
    message.channelid !== undefined && (obj.channelid = message.channelid);
    message.cointosender !== undefined &&
      (obj.cointosender = message.cointosender
        ? Coin.toJSON(message.cointosender)
        : undefined);
    message.cointohtlc !== undefined &&
      (obj.cointohtlc = message.cointohtlc
        ? Coin.toJSON(message.cointohtlc)
        : undefined);
    message.hashcodehtlc !== undefined &&
      (obj.hashcodehtlc = message.hashcodehtlc);
    message.timelockhtlc !== undefined &&
      (obj.timelockhtlc = message.timelockhtlc);
    message.cointransfer !== undefined &&
      (obj.cointransfer = message.cointransfer
        ? Coin.toJSON(message.cointransfer)
        : undefined);
    message.hashcodedest !== undefined &&
      (obj.hashcodedest = message.hashcodedest);
    message.timelockreceiver !== undefined &&
      (obj.timelockreceiver = message.timelockreceiver);
    message.timelocksender !== undefined &&
      (obj.timelocksender = message.timelocksender);
    message.multisig !== undefined && (obj.multisig = message.multisig);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendercommit>): MsgSendercommit {
    const message = { ...baseMsgSendercommit } as MsgSendercommit;
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
    if (object.cointosender !== undefined && object.cointosender !== null) {
      message.cointosender = Coin.fromPartial(object.cointosender);
    } else {
      message.cointosender = undefined;
    }
    if (object.cointohtlc !== undefined && object.cointohtlc !== null) {
      message.cointohtlc = Coin.fromPartial(object.cointohtlc);
    } else {
      message.cointohtlc = undefined;
    }
    if (object.hashcodehtlc !== undefined && object.hashcodehtlc !== null) {
      message.hashcodehtlc = object.hashcodehtlc;
    } else {
      message.hashcodehtlc = "";
    }
    if (object.timelockhtlc !== undefined && object.timelockhtlc !== null) {
      message.timelockhtlc = object.timelockhtlc;
    } else {
      message.timelockhtlc = "";
    }
    if (object.cointransfer !== undefined && object.cointransfer !== null) {
      message.cointransfer = Coin.fromPartial(object.cointransfer);
    } else {
      message.cointransfer = undefined;
    }
    if (object.hashcodedest !== undefined && object.hashcodedest !== null) {
      message.hashcodedest = object.hashcodedest;
    } else {
      message.hashcodedest = "";
    }
    if (
      object.timelockreceiver !== undefined &&
      object.timelockreceiver !== null
    ) {
      message.timelockreceiver = object.timelockreceiver;
    } else {
      message.timelockreceiver = "";
    }
    if (object.timelocksender !== undefined && object.timelocksender !== null) {
      message.timelocksender = object.timelocksender;
    } else {
      message.timelocksender = "";
    }
    if (object.multisig !== undefined && object.multisig !== null) {
      message.multisig = object.multisig;
    } else {
      message.multisig = "";
    }
    return message;
  },
};

const baseMsgSendercommitResponse: object = {
  indexhtlc: "",
  indextransfer: "",
};

export const MsgSendercommitResponse = {
  encode(
    message: MsgSendercommitResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.indexhtlc !== "") {
      writer.uint32(10).string(message.indexhtlc);
    }
    if (message.indextransfer !== "") {
      writer.uint32(18).string(message.indextransfer);
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
          message.indexhtlc = reader.string();
          break;
        case 2:
          message.indextransfer = reader.string();
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
    if (object.indexhtlc !== undefined && object.indexhtlc !== null) {
      message.indexhtlc = String(object.indexhtlc);
    } else {
      message.indexhtlc = "";
    }
    if (object.indextransfer !== undefined && object.indextransfer !== null) {
      message.indextransfer = String(object.indextransfer);
    } else {
      message.indextransfer = "";
    }
    return message;
  },

  toJSON(message: MsgSendercommitResponse): unknown {
    const obj: any = {};
    message.indexhtlc !== undefined && (obj.indexhtlc = message.indexhtlc);
    message.indextransfer !== undefined &&
      (obj.indextransfer = message.indextransfer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendercommitResponse>
  ): MsgSendercommitResponse {
    const message = {
      ...baseMsgSendercommitResponse,
    } as MsgSendercommitResponse;
    if (object.indexhtlc !== undefined && object.indexhtlc !== null) {
      message.indexhtlc = object.indexhtlc;
    } else {
      message.indexhtlc = "";
    }
    if (object.indextransfer !== undefined && object.indextransfer !== null) {
      message.indextransfer = object.indextransfer;
    } else {
      message.indextransfer = "";
    }
    return message;
  },
};

const baseMsgSenderwithdrawtimelock: object = {
  creator: "",
  transferindex: "",
  to: "",
};

export const MsgSenderwithdrawtimelock = {
  encode(
    message: MsgSenderwithdrawtimelock,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transferindex !== "") {
      writer.uint32(18).string(message.transferindex);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
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
          message.creator = reader.string();
          break;
        case 2:
          message.transferindex = reader.string();
          break;
        case 3:
          message.to = reader.string();
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.transferindex !== undefined && object.transferindex !== null) {
      message.transferindex = String(object.transferindex);
    } else {
      message.transferindex = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    return message;
  },

  toJSON(message: MsgSenderwithdrawtimelock): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.transferindex !== undefined &&
      (obj.transferindex = message.transferindex);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSenderwithdrawtimelock>
  ): MsgSenderwithdrawtimelock {
    const message = {
      ...baseMsgSenderwithdrawtimelock,
    } as MsgSenderwithdrawtimelock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.transferindex !== undefined && object.transferindex !== null) {
      message.transferindex = object.transferindex;
    } else {
      message.transferindex = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
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
  creator: "",
  transferindex: "",
  to: "",
  secret: "",
};

export const MsgSenderwithdrawhashlock = {
  encode(
    message: MsgSenderwithdrawhashlock,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transferindex !== "") {
      writer.uint32(18).string(message.transferindex);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.secret !== "") {
      writer.uint32(34).string(message.secret);
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
          message.creator = reader.string();
          break;
        case 2:
          message.transferindex = reader.string();
          break;
        case 3:
          message.to = reader.string();
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

  fromJSON(object: any): MsgSenderwithdrawhashlock {
    const message = {
      ...baseMsgSenderwithdrawhashlock,
    } as MsgSenderwithdrawhashlock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.transferindex !== undefined && object.transferindex !== null) {
      message.transferindex = String(object.transferindex);
    } else {
      message.transferindex = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.secret !== undefined && object.secret !== null) {
      message.secret = String(object.secret);
    } else {
      message.secret = "";
    }
    return message;
  },

  toJSON(message: MsgSenderwithdrawhashlock): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.transferindex !== undefined &&
      (obj.transferindex = message.transferindex);
    message.to !== undefined && (obj.to = message.to);
    message.secret !== undefined && (obj.secret = message.secret);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSenderwithdrawhashlock>
  ): MsgSenderwithdrawhashlock {
    const message = {
      ...baseMsgSenderwithdrawhashlock,
    } as MsgSenderwithdrawhashlock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.transferindex !== undefined && object.transferindex !== null) {
      message.transferindex = object.transferindex;
    } else {
      message.transferindex = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.secret !== undefined && object.secret !== null) {
      message.secret = object.secret;
    } else {
      message.secret = "";
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
  creator: "",
  transferindex: "",
  to: "",
  secret: "",
};

export const MsgReceiverwithdraw = {
  encode(
    message: MsgReceiverwithdraw,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transferindex !== "") {
      writer.uint32(18).string(message.transferindex);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.secret !== "") {
      writer.uint32(34).string(message.secret);
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
          message.creator = reader.string();
          break;
        case 2:
          message.transferindex = reader.string();
          break;
        case 3:
          message.to = reader.string();
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

  fromJSON(object: any): MsgReceiverwithdraw {
    const message = { ...baseMsgReceiverwithdraw } as MsgReceiverwithdraw;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.transferindex !== undefined && object.transferindex !== null) {
      message.transferindex = String(object.transferindex);
    } else {
      message.transferindex = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.secret !== undefined && object.secret !== null) {
      message.secret = String(object.secret);
    } else {
      message.secret = "";
    }
    return message;
  },

  toJSON(message: MsgReceiverwithdraw): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.transferindex !== undefined &&
      (obj.transferindex = message.transferindex);
    message.to !== undefined && (obj.to = message.to);
    message.secret !== undefined && (obj.secret = message.secret);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgReceiverwithdraw>): MsgReceiverwithdraw {
    const message = { ...baseMsgReceiverwithdraw } as MsgReceiverwithdraw;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.transferindex !== undefined && object.transferindex !== null) {
      message.transferindex = object.transferindex;
    } else {
      message.transferindex = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.secret !== undefined && object.secret !== null) {
      message.secret = object.secret;
    } else {
      message.secret = "";
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
  creator: "",
  from: "",
  channelid: "",
  hashcodehtlc: "",
  timelockhtlc: "",
  hashcodedest: "",
  timelocksender: "",
  multisig: "",
};

export const MsgReceivercommit = {
  encode(message: MsgReceivercommit, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.channelid !== "") {
      writer.uint32(26).string(message.channelid);
    }
    if (message.cointoreceiver !== undefined) {
      Coin.encode(message.cointoreceiver, writer.uint32(34).fork()).ldelim();
    }
    if (message.cointohtlc !== undefined) {
      Coin.encode(message.cointohtlc, writer.uint32(42).fork()).ldelim();
    }
    if (message.hashcodehtlc !== "") {
      writer.uint32(50).string(message.hashcodehtlc);
    }
    if (message.timelockhtlc !== "") {
      writer.uint32(58).string(message.timelockhtlc);
    }
    if (message.cointransfer !== undefined) {
      Coin.encode(message.cointransfer, writer.uint32(66).fork()).ldelim();
    }
    if (message.hashcodedest !== "") {
      writer.uint32(74).string(message.hashcodedest);
    }
    if (message.timelocksender !== "") {
      writer.uint32(82).string(message.timelocksender);
    }
    if (message.multisig !== "") {
      writer.uint32(90).string(message.multisig);
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
          message.creator = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.channelid = reader.string();
          break;
        case 4:
          message.cointoreceiver = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.cointohtlc = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.hashcodehtlc = reader.string();
          break;
        case 7:
          message.timelockhtlc = reader.string();
          break;
        case 8:
          message.cointransfer = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.hashcodedest = reader.string();
          break;
        case 10:
          message.timelocksender = reader.string();
          break;
        case 11:
          message.multisig = reader.string();
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
    if (object.cointoreceiver !== undefined && object.cointoreceiver !== null) {
      message.cointoreceiver = Coin.fromJSON(object.cointoreceiver);
    } else {
      message.cointoreceiver = undefined;
    }
    if (object.cointohtlc !== undefined && object.cointohtlc !== null) {
      message.cointohtlc = Coin.fromJSON(object.cointohtlc);
    } else {
      message.cointohtlc = undefined;
    }
    if (object.hashcodehtlc !== undefined && object.hashcodehtlc !== null) {
      message.hashcodehtlc = String(object.hashcodehtlc);
    } else {
      message.hashcodehtlc = "";
    }
    if (object.timelockhtlc !== undefined && object.timelockhtlc !== null) {
      message.timelockhtlc = String(object.timelockhtlc);
    } else {
      message.timelockhtlc = "";
    }
    if (object.cointransfer !== undefined && object.cointransfer !== null) {
      message.cointransfer = Coin.fromJSON(object.cointransfer);
    } else {
      message.cointransfer = undefined;
    }
    if (object.hashcodedest !== undefined && object.hashcodedest !== null) {
      message.hashcodedest = String(object.hashcodedest);
    } else {
      message.hashcodedest = "";
    }
    if (object.timelocksender !== undefined && object.timelocksender !== null) {
      message.timelocksender = String(object.timelocksender);
    } else {
      message.timelocksender = "";
    }
    if (object.multisig !== undefined && object.multisig !== null) {
      message.multisig = String(object.multisig);
    } else {
      message.multisig = "";
    }
    return message;
  },

  toJSON(message: MsgReceivercommit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.from !== undefined && (obj.from = message.from);
    message.channelid !== undefined && (obj.channelid = message.channelid);
    message.cointoreceiver !== undefined &&
      (obj.cointoreceiver = message.cointoreceiver
        ? Coin.toJSON(message.cointoreceiver)
        : undefined);
    message.cointohtlc !== undefined &&
      (obj.cointohtlc = message.cointohtlc
        ? Coin.toJSON(message.cointohtlc)
        : undefined);
    message.hashcodehtlc !== undefined &&
      (obj.hashcodehtlc = message.hashcodehtlc);
    message.timelockhtlc !== undefined &&
      (obj.timelockhtlc = message.timelockhtlc);
    message.cointransfer !== undefined &&
      (obj.cointransfer = message.cointransfer
        ? Coin.toJSON(message.cointransfer)
        : undefined);
    message.hashcodedest !== undefined &&
      (obj.hashcodedest = message.hashcodedest);
    message.timelocksender !== undefined &&
      (obj.timelocksender = message.timelocksender);
    message.multisig !== undefined && (obj.multisig = message.multisig);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgReceivercommit>): MsgReceivercommit {
    const message = { ...baseMsgReceivercommit } as MsgReceivercommit;
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
    if (object.cointoreceiver !== undefined && object.cointoreceiver !== null) {
      message.cointoreceiver = Coin.fromPartial(object.cointoreceiver);
    } else {
      message.cointoreceiver = undefined;
    }
    if (object.cointohtlc !== undefined && object.cointohtlc !== null) {
      message.cointohtlc = Coin.fromPartial(object.cointohtlc);
    } else {
      message.cointohtlc = undefined;
    }
    if (object.hashcodehtlc !== undefined && object.hashcodehtlc !== null) {
      message.hashcodehtlc = object.hashcodehtlc;
    } else {
      message.hashcodehtlc = "";
    }
    if (object.timelockhtlc !== undefined && object.timelockhtlc !== null) {
      message.timelockhtlc = object.timelockhtlc;
    } else {
      message.timelockhtlc = "";
    }
    if (object.cointransfer !== undefined && object.cointransfer !== null) {
      message.cointransfer = Coin.fromPartial(object.cointransfer);
    } else {
      message.cointransfer = undefined;
    }
    if (object.hashcodedest !== undefined && object.hashcodedest !== null) {
      message.hashcodedest = object.hashcodedest;
    } else {
      message.hashcodedest = "";
    }
    if (object.timelocksender !== undefined && object.timelocksender !== null) {
      message.timelocksender = object.timelocksender;
    } else {
      message.timelocksender = "";
    }
    if (object.multisig !== undefined && object.multisig !== null) {
      message.multisig = object.multisig;
    } else {
      message.multisig = "";
    }
    return message;
  },
};

const baseMsgReceivercommitResponse: object = {
  indexhtlc: "",
  indextransfer: "",
};

export const MsgReceivercommitResponse = {
  encode(
    message: MsgReceivercommitResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.indexhtlc !== "") {
      writer.uint32(10).string(message.indexhtlc);
    }
    if (message.indextransfer !== "") {
      writer.uint32(18).string(message.indextransfer);
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
          message.indexhtlc = reader.string();
          break;
        case 2:
          message.indextransfer = reader.string();
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
    if (object.indexhtlc !== undefined && object.indexhtlc !== null) {
      message.indexhtlc = String(object.indexhtlc);
    } else {
      message.indexhtlc = "";
    }
    if (object.indextransfer !== undefined && object.indextransfer !== null) {
      message.indextransfer = String(object.indextransfer);
    } else {
      message.indextransfer = "";
    }
    return message;
  },

  toJSON(message: MsgReceivercommitResponse): unknown {
    const obj: any = {};
    message.indexhtlc !== undefined && (obj.indexhtlc = message.indexhtlc);
    message.indextransfer !== undefined &&
      (obj.indextransfer = message.indextransfer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgReceivercommitResponse>
  ): MsgReceivercommitResponse {
    const message = {
      ...baseMsgReceivercommitResponse,
    } as MsgReceivercommitResponse;
    if (object.indexhtlc !== undefined && object.indexhtlc !== null) {
      message.indexhtlc = object.indexhtlc;
    } else {
      message.indexhtlc = "";
    }
    if (object.indextransfer !== undefined && object.indextransfer !== null) {
      message.indextransfer = object.indextransfer;
    } else {
      message.indextransfer = "";
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
