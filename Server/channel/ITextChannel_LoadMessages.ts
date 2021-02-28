import { IBase } from "../../IBase";

export interface ITextChannelLoadMessage extends IBase{
    channel_id: string,
    lastest_date: number
}