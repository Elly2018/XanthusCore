import { RoleTemplate } from "../database/element/IRole";
import { IBase } from "../IBase";

export interface IProjectModifyRole extends IBase {
    role_id: string,
    name: string,
    content: RoleTemplate,
}