import {IBase} from './../IBase'

/**
 * Client receiver message\
 * Account force logout
 * @param reason Reason to getting block
 */
export interface ILogin_ForceLogout extends IBase{
    reason: string
}