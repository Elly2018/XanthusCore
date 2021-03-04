import { IBase } from "../IBase";

export interface INavProjectElement{
    _id: string,
    name: string,
    owner: boolean,
    color: string,
}

export interface INavUpdateProjectList extends IBase{
    projects: Array<INavProjectElement>
}