import { IPerformanceAppraisal } from "../database/element/IPerformanceAppraisal";
import { IPost } from "../database/element/IPost";

export interface PerformanceAppraisalPack{
    request: IPost
    performanceAppraisal: Array<IPerformanceAppraisal>
}