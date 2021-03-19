import { IAccount } from './../database/IAccount'
import { IRole } from './../database/element/IRole'

export interface StaffDetail{
    staff: IAccount,
    role: Array<IRole>,
}