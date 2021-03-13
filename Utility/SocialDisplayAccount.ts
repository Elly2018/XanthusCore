import { IAccount } from './../database/IAccount'

export interface SocialDisplayAccount{
    accounts: IAccount,
    online: boolean,
}

export interface SocialDisplayProjects{
    id: string,
    name: string,
    joindate: number,
    role: string,
    worktime: number,
    task: number,
}