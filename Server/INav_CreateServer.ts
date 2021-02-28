import { IBase } from "../IBase";
import { IServerTemp } from './../database/IServer'

/**
 * Server channel template
 * @param lobby Lobby channel layout
 * @param Group Group channel layout
 */
export interface INavTemplate{
    lobby: Array<IServerTemp>,
    group: Array<IServerTemp>
}

/**
 * Server receiver message\
 * Create server request
 * @param name Name of the server
 * @param template Server channel template
 */
export interface INavCreateServer extends IBase{
    name: string,
    template: INavTemplate
}