import { IBase } from "../IBase";

export interface IProjectModifyStaff extends IBase {
    account_id: string,
    roles: Array<string>,
}