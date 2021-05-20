import { ProjectPermission, IRole, GroupPermission } from "../database/element/IRole";
import { IGroup } from '../database/element/IGroup'
import { IAccount } from "../database/IAccount";

/**
 * In group position
 */
export interface ProjectGroupMember{
    /**
     * Target group ID
     */
    group: IGroup
    /**
     * In group permission
     */
    permission: GroupPermission
}

/**
 * Project position
 */
export interface ProjectMember {
    /**
     * Is this staff owner
     */
    owner: boolean,
    /**
     * All role this staff have
     */
    roles: Array<IRole>
    /**
     * All group member position
     */
    groups: Array<ProjectGroupMember>
    /**
     * Project position
     */
    permission: ProjectPermission
    /**
     * Member target\
     * undefine: self\
     * have value: point to other
     */
    target?: IAccount
}