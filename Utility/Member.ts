import { ProjectPermission, IRole, GroupPermission } from "../database/element/IRole";

/**
 * In group position
 */
export interface ProjectGroupMember{
    /**
     * Target group ID
     */
    group: string
    /**
     * Can this staff view this group
     */
    visible: boolean
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
}