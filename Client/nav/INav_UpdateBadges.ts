import { IBase } from "../../IBase";

export interface INavBadgesPackageElement{
    project_id: string,
    isProfile: boolean,
    value: number
}

export interface INavUpdateBadges extends IBase{
    element: Array<INavBadgesPackageElement>
}