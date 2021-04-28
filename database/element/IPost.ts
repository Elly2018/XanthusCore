import { Schema, Document } from 'mongoose'

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

export interface PostSchedule{
    container: string // 
    estimate: number // Estimate working time
}

export interface TaskProperty {
    start: number // Task container start day
    manpower: number
    schedule: Array<PostSchedule> // For Task
}

export interface IssueProperty{
    view: number // View count
    like: Array<string> // Like account
}

export interface IPost{
    _id?:string
    /**
     * Belong to which project\
     * Ignore when notice
     */
     belong: string
     /**
      * Belong to which channel
      * Only work for issue
      */
     channel: string
     /**
      * Belong to which group
      * Ignore when notice
      */
     group: string
     /**
      * Type define behavier
      */
     posttype: number
     /**
      * State of the post\
      * Work for type: Issue, Request, Task
      */
     state: number
 
     /**
      * Targeting object\
      * Request => task\
      * Issue comment => Issue post
      */
     target: string
     /**
      * Post color\
      * Only work for Task container
      */
     color: string
     
     /**
      * Who send the post
      */
     sender: string
     title: string
     content: string
     /**
      * File absolute path
      */
     files: Array<string>
     /**
      * Image name
      */
     image: Array<string>
     
     task?: TaskProperty
     issue?: IssueProperty
}

export class IPostDocs extends Document implements IPost {
    /**
     * Belong to which project\
     * Ignore when notice
     */
    belong: string = ""
    /**
     * Belong to which channel
     * Only work for issue
     */
    channel: string = ""
    /**
     * Belong to which group
     * Ignore when notice
     */
    group: string = ""
    /**
     * Type define behavier
     */
    posttype: number = 0
    /**
     * State of the post\
     * Work for type: Issue, Request, Task
     */
    state: number = 0

    /**
     * Targeting object\
     * Request => task\
     * Issue comment => Issue post
     */
    target: string = ""
    /**
     * Post color\
     * Only work for Task container
     */
    color: string = ""
    
    /**
     * Who send the post
     */
    sender: string = ""
    title: string = ""
    content: string = ""
    /**
     * File absolute path
     */
    files: Array<string> = []
    /**
     * Image name
     */
    image: Array<string> = []
    
    task?: TaskProperty = undefined
    issue?: IssueProperty = undefined
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
    createdate: {type:Date, default: Date.now}
})