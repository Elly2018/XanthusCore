import { Schema, Document } from 'mongoose'

/**
 * Project permission
 */
export class ProjectPermission{
    /**
     * Can modify everything in the project
     */
    projectModify: boolean = false
    /**
     * Can modify each channel setting
     */
    channelModify: boolean = false
    /**
     * Can modify file channel
     */
    fileModify: boolean = false
    /**
     * Can view bill channel
     */
    billVisibility: boolean = false
    /**
     * Can submit bill and check record detail
     */
    billModify: boolean = false
    /**
     * Can view graph channel
     */
    graphVisibility: boolean = false
    /**
     * Can view outsource channel
     */
    outsourceVisibility: boolean = false
    /**
     * Can submit bill and check record detail
     */
    outsourceModify: boolean = false
    /**
     * Can modify schedule
     */
    taskModify: boolean = false
    /**
     * Can rating and modify request
     */
    requestModify: boolean = false
}

/**
 * Group permission
 */
export class GroupPermission{
    textModify: boolean = false
    issueModify: boolean = false 
    taskSubmit: boolean = false
}

/**
 * Role permission structure
 */
export class RolePermission{
    /**
     * Project permission
     */
    project: ProjectPermission = new ProjectPermission()
    /**
     * Group permission
     */
    group: GroupPermission = new GroupPermission()
}

export interface IRole{
    _id?: string
    name: string
    project: string
    color: string
    permission: RolePermission
}

/**
 * Project member role
 */
export class IRoleDocs extends Document implements IRole{
    name: string = ""
    project: string = ""
    color: string = ""
    permission: RolePermission = new RolePermission()
}

export const SRole:Schema = new Schema({
    name: String,
    project: String,
    color: String,
    permission: {
        project: {
            projectModify: Boolean,
            channelModify: Boolean,
            billVisibility: Boolean,
            billModify: Boolean,
            graphVisibility: Boolean,
            taskModify: Boolean,
            outsourceVisibility: Boolean,
            outsourceModify: Boolean,
            requestModify: Boolean,
        },
        group: {
            textModify: Boolean,
            fileModify: Boolean,
            issueModify: Boolean
        }
    },
    createdate: {type: Date,default: Date.now}
})