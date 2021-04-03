import { IPost } from "../../database/element/IPost";
import { IBaseReply } from "../../IBaseReply";

export interface INoticeGetPostReply extends IBaseReply{
  post: Array<IPost>
  page: number
  pageLength: number
}