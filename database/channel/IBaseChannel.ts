export interface IBaseChannel<T extends IBaseChannelSetting>{
    link: string,
    setting:T,
}

export interface IBaseChannelSetting{
    color: string,
}