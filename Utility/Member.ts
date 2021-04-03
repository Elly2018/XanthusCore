import { IGroup } from "../database/element/IGroup";
import { ProjectPermission, IRole } from "../database/element/IRole";

export interface ProjectMember {
    owner: boolean,
    roles: Array<IRole>, // All role this staff have
    groups: Array<IGroup>, // All group this staff join
    permission: ProjectPermission, // Calculate result
}