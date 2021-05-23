import { IBase } from '../IBase';
import { IArrayData, IArrayDataReply } from './IData'

export interface IRequestTableData extends IBase {
  options: Array<[any, any]>
  page: number
}

export interface ITableData<T> extends IArrayData<T>{
  page: number
  pageLength: number
}

export interface ITableDataReply<T> extends IArrayDataReply<T>{
  page: number
  pageLength: number
}