import { IBase } from "../../IBase";

export interface INavCreateProject extends IBase{
    name: string
    budget: number
    startday: number
    sign: number
    initial: number
}