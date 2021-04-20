import { IProject } from "../database/IProject";
import { IProjectGroup } from "../database/IProjectGroup";

export interface NavProject {
  group: IProjectGroup
  projects: Array<IProject>
}