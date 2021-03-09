import { RolePermission } from "../database/element/IRole";

export interface ProjectMember {
    owner: boolean,
    roles: Array<string>,
    groups: Array<string>,
    permission: RolePermission,
}