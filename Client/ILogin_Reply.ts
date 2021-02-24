import { IBase } from './../IBase'
import { IAccount } from './../database/IAccount'

/**
 * Client receiver message\
 * Login reply message
 * @param type 0: Successfully, 1: Failed, 2: Login Already, 3: Account Block, 4:Password Error
 * @param message Login reply message
 * @param account Account information
 */
export interface ILoginReply extends IBase{
    type: number,
    message: string,
    _id: string,
    account?: IAccount
}