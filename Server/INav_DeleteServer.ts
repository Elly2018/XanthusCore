import { IBase } from "../IBase";

/**
 * Server receiver message\
 * Delete server request
 * @param server_id Server target
 */
export interface INavDeleteServer extends IBase{
    server_id: string
}