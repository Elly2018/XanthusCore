import { RolePermission } from "../../database/element/IRole";
import { IBase } from "../../IBase";

export interface ProjectMember {
    owner: boolean,
    roles: Array<string>,
    groups: Array<string>,
    permission: RolePermission,
}

export interface IProjectMember extends IBase {
    member: ProjectMember
}