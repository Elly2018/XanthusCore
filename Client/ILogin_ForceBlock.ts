import {IBase} from './../IBase'

/**
 * Client receiver message\
 * Account block message
 * @param reason Reason to getting block
 */
export interface ILogin_ForceBlock extends IBase {
    reason: string
}