import { IBase } from "../../IBase";
import { IClass } from '../../database/element/IClass'

export interface INavUpdateClass extends IBase{
    class : IClass
}