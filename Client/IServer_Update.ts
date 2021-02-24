import { IBase } from "../IBase";
import { IServer } from './../database/IServer'
/**
 * Client receiver message\
 * User request server information
 * @param server Server element
 */
export interface IServerUpdate extends IBase {
    server: IServer
}