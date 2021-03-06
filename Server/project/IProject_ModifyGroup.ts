import { IBase } from "../../IBase";

export interface IProjectModifyGroup extends IBase {
    group: string,
    roles: Array<string>
}