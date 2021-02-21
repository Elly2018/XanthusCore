import { IBase } from "../IBase";

/**
 * Template element
 * @param name Channel title label
 * @param channeltype Channel type
 */
interface ChannelElement{
    name: string,
    type: number
}

/**
 * Server channel template
 * @param lobby Lobby channel layout
 * @param Group Group channel layout
 */
interface Template{
    lobby: ChannelElement,
    group: ChannelElement
}

/**
 * Server receiver message\
 * Create server request
 * @param name Name of the server
 * @param template Server channel template
 */
export interface INav_CreateServer extends IBase{
    name: string,
    template: Template
}