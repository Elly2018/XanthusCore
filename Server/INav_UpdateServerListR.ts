import { IBase } from "../IBase";

/**
 * Server receiver message\
 * Update server list request
 * @param account Account ID
 */
export interface INavUpdateServerListR extends IBase{
    account: string
}