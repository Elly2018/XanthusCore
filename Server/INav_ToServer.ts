import { IBase } from "../IBase";

/**
 * Server receiver message\
 * User to server
 * @param server_id server target id
 */
export interface INavToServer extends IBase{
    server_id: string
}