import { IBase } from './IBase'

export interface IBaseReply extends IBase{
    successfully: number,
    message: string
}