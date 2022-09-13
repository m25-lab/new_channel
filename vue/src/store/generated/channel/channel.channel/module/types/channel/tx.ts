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

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Commitment(request: MsgCommitment): Promise<MsgCommitmentResponse>;
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
