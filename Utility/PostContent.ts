import { IGroup } from "../database/element/IGroup";
import { IPost, PostType } from "../database/element/IPost";
import { IAccount } from "../database/IAccount";
import { IProject } from "../database/IProject";

/**
 * 
 * 
 * There are all kinds of post out there
 * Here is the type definitions
 * {@link PostType}
 * 
 * When we deal with different type of post
 * The structure should also be different
 * 
*/

/**
 * Request post data pack
 */
export interface RequestPostContent{
    request: IPost // Request post
    sender: IAccount
    task: IPost // Target
    group: IGroup // Which group is sending

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
}