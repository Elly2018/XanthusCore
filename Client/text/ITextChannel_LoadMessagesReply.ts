import { IBase } from "../../IBase";
import { IMessage } from '../../database/element/IMessage'

export interface ITextChannelLoadMessageReply extends IBase{
    messages: Array<IMessage>
}