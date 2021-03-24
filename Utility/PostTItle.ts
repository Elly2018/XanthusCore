import { IGroup } from "../database/element/IGroup";
import { IPost } from "../database/element/IPost";
import { IAccount } from "../database/IAccount";
import { IProject } from "../database/IProject";

export interface RequestPostTitle{
    post: IPost,
    sender: IAccount,
    target: IPost,
    group: IGroup,
    belong: IProject,
}

export interface IssuePostTitle{
    post: IPost,
    sender: IAccount,
    belong: IProject,
}

export interface TaskPostTitle{
    post: IPost,
    sender: IAccount,
    belong: IGroup,
}