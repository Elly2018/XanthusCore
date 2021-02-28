import { IServerElement } from "../database/IServer";
import { IBase } from "../IBase";

export interface IServerModifyGroup extends IBase {
    group: Array<IServerElement>
}