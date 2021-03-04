import { IBase } from "../IBase";
import { IAccount } from '../database/IAccount'

export interface INavUpdateUser extends IBase{
    account : IAccount
}