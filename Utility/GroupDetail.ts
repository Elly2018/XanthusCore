import { IGroup } from './../database/element/IGroup'
import { IRole } from './../database/element/IRole'

export interface GroupDetail{
    group: IGroup,
    role: Array<IRole>,
    count: number,
}