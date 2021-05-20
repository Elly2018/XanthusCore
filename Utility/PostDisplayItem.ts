import { IPost } from "../database/element/IPost";
import { IAccount } from "../database/IAccount";

export interface NoticeDisplayItem{
    post: IPost
    account: IAccount
}

export interface LeaveDisplayItem{
    post: IPost
    account: IAccount
}