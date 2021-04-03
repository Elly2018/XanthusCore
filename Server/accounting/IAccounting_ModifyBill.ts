import { IBase } from "../../IBase";
import { IAccounting } from './../../database/element/IAccounting'

export interface IAccountingModifyBill extends IBase{
    billID: string
    bill: IAccounting
}