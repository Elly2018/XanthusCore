import { IProjectGroup } from "../../database/IProjectGroup";

export interface INavProjectElement{
    _id: string
    name: string
    owner: boolean
    color: string
    badges: number
}

export interface INavProjectGroupElement{
    group: IProjectGroup,
    projects: Array<INavProjectElement>
}