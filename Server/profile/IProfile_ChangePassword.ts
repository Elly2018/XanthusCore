import { IBase } from './../../IBase'

export interface IProfileChangePassword extends IBase {
    oldpassword: string,
    newpassword: string,
}