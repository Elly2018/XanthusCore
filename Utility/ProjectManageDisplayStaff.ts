import { IAccount } from './../database/IAccount'

export interface ProjectManageDisplayStaff{
    accounts: IAccount,
    joindate: number,
    task: number,
    finish: number,
    worktime: number,
}