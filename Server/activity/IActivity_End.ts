import { IBase } from "../../IBase";

export interface IActivityEnd extends IBase{
    activity: string,
    note: string
}