import { IBase } from "../../IBase";

export interface IAccountingGetBill extends IBase{
    page: number
    sort: number
    category: number
    search: string
}