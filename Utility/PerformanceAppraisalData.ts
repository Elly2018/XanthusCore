import { IPost } from "../database/element/IPost";
import { IAccount } from "../database/IAccount";
import { IProject } from "../database/IProject";

export interface PerformanceAppraisalData{
  account: IAccount,
  finishRate: number
  quality: number
  time: number
}