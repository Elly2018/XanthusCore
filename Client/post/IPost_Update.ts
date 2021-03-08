import { IBase } from "../../IBase";
import { PostHeader } from "./IPost_ListUpdate"

export interface Comment {
    comment: PostHeader,
    content: string
}

export interface IPostUpdate extends IBase {
    content: string,
    comments: Array<Comment>
}