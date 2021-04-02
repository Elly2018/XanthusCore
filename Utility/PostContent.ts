import { IGroup } from "../database/element/IGroup";
import { IPost } from "../database/element/IPost";
import { IAccount } from "../database/IAccount";
import { IProject } from "../database/IProject";

export interface RequestPostContent{
    request: IPost // Request post
    sender: IAccount
    task: IPost // Target
    group: IGroup // Which group is sending
    belong: IProject // Which project
    files: Array<string> // Contain files

    accept?: IPost // Accpet post
    reject?: IPost // Reject post
}

export interface IssuePostContent{
    issue: IPost // Issue post
    sender: IAccount
    project: IProject // Which project
}

export interface IssueCommentContent{
    comment: IPost, // Comment
    sender: IAccount,
    project: IProject, // Which project
    issue: IPost, // Target
}

export interface NoticePostContent{
    notice: IPost, // Notice post
    sender: IAccount,
}

export interface TaskPostContent{
    task: IPost // Task post
    sender: IAccount
    belong: IGroup // Which project
    files: Array<string> // Contain files
}