import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export enum PostType{
    IssuePost = 0,
    IssueComment = 1,

    RequestPost = 10,

    TaskPost = 20,

    Notice = 30,
}

export interface IPost extends IDatabaseBase {
    belong: string,
    title: string,
    color: string,
    posttype : number,
    sender: string,
    content: string,
    deadline: number,
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