import { IBaseReply } from '../../IBaseReply';
import { ActivityList } from '../../Utility/ActivityList'

export interface IActivityActivityReply extends IBaseReply{
    activities: Array<ActivityList>
}