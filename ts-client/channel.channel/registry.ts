import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgOpenChannel } from "./types/channel/tx";
import { MsgFund } from "./types/channel/tx";
import { MsgCommitment } from "./types/channel/tx";
import { MsgWithdrawHashlock } from "./types/channel/tx";
import { MsgCloseChannel } from "./types/channel/tx";
import { MsgAcceptfund } from "./types/channel/tx";
import { MsgSendercommit } from "./types/channel/tx";
import { MsgWithdrawTimelock } from "./types/channel/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/channel.channel.MsgOpenChannel", MsgOpenChannel],
    ["/channel.channel.MsgFund", MsgFund],
    ["/channel.channel.MsgCommitment", MsgCommitment],
    ["/channel.channel.MsgWithdrawHashlock", MsgWithdrawHashlock],
    ["/channel.channel.MsgCloseChannel", MsgCloseChannel],
    ["/channel.channel.MsgAcceptfund", MsgAcceptfund],
    ["/channel.channel.MsgSendercommit", MsgSendercommit],
    ["/channel.channel.MsgWithdrawTimelock", MsgWithdrawTimelock],
    
];

export { msgTypes }