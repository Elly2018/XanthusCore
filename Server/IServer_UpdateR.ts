import { IBase } from "../IBase";
/**
 * Server receiver message\
 * User request server information
 * @param server_id Server id
 */
export interface IServerUpdateR extends IBase {
    server_id: string
}