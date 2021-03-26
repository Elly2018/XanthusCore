import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export enum PostType{
    IssuePost = 0,
    IssueComment = 1,

    RequestPost = 10,

    TaskPost = 20,

    Notice = 30,
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
}

export interface IPost extends IDatabaseBase {
    belong: string
    group: string
    state: number
    target: string
    title: string
    color: string
    posttype: number
    sender: string
    content: string
    files: Array<string>
    view: number
    like: Array<string>
    deadline: number
}

export const SPost:mongoose.Schema = new mongoose.Schema({
    belong: String,
    title: String,
    Color: String,
    posttype : Number,
    sender: String,
    content: String,
    deadline: Date,
    createdate: {type:Date, default: Date.now}
})