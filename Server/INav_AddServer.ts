import { IBase } from "../IBase";

/**
 * Server receiver message\
 * Add server request
 * @param code Server invite code
 */
export interface INav_AddServer extends IBase{
    code: string
}