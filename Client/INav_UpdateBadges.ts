import { IBase } from "../IBase";

/**
 * Update badges element
 * @param server_id Which server on the list
 * @param isProfile Is profile showcase number update
 * @param value Update showcase number, 0 means don't show
 */
export interface INavBadgesPackageElement{
    server_id: string,
    isProfile: boolean,
    value: number
}

/**
 * Client receiver message\
 * Add server request
 * @param element Update element information
 */
export interface INavUpdateBadges extends IBase{
    element: Array<INavBadgesPackageElement>
}