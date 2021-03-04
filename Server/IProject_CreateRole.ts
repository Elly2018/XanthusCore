import { RoleTemplate } from "../database/element/IRole";
import { IBase } from "../IBase";

export interface IProjectCreateRole extends IBase {
    name: string,
    content: RoleTemplate
}