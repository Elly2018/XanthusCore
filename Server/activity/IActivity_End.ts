import { IPost } from "../../database/element/IPost";
import { IBase } from "../../IBase";

export interface IActivityEnd extends IBase{
    post: IPost
}