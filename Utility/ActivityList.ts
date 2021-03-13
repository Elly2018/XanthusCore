import { IActivity } from './../database/element/IActivity'

export interface ProjectLink{
    id: string,
    name: string,
    color: string,
}

export interface AccountLink{
    id: string,
    name: string,
    color: string,
}

export interface ActivityList{
    target: IActivity,
    deadline?: number,
    project: ProjectLink,
    member: Array<AccountLink>,
}