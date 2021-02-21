import {IBase} from '../IBase'

/**
 * Client receiver message\
 * Creating server reply
 * @param successfully 0: Successfully, 1: failed
 * @param reason Failed message
 */
export interface INav_CreateServerReply extends IBase{
    successfully: number,
    reason: string,
}