import { IProjectGroup } from "../database/IProjectGroup";

export interface INavCreateProject{
    name: string
    budget: number
    startday: number
    sign: number
    initial: number
    group: string
}