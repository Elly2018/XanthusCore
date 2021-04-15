import mongoose from "mongoose";

/**
 * Project permission
 */
export interface ProjectPermission{
    /**
     * Can modify everything in the project
     */
    projectModify: boolean
    /**
     * Can modify each channel setting
     */
    channelModify: boolean
    /**
     * Can modify file channel
     */
    fileModify: boolean
    /**
     * Can view bill channel
     */
    billVisibility: boolean
    /**
     * Can submit bill and check record detail
     */
    billModify: boolean
    /**
     * Can view graph channel
     */
    graphVisibility: boolean
    /**
     * Can view outsource channel
     */
    outsourceVisibility: boolean
    /**
     * Can submit bill and check record detail
     */
    outsourceModify: boolean
    /**
     * Can modify schedule
     */
    taskModify: boolean
    /**
     * Can rating and modify request
     */
    requestModify: boolean
}

/**
 * Group permission
 */
export interface GroupPermission{
    textModify: boolean,
    issueModify: boolean,
    taskSubmit: boolean,
}

/**
 * Role permission structure
 */
export interface RolePermission{
    /**
     * Project permission
     */
    project: ProjectPermission,
    /**
     * Group permission
     */
    group: GroupPermission
}

/**
 * Project member role
 */
export interface IRole extends mongoose.Document {
    name: string,
    color: string,
    permission: RolePermission,
    project: string,
    sidebar: boolean,
    dynamic: boolean,
}

export const SRole:mongoose.Schema = new mongoose.Schema({
    name: String,
    project: String,
    sidebar: String,
    color: String,
    dynamic: Boolean,
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