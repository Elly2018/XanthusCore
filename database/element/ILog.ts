import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export enum LogType{
    Login = 0,
    Logout = 1,

    CreateProject = 10,
    ModifyProject = 11,
    DeleteProject = 12,

    AccountCreate = 20,
    AccountModify = 21,
    AccountDelete = 22,

    StaffJoinProject = 30,
    StaffRoleModify = 31,
    StaffLeaveProject = 32,

    RoleCreate = 40,
    RoleModify = 41,
    RoleDelete = 42,

    GroupCreate = 50,
    GroupModify = 51,
    GroupRoleModify = 52,
    GroupDelete = 53,

    TaskCreate = 60,
    TaskDelete = 61,
    TaskStart = 62,
    TaskEnd = 63,
    TaskFinish = 64,

    RequestCreate = 70,
    RequestModify = 71,
    RequestAccept = 72,
    RequestReject = 73,
    RequestDelete = 74,
}

export interface ILog extends IDatabaseBase{
    sender: string,
    target: Array<string>,
    type: number,
    tag: string,
    message: string,
    color: string,
}

export const SLog:mongoose.Schema = new mongoose.Schema({
    sender: String,
    target: String,
    type: Number,
    tag: String,
    message: String,
    color: String,
    createdate: {type:Date, default: Date.now}
})