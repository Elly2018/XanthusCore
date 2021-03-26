import { IGroup } from "../database/element/IGroup";
import { IPost } from "../database/element/IPost";
import { IAccount } from "../database/IAccount";
import { IProject } from "../database/IProject";

export interface RequestPostTitle{
    post: IPost
    sender: IAccount
    target: IPost
    group: IGroup
    belong: IProject
    files: Array<string>
}

export interface IssuePostTitle{
    post: IPost
    sender: IAccount
    belong: IProject
}

export interface IssueComment{
    post: IPost,
    sender: IAccount,
    belong: IProject,
    target: IPost,
}

export interface NoticePostTitle{
    post: IPost,
    sender: IAccount,
}

export interface TaskPostTitle{
    post: IPost
    sender: IAccount
    belong: IGroup
    files: Array<string>
}