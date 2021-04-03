import { IPost } from "../../database/element/IPost";
import { IBase } from "../../IBase";

export interface IActivityFinish extends IBase{
    post: IPost
}