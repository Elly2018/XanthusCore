import { IBaseReply } from './../../IBaseReply'
import { IAccount } from './../../database/IAccount'

export interface ILoginReply extends IBaseReply{
    account?: IAccount
}