import { IAccount } from '../../database/IAccount'
import { IBaseReply } from '../../IBaseReply';

export interface ISocialData extends IBaseReply{
    accounts: Array<IAccount>
    page: number
    pageLength: number
}