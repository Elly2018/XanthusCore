import { IPost } from "../database/element/IPost";

export interface CommentElement{
    top: IPost,
    replies: Array<IPost>
}