import { IBase } from "../IBase";

/**
 * Server receiver message\
 * Add server request
 * @param code Server invite code
 */
export interface INavAddServer extends IBase{
    code: string
}