import {IBase} from './../IBase'

/**
 * Client receiver message\
 * Account block message
 * @param reason Reason to getting block
 */
export interface ILoginForceBlock extends IBase {
    reason: string
}