import { IBase } from './../IBase'

export interface IProfileChangeUsername extends IBase{
    new_username: string,
    password:string,
}