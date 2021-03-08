import { IBase } from "../../IBase";

export interface PostHeader{
    _id?: string,
    title: string,
    sender: string,
    deadline: number,
    date: number,
    liked: boolean,
    like: number,
    viewed: boolean,
    view: number,
}

export interface IPostListUpdate extends IBase {
    posts: Array<PostHeader>
}