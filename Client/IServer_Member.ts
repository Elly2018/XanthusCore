import { RolePermission } from "../database/element/IRole";
import { IBase } from "../IBase";

export interface ServerMember {
    roles: Array<string>,
    owner: boolean,
    permission: RolePermission
}

export interface IServerMember extends IBase {
    member: ServerMember
}