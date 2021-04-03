import { IBase } from "../../IBase";
import { IAccounting } from './../../database/element/IAccounting'

export interface IAccountingCreateBill extends IBase{
    bill: IAccounting
}