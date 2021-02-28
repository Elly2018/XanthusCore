import { IServerElement } from "../database/IServer";
import { IBase } from "../IBase";

export interface IServerModifyStaff extends IBase {
    staff: Array<IServerElement>
}