export interface IBaseChannel<T extends IBaseChannelSetting> {
    _id?: string,
    setting:T,
}

export interface IBaseChannelSetting{
    color: string,
}