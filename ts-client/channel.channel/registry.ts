import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCloseChannel } from "./types/channel/tx";
import { MsgWithdrawHashlock } from "./types/channel/tx";
import { MsgFund } from "./types/channel/tx";
import { MsgWithdrawTimelock } from "./types/channel/tx";
import { MsgOpenChannel } from "./types/channel/tx";
import { MsgCommitment } from "./types/channel/tx";
import { MsgAcceptfund } from "./types/channel/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/channel.channel.MsgCloseChannel", MsgCloseChannel],
    ["/channel.channel.MsgWithdrawHashlock", MsgWithdrawHashlock],
    ["/channel.channel.MsgFund", MsgFund],
    ["/channel.channel.MsgWithdrawTimelock", MsgWithdrawTimelock],
    ["/channel.channel.MsgOpenChannel", MsgOpenChannel],
    ["/channel.channel.MsgCommitment", MsgCommitment],
    ["/channel.channel.MsgAcceptfund", MsgAcceptfund],
    
];

export { msgTypes }