import { IBase } from "../../IBase";
import { IProject } from '../../database/IProject'

export interface IProjectUpdate extends IBase {
    project: IProject
}