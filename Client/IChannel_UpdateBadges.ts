import { IBase } from "../IBase";

export interface IChannelBadgesPackageElement{
    channel_id: string,
    value: number
}

export interface IChannelUpdateBadges{
    element: Array<IChannelBadgesPackageElement>
}