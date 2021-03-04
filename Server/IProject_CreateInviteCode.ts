import { IBase } from "../IBase";

export interface IProjectCreateInviteCode extends IBase {
    project_id: string,
    code: string
}