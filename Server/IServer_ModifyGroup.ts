import { IBase } from "../IBase";
/**
 * Server receiver message\
 * Modify group info
 * @param group_id group target
 * @param roles Role update
 */
export interface IServerModifyGroup extends IBase {
    group_id: string,
    roles: Array<string>
}