import { IBase } from "../IBase";

/**
 * Server receiver message\
 * Update badges request
 * @param servers server id list
 */
export interface INavUpdateBadgesR extends IBase{
    servers: Array<string>
}