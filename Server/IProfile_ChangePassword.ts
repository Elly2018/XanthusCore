import { IBase } from './../IBase'

export interface IProfileChangePassword extends IBase {
    old_password: string,
    new_password: string,
}