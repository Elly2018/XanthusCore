import { IBaseReply } from '../../IBaseReply';
import { SocialDisplayAccount } from '../../Utility/SocialDisplayAccount';

export interface ISocialGetAccountReply extends IBaseReply{
    accounts: Array<SocialDisplayAccount>
    page: number
    pageLength: number
}