import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export enum PostType{
    IssuePost = 0,
    IssueComment = 1,

    RequestPost = 10,
    RequestConfirm = 11,
    RequestReject = 12,

    TaskPost = 20,

    Notice = 30,

    WorkPost = 40,
}

export enum IssueState{
    All = 0,
    Open = 1,
    Closed = 2,
    Solved = 3
}

export enum RequestState{
    All = 0,
    Normal = 1,
    Accepted = 2,
    Rejected = 3
}

export enum TaskState{
    All = 0,
    Active = 1,
    Finished = 2,
    Uninitiated = 3,
}

export interface ScheduleRequirement{
    targetTask: string
    phase: number
}

export interface PostSchedule{
    group: string
    startday: number
    endday: number
    requirement: Array<ScheduleRequirement>
}

export interface IPost extends IDatabaseBase {
    belong: string // Project ID
    group: string // Group ID, for request
    state: number
    target: string // Target, for issue comment and request
    color: string
    title: string
    posttype: number
    sender: string // Account ID
    content: string
    files: Array<string>
    schedule: Array<PostSchedule> // For Task
    view: number // For issue
    like: Array<string> // For issue
}

export const SPost:mongoose.Schema = new mongoose.Schema({
    belong: String,
    group: String,
    state: Number,
    target: String,
    color: String,
    title: String,
    posttype: Number,
    sender: String,
    content: String,
    files: [String],
    schedule: [
        {
            group: String,
            startday: Date,
            endday: Date,
            requirement:[
                {
                    targetTask: String,
                    phase: Number
                }
            ]
        }   
    ],
    view: Number,
    like: [String],
    createdate: {type:Date, default: Date.now}
})