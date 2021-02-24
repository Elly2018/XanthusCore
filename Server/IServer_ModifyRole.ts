import { IBase } from "../IBase";
import { IRole } from './../database/element/IRole'
/**
 * Server receiver message\
 * Modify role info
 * @param role_id Role target
 * @param info Change status
 */
export interface IServerModifyRole extends IBase {
    role_id: string,
    info: IRole
}