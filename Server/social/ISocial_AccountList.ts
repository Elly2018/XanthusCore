import { IBase } from "../../IBase";

export interface ISocialAccountList extends IBase{
    page: number
    sort: number
    search: string
}