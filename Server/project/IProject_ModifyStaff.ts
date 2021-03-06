import { IBase } from "../../IBase";

export interface IProjectModifyStaff extends IBase {
    account: string,
    roles: Array<string>,
}