/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../channel/params";
import { Commitment } from "../channel/commitment";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Channel } from "../channel/channel";
import { Fwdcommit } from "../channel/fwdcommit";

export const protobufPackage = "channel.channel";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetCommitmentRequest {
  index: string;
}

export interface QueryGetCommitmentResponse {
  commitment: Commitment | undefined;
}

export interface QueryAllCommitmentRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCommitmentResponse {
  commitment: Commitment[];
  pagination: PageResponse | undefined;
}

export interface QueryGetChannelRequest {
  index: string;
}

export interface QueryGetChannelResponse {
  channel: Channel | undefined;
}

export interface QueryAllChannelRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllChannelResponse {
  channel: Channel[];
  pagination: PageResponse | undefined;
}

export interface QueryGetFwdcommitRequest {
  index: string;
}

export interface QueryGetFwdcommitResponse {
  fwdcommit: Fwdcommit | undefined;
}

export interface QueryAllFwdcommitRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllFwdcommitResponse {
  fwdcommit: Fwdcommit[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetCommitmentRequest: object = { index: "" };

export const QueryGetCommitmentRequest = {
  encode(
    message: QueryGetCommitmentRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCommitmentRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCommitmentRequest,
    } as QueryGetCommitmentRequest;
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

  fromJSON(object: any): QueryGetCommitmentRequest {
    const message = {
      ...baseQueryGetCommitmentRequest,
    } as QueryGetCommitmentRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetCommitmentRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCommitmentRequest>
  ): QueryGetCommitmentRequest {
    const message = {
      ...baseQueryGetCommitmentRequest,
    } as QueryGetCommitmentRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetCommitmentResponse: object = {};

export const QueryGetCommitmentResponse = {
  encode(
    message: QueryGetCommitmentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.commitment !== undefined) {
      Commitment.encode(message.commitment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCommitmentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCommitmentResponse,
    } as QueryGetCommitmentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitment = Commitment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommitmentResponse {
    const message = {
      ...baseQueryGetCommitmentResponse,
    } as QueryGetCommitmentResponse;
    if (object.commitment !== undefined && object.commitment !== null) {
      message.commitment = Commitment.fromJSON(object.commitment);
    } else {
      message.commitment = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCommitmentResponse): unknown {
    const obj: any = {};
    message.commitment !== undefined &&
      (obj.commitment = message.commitment
        ? Commitment.toJSON(message.commitment)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCommitmentResponse>
  ): QueryGetCommitmentResponse {
    const message = {
      ...baseQueryGetCommitmentResponse,
    } as QueryGetCommitmentResponse;
    if (object.commitment !== undefined && object.commitment !== null) {
      message.commitment = Commitment.fromPartial(object.commitment);
    } else {
      message.commitment = undefined;
    }
    return message;
  },
};

const baseQueryAllCommitmentRequest: object = {};

export const QueryAllCommitmentRequest = {
  encode(
    message: QueryAllCommitmentRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCommitmentRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCommitmentRequest,
    } as QueryAllCommitmentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommitmentRequest {
    const message = {
      ...baseQueryAllCommitmentRequest,
    } as QueryAllCommitmentRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCommitmentRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCommitmentRequest>
  ): QueryAllCommitmentRequest {
    const message = {
      ...baseQueryAllCommitmentRequest,
    } as QueryAllCommitmentRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCommitmentResponse: object = {};

export const QueryAllCommitmentResponse = {
  encode(
    message: QueryAllCommitmentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.commitment) {
      Commitment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCommitmentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCommitmentResponse,
    } as QueryAllCommitmentResponse;
    message.commitment = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitment.push(Commitment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommitmentResponse {
    const message = {
      ...baseQueryAllCommitmentResponse,
    } as QueryAllCommitmentResponse;
    message.commitment = [];
    if (object.commitment !== undefined && object.commitment !== null) {
      for (const e of object.commitment) {
        message.commitment.push(Commitment.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCommitmentResponse): unknown {
    const obj: any = {};
    if (message.commitment) {
      obj.commitment = message.commitment.map((e) =>
        e ? Commitment.toJSON(e) : undefined
      );
    } else {
      obj.commitment = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCommitmentResponse>
  ): QueryAllCommitmentResponse {
    const message = {
      ...baseQueryAllCommitmentResponse,
    } as QueryAllCommitmentResponse;
    message.commitment = [];
    if (object.commitment !== undefined && object.commitment !== null) {
      for (const e of object.commitment) {
        message.commitment.push(Commitment.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetChannelRequest: object = { index: "" };

export const QueryGetChannelRequest = {
  encode(
    message: QueryGetChannelRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetChannelRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetChannelRequest } as QueryGetChannelRequest;
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

  fromJSON(object: any): QueryGetChannelRequest {
    const message = { ...baseQueryGetChannelRequest } as QueryGetChannelRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetChannelRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetChannelRequest>
  ): QueryGetChannelRequest {
    const message = { ...baseQueryGetChannelRequest } as QueryGetChannelRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetChannelResponse: object = {};

export const QueryGetChannelResponse = {
  encode(
    message: QueryGetChannelResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetChannelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetChannelResponse,
    } as QueryGetChannelResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetChannelResponse {
    const message = {
      ...baseQueryGetChannelResponse,
    } as QueryGetChannelResponse;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromJSON(object.channel);
    } else {
      message.channel = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetChannelResponse): unknown {
    const obj: any = {};
    message.channel !== undefined &&
      (obj.channel = message.channel
        ? Channel.toJSON(message.channel)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetChannelResponse>
  ): QueryGetChannelResponse {
    const message = {
      ...baseQueryGetChannelResponse,
    } as QueryGetChannelResponse;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromPartial(object.channel);
    } else {
      message.channel = undefined;
    }
    return message;
  },
};

const baseQueryAllChannelRequest: object = {};

export const QueryAllChannelRequest = {
  encode(
    message: QueryAllChannelRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllChannelRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllChannelRequest } as QueryAllChannelRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllChannelRequest {
    const message = { ...baseQueryAllChannelRequest } as QueryAllChannelRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllChannelRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllChannelRequest>
  ): QueryAllChannelRequest {
    const message = { ...baseQueryAllChannelRequest } as QueryAllChannelRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllChannelResponse: object = {};

export const QueryAllChannelResponse = {
  encode(
    message: QueryAllChannelResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.channel) {
      Channel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllChannelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllChannelResponse,
    } as QueryAllChannelResponse;
    message.channel = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel.push(Channel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllChannelResponse {
    const message = {
      ...baseQueryAllChannelResponse,
    } as QueryAllChannelResponse;
    message.channel = [];
    if (object.channel !== undefined && object.channel !== null) {
      for (const e of object.channel) {
        message.channel.push(Channel.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllChannelResponse): unknown {
    const obj: any = {};
    if (message.channel) {
      obj.channel = message.channel.map((e) =>
        e ? Channel.toJSON(e) : undefined
      );
    } else {
      obj.channel = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllChannelResponse>
  ): QueryAllChannelResponse {
    const message = {
      ...baseQueryAllChannelResponse,
    } as QueryAllChannelResponse;
    message.channel = [];
    if (object.channel !== undefined && object.channel !== null) {
      for (const e of object.channel) {
        message.channel.push(Channel.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetFwdcommitRequest: object = { index: "" };

export const QueryGetFwdcommitRequest = {
  encode(
    message: QueryGetFwdcommitRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetFwdcommitRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFwdcommitRequest,
    } as QueryGetFwdcommitRequest;
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

  fromJSON(object: any): QueryGetFwdcommitRequest {
    const message = {
      ...baseQueryGetFwdcommitRequest,
    } as QueryGetFwdcommitRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetFwdcommitRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFwdcommitRequest>
  ): QueryGetFwdcommitRequest {
    const message = {
      ...baseQueryGetFwdcommitRequest,
    } as QueryGetFwdcommitRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetFwdcommitResponse: object = {};

export const QueryGetFwdcommitResponse = {
  encode(
    message: QueryGetFwdcommitResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fwdcommit !== undefined) {
      Fwdcommit.encode(message.fwdcommit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetFwdcommitResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFwdcommitResponse,
    } as QueryGetFwdcommitResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fwdcommit = Fwdcommit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFwdcommitResponse {
    const message = {
      ...baseQueryGetFwdcommitResponse,
    } as QueryGetFwdcommitResponse;
    if (object.fwdcommit !== undefined && object.fwdcommit !== null) {
      message.fwdcommit = Fwdcommit.fromJSON(object.fwdcommit);
    } else {
      message.fwdcommit = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetFwdcommitResponse): unknown {
    const obj: any = {};
    message.fwdcommit !== undefined &&
      (obj.fwdcommit = message.fwdcommit
        ? Fwdcommit.toJSON(message.fwdcommit)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFwdcommitResponse>
  ): QueryGetFwdcommitResponse {
    const message = {
      ...baseQueryGetFwdcommitResponse,
    } as QueryGetFwdcommitResponse;
    if (object.fwdcommit !== undefined && object.fwdcommit !== null) {
      message.fwdcommit = Fwdcommit.fromPartial(object.fwdcommit);
    } else {
      message.fwdcommit = undefined;
    }
    return message;
  },
};

const baseQueryAllFwdcommitRequest: object = {};

export const QueryAllFwdcommitRequest = {
  encode(
    message: QueryAllFwdcommitRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllFwdcommitRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllFwdcommitRequest,
    } as QueryAllFwdcommitRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFwdcommitRequest {
    const message = {
      ...baseQueryAllFwdcommitRequest,
    } as QueryAllFwdcommitRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllFwdcommitRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFwdcommitRequest>
  ): QueryAllFwdcommitRequest {
    const message = {
      ...baseQueryAllFwdcommitRequest,
    } as QueryAllFwdcommitRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllFwdcommitResponse: object = {};

export const QueryAllFwdcommitResponse = {
  encode(
    message: QueryAllFwdcommitResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.fwdcommit) {
      Fwdcommit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllFwdcommitResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllFwdcommitResponse,
    } as QueryAllFwdcommitResponse;
    message.fwdcommit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fwdcommit.push(Fwdcommit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFwdcommitResponse {
    const message = {
      ...baseQueryAllFwdcommitResponse,
    } as QueryAllFwdcommitResponse;
    message.fwdcommit = [];
    if (object.fwdcommit !== undefined && object.fwdcommit !== null) {
      for (const e of object.fwdcommit) {
        message.fwdcommit.push(Fwdcommit.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllFwdcommitResponse): unknown {
    const obj: any = {};
    if (message.fwdcommit) {
      obj.fwdcommit = message.fwdcommit.map((e) =>
        e ? Fwdcommit.toJSON(e) : undefined
      );
    } else {
      obj.fwdcommit = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFwdcommitResponse>
  ): QueryAllFwdcommitResponse {
    const message = {
      ...baseQueryAllFwdcommitResponse,
    } as QueryAllFwdcommitResponse;
    message.fwdcommit = [];
    if (object.fwdcommit !== undefined && object.fwdcommit !== null) {
      for (const e of object.fwdcommit) {
        message.fwdcommit.push(Fwdcommit.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Commitment by index. */
  Commitment(
    request: QueryGetCommitmentRequest
  ): Promise<QueryGetCommitmentResponse>;
  /** Queries a list of Commitment items. */
  CommitmentAll(
    request: QueryAllCommitmentRequest
  ): Promise<QueryAllCommitmentResponse>;
  /** Queries a Channel by index. */
  Channel(request: QueryGetChannelRequest): Promise<QueryGetChannelResponse>;
  /** Queries a list of Channel items. */
  ChannelAll(request: QueryAllChannelRequest): Promise<QueryAllChannelResponse>;
  /** Queries a Fwdcommit by index. */
  Fwdcommit(
    request: QueryGetFwdcommitRequest
  ): Promise<QueryGetFwdcommitResponse>;
  /** Queries a list of Fwdcommit items. */
  FwdcommitAll(
    request: QueryAllFwdcommitRequest
  ): Promise<QueryAllFwdcommitResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("channel.channel.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Commitment(
    request: QueryGetCommitmentRequest
  ): Promise<QueryGetCommitmentResponse> {
    const data = QueryGetCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "channel.channel.Query",
      "Commitment",
      data
    );
    return promise.then((data) =>
      QueryGetCommitmentResponse.decode(new Reader(data))
    );
  }

  CommitmentAll(
    request: QueryAllCommitmentRequest
  ): Promise<QueryAllCommitmentResponse> {
    const data = QueryAllCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "channel.channel.Query",
      "CommitmentAll",
      data
    );
    return promise.then((data) =>
      QueryAllCommitmentResponse.decode(new Reader(data))
    );
  }

  Channel(request: QueryGetChannelRequest): Promise<QueryGetChannelResponse> {
    const data = QueryGetChannelRequest.encode(request).finish();
    const promise = this.rpc.request("channel.channel.Query", "Channel", data);
    return promise.then((data) =>
      QueryGetChannelResponse.decode(new Reader(data))
    );
  }

  ChannelAll(
    request: QueryAllChannelRequest
  ): Promise<QueryAllChannelResponse> {
    const data = QueryAllChannelRequest.encode(request).finish();
    const promise = this.rpc.request(
      "channel.channel.Query",
      "ChannelAll",
      data
    );
    return promise.then((data) =>
      QueryAllChannelResponse.decode(new Reader(data))
    );
  }

  Fwdcommit(
    request: QueryGetFwdcommitRequest
  ): Promise<QueryGetFwdcommitResponse> {
    const data = QueryGetFwdcommitRequest.encode(request).finish();
    const promise = this.rpc.request(
      "channel.channel.Query",
      "Fwdcommit",
      data
    );
    return promise.then((data) =>
      QueryGetFwdcommitResponse.decode(new Reader(data))
    );
  }

  FwdcommitAll(
    request: QueryAllFwdcommitRequest
  ): Promise<QueryAllFwdcommitResponse> {
    const data = QueryAllFwdcommitRequest.encode(request).finish();
    const promise = this.rpc.request(
      "channel.channel.Query",
      "FwdcommitAll",
      data
    );
    return promise.then((data) =>
      QueryAllFwdcommitResponse.decode(new Reader(data))
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
