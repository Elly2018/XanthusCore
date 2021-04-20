import { IBase } from '../../IBase'
import { IRole } from '../../database/element/IRole'

export interface SidebarPeople{
    account: string,
    nickname: string,
    roles: Array<IRole>
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