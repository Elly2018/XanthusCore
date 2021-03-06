import { IBase } from "../../IBase";

export interface ITextLoadMessage extends IBase{
    channel: string,
    lastest: number
}