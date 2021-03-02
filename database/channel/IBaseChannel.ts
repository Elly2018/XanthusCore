export interface IBaseChannel<T extends IBaseChannelSetting>{
    setting:T,
}

export interface IBaseChannelSetting{
    color: string,
}