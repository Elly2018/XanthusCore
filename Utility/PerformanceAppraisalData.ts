import { IPost } from "../database/element/IPost";
import { IAccount } from "../database/IAccount";
import { IProject } from "../database/IProject";

export interface PerformanceAppraisalData{
  account: IAccount,
  belong: IProject,
  task: IPost
  time: number
}