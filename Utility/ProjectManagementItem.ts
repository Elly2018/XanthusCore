import { IAccount } from "../database/IAccount";
import { IProject } from "../database/IProject";
import { IGroup } from './../database/element/IGroup'

/**
 * Project management channel display project item
 */
export interface ProjectManagementItem{
    /**
     * Project object
     */
    project: IProject
    /**
     * Owner info
     */
    owner: IAccount
}

/**
 * Project management staff detail item
 */
export interface ProjectManageDisplayStaff{
    /**
     * Target staff
     */
    accounts: IAccount
    /**
     * When does the staff join the project
     */
    joindate: number
    /**
     * How many task does the staff done
     */
    task: number
    /**
     * Average finish rate
     */
    finish: number
    /**
     * Average quality rate
     */
    quality: number
    /**
     * Total work time (sum for every task time)
     */
    worktime: number
}

/**
 * Project management group detail item
 */
export interface ProjectManageDisplayGroup{
    /**
     * Target group
     */
    group: IGroup,
    /**
     * Staff list
     */
    staffs: Array<IAccount>
    /**
     * Total task for this group
     */
    task: number
}