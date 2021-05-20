import { Schema, Document } from 'mongoose'
import { IProject } from './../IProject'
import { IChannel } from './../IChannel'
import { IAccount } from './../IAccount'
import { IGroup } from './IGroup'

/**
 * All post type should in here\
 * Use field: {@link IPostDocs.posttype}
 */
export enum PostType{
    IssuePost = 0,
    IssueComment = 1,

    RequestPost = 10,
    RequestConfirm = 11,
    RequestReject = 12,

    TaskPost = 20,
    TaskContainerPost = 21,

    Notice = 30,

    WorkPost = 40,
    WorkFinish = 41,

    Leave = 50,
}

/**
 * State enum for Issue type\
 * When post type is: {@link PostType.IssuePost}\
 * Use field: {@link IPostDocs.state}
 */
export enum IssueState{
    All = 0,
    Open = 1,
    Closed = 2,
    Solved = 3
}

/**
 * State enum for Issue type\
 * When post type is: {@link PostType.RequestPost}\
 * Use field: {@link IPostDocs.state}
 */
export enum RequestState{
    All = 0,
    Normal = 1,
    Accepted = 2,
    Rejected = 3
}

/**
 * State enum for Issue type\
 * When post type is: {@link PostType.TaskPost} or {@link PostType.TaskContainerPost}\
 * Use field: {@link IPostDocs.state}
 */
export enum TaskState{
    All = 0,
    Active = 1,
    Finished = 2,
    Uninitiated = 3,
}

/**
 * State enum for Issue type\
 * When post type is: {@link PostType.Leave}\
 * Use field: {@link IPostDocs.state}
 */
export enum LeaveState{
    All = 0,
    Sign = 1,
    Unsign = 2,
}

/**
 * Task schedule info
 */
export class PostSchedule {
    /**
     * Targeting which container
     */
    container: string = ""
    /**
     * Estimate working time
     */
    estimate: number = 0
}

/**
 * Task addition information
 */
export class TaskProperty {
    /**
     * Task container start day
     */
    start: number = 0
    /**
     * How many people need to finish this
     */
    manpower: number = 0
    /**
     * Only work for task type
     */
    schedule: Array<PostSchedule> = []
}

/**
 * Issue addition information
 */
export class IssueProperty{
    /**
     * View count
     */
    view: number = 0
    /**
     * Like account IDs
     */
    like: Array<string> = []
}

/**
 * Leave addition information
 */
export class LeaveProperty{
    /**
     * Who sign up the leave
     */
    account: string = ""
    /**
     * Start time
     */
    start: number = 0
    /**
     * End time
     */
    end: number = 0
}

/**
 * Post data pack
 */
export interface IPost{
    _id?:string
     belong: string
     channel: string
     group: string
     posttype: number
     state: number
 
     target: string
     color: string
     
     sender: string
     title: string
     content: string
     files: Array<string>
     image: Array<string>
     
     task?: TaskProperty
     issue?: IssueProperty
     leave?: LeaveProperty

     createdate?: number
}

/**
 * Post data pack with docs
 */
export class IPostDocs extends Document implements IPost {
    /**
     * Belong to which {@link IProject}
     */
    belong: string = ""
    /**
     * Belong to which {@link IChannel}\
     */
    channel: string = ""
    /**
     * Belong to which {@link IGroup}
     */
    group: string = ""
    /**
     * Type define behavier {@link PostType}
     */
    posttype: number = 0
    /**
     * State of the post
     */
    state: number = 0

    /**
     * Targeting object\
     * {@link PostType.RequestPost} => {@link PostType.TaskPost}\
     * {@link PostType.IssueComment} => {@link PostType.IssuePost}
     */
    target: string = ""
    /**
     * Post color
     */
    color: string = ""
    /**
     * Which {@link IAccount} send the post
     */
    sender: string = ""
    /**
     * Post title
     */
    title: string = ""
    /**
     * Post content
     */
    content: string = ""
    /**
     * File name list\
     * For search at: media/post/[ID]/file/[name]
     */
    files: Array<string> = []
    /**
     * Image name list\
     * For search at: media/post/[ID]/image/[name]
     */
    image: Array<string> = []
    
    /**
     * Addition task property
     */
    task?: TaskProperty = undefined
    /**
     * Addition issue property
     */
    issue?: IssueProperty = undefined
    /**
     * Addition leave property
     */
    leave?: LeaveProperty = undefined
    createdate?: number
}

export const SPost:Schema = new Schema({
    belong: String,
    channel: String,
    group: String,
    posttype: Number,
    state: Number,

    target: String,
    color: String,

    sender: { type: Schema.Types.ObjectId, ref: 'account' },
    title: String,
    content: String,
    files: [String],
    image: [String],
    task:{
        start: Number,
        manpower: Number,
        schedule: [
            {
                container: String,
                estimate: Number
            }
        ]
    },
    issue:{
        view: Number,
        like: [String],
    },
    leave:{
        account: String,
        start: Number,
        end: Number
    },
    createdate: {type:Date, default: Date.now}
})