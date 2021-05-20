import { IGroup } from "../database/element/IGroup";
import { IRole } from "../database/element/IRole";
import { IAccount } from "../database/IAccount";
import { IProject, IProjectElement } from "../database/IProject";
import { IProjectGroup } from "../database/IProjectGroup";

/**
 * Project base info
 */
export interface ProjectHeader{
    name: string
    secondary: string
    description: string
    budget: number
    startday: number
    endday: number
    sign: number
    initial: number
}

/**
 * Modify group pack
 */
export interface ProjectGroupPack{
    group: IGroup
    role: Array<string>
}

export interface ProjectStaffPack{
    staff: IAccount
    role: Array<string>
}

/**
 * For network modify
 */
export interface ProjectGroupHeader{
    /**
     * Create new group
     */
    create: Array<IGroup>
    /**
     * Modify pack with role change or group change
     */
    modify: Array<ProjectGroupPack>
    /**
     * Delete group
     */
    delete: Array<string>
}

/**
 * For network modify
 */
export interface ProjectRoleHeader{
    /**
     * Create new role
     */
    create: Array<IRole>
    /**
     * Modify role list
     */
    modify: Array<IRole>
    /**
     * Delete role ID
     */
    delete: Array<string>
}

export interface ProjectStaffHeader{
    /**
     * Staff that modify roles
     */
    modify: Array<IProjectElement>
    /**
     * Remove staff list
     */
    delete: Array<string>
}

export interface ProjectCodeHeader {
    /**
     * Expiredata array
     */
    create: Array<number>
    /**
     * Code ID
     */
    delete: Array<string>
}

export interface NavProject {
    group: IProjectGroup
    projects: Array<IProject>
  }