import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export interface ProjectPermission{
    projectModify: boolean,
    channelModify: boolean,
    fileModify: boolean,
    billVisibility: boolean,
    billModify: boolean,
    graphVisibility: boolean,
    taskModify: boolean,
    requestModify: boolean,
}

export interface GroupPermission{
    textModify: boolean,
    issueModify: boolean,
    taskSubmit: boolean,
}

export interface RolePermission{
    project: ProjectPermission,
    channel: GroupPermission
}

export interface RoleTemplate {
    name: string,
    color: string,
    permission: RolePermission,
}

export interface IRole extends RoleTemplate, IDatabaseBase{
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
            requestModify: Boolean,
        },
        channel: {
            textModify: Boolean,
            fileModify: Boolean,
            issueModify: Boolean
        }
    },
    createdate: {type: Date,default: Date.now}
})