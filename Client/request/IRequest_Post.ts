import { IBase } from "../../IBase";
import { IAccount } from "../../database/IAccount";

export interface IRequestPost extends IBase {
    id: string // Request post id
    account: IAccount
    title: string
    group: string
    state: number
    deadline: number
    createdate: number
}