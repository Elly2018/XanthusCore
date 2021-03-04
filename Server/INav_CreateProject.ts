import { IBase } from "../IBase";
import { IProjectTemp } from './../database/IProject'

export interface INavTemplate{
    lobby: Array<IProjectTemp>,
    group: Array<IProjectTemp>
}

export interface INavCreateProject extends IBase{
    name: string,
    template: INavTemplate
}