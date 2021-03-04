import { IBase } from '../IBase'
import { RoleTemplate } from '../database/element/IRole'

export interface SidebarPeople{
    account_id: string,
    nickname: string,
    roles: RoleTemplate
}

export interface SidebarGroup{
    title: string,
    color: string,
    members: Array<SidebarPeople>
}

export interface ISidebarUpdate extends IBase{
    show: boolean,
    group: Array<SidebarGroup>,
}