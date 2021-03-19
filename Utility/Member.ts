import { ProjectPermission, GroupPermission, IRole } from "../database/element/IRole";

export interface ProjectMember {
    owner: boolean,
    roles: Array<IRole>,
    groups: Array<GroupRolePermission>,
    permission: ProjectPermission,
}

export interface GroupRolePermission{
    group: string,
    permission: GroupPermission
}