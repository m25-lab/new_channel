import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgWithdrawTimelock } from "./types/channel/tx";
import { MsgCommitment } from "./types/channel/tx";
import { MsgCloseChannel } from "./types/channel/tx";
import { MsgWithdrawHashlock } from "./types/channel/tx";
import { MsgOpenChannel } from "./types/channel/tx";
import { MsgFund } from "./types/channel/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/channel.channel.MsgWithdrawTimelock", MsgWithdrawTimelock],
    ["/channel.channel.MsgCommitment", MsgCommitment],
    ["/channel.channel.MsgCloseChannel", MsgCloseChannel],
    ["/channel.channel.MsgWithdrawHashlock", MsgWithdrawHashlock],
    ["/channel.channel.MsgOpenChannel", MsgOpenChannel],
    ["/channel.channel.MsgFund", MsgFund],
    
];

export { msgTypes }