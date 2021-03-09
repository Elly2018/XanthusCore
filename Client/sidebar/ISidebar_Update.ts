import { IBase } from '../../IBase'
import { RoleTemplate } from '../../database/element/IRole'

export interface SidebarRole{
    id: string,
    role: RoleTemplate,
}

export interface SidebarPeople{
    account: string,
    nickname: string,
    roles: Array<SidebarRole>
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