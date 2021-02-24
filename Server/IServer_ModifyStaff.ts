import { IBase } from "../IBase";
/**
 * Server receiver message\
 * Modify staff info
 * @param staff_id Staff target
 * @param roles Role update
 */
export interface IServerModifyStaff extends IBase {
    staff_id: string,
    roles: Array<string>
}