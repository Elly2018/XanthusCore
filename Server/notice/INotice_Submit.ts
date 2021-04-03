import { IPost } from '../../database/element/IPost';
import { IBase } from '../../IBase';

export interface INoticeSubmit extends IBase{
    post: IPost
}