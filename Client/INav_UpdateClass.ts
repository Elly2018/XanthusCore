import { IBase } from "../IBase";
import { IClass } from '../database/element/IClass'

/**
 * Client receiver message\
 * Update class request
 * @param code Server invite code
 */
export interface INavUpdateClass extends IBase{
    class : IClass
}