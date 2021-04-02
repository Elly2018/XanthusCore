import { IAccount } from '../database/IAccount'
import { IGroup } from './../database/element/IGroup'

export interface GroupDetail{
    group: IGroup,
    staff: Array<IAccount>,
}