import { IBase } from "../../IBase";

export interface IProjectCreateInviteCode extends IBase {
    project: string,
    code: string
}