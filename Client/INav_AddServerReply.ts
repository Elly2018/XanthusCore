import {IBase} from '../IBase'

/**
 * Client receiver message\
 * Adding server reply
 * @param successfully 0: Successfully, 1: failed
 * @param reason Failed message
 */
export interface INavAddServerReply extends IBase{
    successfully: number,
    reason: string,
}