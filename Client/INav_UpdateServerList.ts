import { IBase } from "../IBase";

/**
 * Navigation bar server element
 * @param _id Server id
 * @param name Server name
 * @param owner Are you the owner
 * @param color Server default icon background color
 */
export interface INavServerElement{
    _id: string,
    name: string,
    owner: boolean,
    color: string,
}

/**
 * Client receiver message\
 * Update Server list reply
 * @param servers server element array
 */
export interface INavUpdateServerList extends IBase{
    servers: Array<INavServerElement>
}