import { IBase } from "../IBase";

/**
 * Server receiver message\
 * Update class element request
 * @param class Class ID
 */
export interface INavUpdateClassR extends IBase{
    class: string
}