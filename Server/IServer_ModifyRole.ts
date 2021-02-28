import { RoleTemplate } from "../database/element/IRole";
import { IBase } from "../IBase";

export interface IServerModifyRole extends IBase {
    role: Array<RoleTemplate>
}