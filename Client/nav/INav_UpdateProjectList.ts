import { IBase } from "../../IBase";

export interface INavProjectElement{
    _id: string
    name: string
    owner: boolean
    color: string
    badges: number
}

export interface INavProjectGroupElement{
    group: string
    projects: Array<INavProjectElement>
}

export interface INavUpdateProjectList extends IBase{
    projects: Array<INavProjectGroupElement>
}