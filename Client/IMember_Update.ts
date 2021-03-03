import { IBase } from './../IBase'
import { RoleTemplate } from './../database/element/IRole'

export interface MemberPeople{
    account_id: string,
    nickname: string,
    roles: RoleTemplate
}

export interface MemberGroup{
    title: string,
    color: string,
    members: Array<MemberPeople>
}

export interface IMemberUpdate extends IBase{
    show: boolean,
    group: Array<MemberGroup>,
}