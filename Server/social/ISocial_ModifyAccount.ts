import { IBase } from "../../IBase";

export interface ISocialModifyAccount extends IBase{
    accountid: string
    username: string
    password: string
}