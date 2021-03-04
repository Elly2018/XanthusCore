import { IBase } from "../IBase";

export interface IProjectModifyGroup extends IBase {
    group_id: string,
    roles: Array<string>
}