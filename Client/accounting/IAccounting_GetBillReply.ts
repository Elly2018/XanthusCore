import { IAccounting } from '../../database/element/IAccounting'
import { IBaseReply } from '../../IBaseReply';

export interface IAccountingGetBillReply extends IBaseReply{
    accounts: Array<IAccounting>
    page: number
    pageLength: number
}