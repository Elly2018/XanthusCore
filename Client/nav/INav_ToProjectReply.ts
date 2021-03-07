import { IBase } from "../../IBase";
import { IProject } from "../../database/IProject";

export interface INavToProjectReply extends IBase{
    project: IProject
}