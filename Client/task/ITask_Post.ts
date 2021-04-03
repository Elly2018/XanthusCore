import { IBase } from "../../IBase";
import { IAccount } from "../../database/IAccount";

export interface ITaskPost extends IBase {
    id: string // Request post id
    account: IAccount // sender
    title: string
    state: number
    startday: number
    deadline: number
    createdate: number
}