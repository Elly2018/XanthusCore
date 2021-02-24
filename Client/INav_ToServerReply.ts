import { IBase } from "../IBase";
import { IServer } from "../database/IServer";

/**
 * Client receiver message\
 * Get server information
 * @param server Server info
 */
export interface INavToServerReply extends IBase{
    server: IServer
}