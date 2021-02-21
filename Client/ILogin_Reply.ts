import {IBase} from './../IBase'

/**
 * Login account information
 * @param _id Account ID
 * @param username Account username
 * @param class Account class
 * @param servers Join server list
 */
interface IAccount{
    _id: string,
    username: string,
    class: string,
    servers:Array<string>
}

/**
 * Client receiver message\
 * Login reply message
 * @param type 0: Successfully, 1: Failed, 2: Login Already, 3: Account Block, 4:Password Error
 * @param message Login reply message
 * @param account Account information
 */
export interface ILogin_Reply extends IBase{
    type: number,
    message: string,
    account?: IAccount
}