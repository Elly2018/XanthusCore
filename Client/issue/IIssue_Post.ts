import { IAccount } from "../../database";

export interface IIssuePost{
  id: string // Issue post id
  account: IAccount
  state: number
  title: string
  view: number
  like: number
  createdate: number
}