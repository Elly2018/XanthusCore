import { IBase } from "../../IBase";

export interface INavBadgesPackageElement{
    projectid: string,
    isProfile: boolean,
    value: number
}

export interface INavUpdateBadges extends IBase{
    element: Array<INavBadgesPackageElement>
}