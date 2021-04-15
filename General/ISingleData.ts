import { IBase } from "../IBase";
import { IBaseReply } from "../IBaseReply";

export interface ISingleData<T> extends IBase{
  data?: T
}

export interface IArrayData<T> extends IBase{
  data?: Array<T>
}

export interface ISingleDataReply<T> extends IBaseReply{
  data?: T
}

export interface IArrayDataReply<T> extends IBaseReply{
  data?: Array<T>
}