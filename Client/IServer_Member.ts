import { RolePermission } from "../database/element/IRole";
import { IBase } from "../IBase";

export interface ServerMember {
    owner: boolean,
    roles: Array<string>,
    groups: Array<string>,
    permission: RolePermission,
}

export interface IServerMember extends IBase {
    member: ServerMember
}