import { IBase } from "../IBase";
import { IAccount } from '../database/IAccount'

/**
 * Client receiver message\
 * Update user request
 * @param account Update account
 */
export interface INavUpdateUser extends IBase{
    account : IAccount
}