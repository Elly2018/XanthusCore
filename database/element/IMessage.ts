import { Schema, Document } from 'mongoose'

export interface IMessage{
    _id?:string
    /**
     * Belong to which text channel
     */
     channel: string
     /**
      * Who send the message
      */
     user: string
     /**
      * Content
      */
     message: string
     /**
      * Image names
      */
     image: Array<string>
}

/**
 * Text channel message
 */
export class IMessageDocs extends Document implements IMessage{
    channel: string = ""
    user: string = ""
    message: string = ""
    image: Array<string> = []

    imageURL(address:string):Array<string>{
        const result = [];
        this.image.forEach(v => {
            result.push(`${address}/Message/${this.id}/${v}`);
        })
        return result;
    }
}

export const SMessage:Schema = new Schema({
    user: String,
    channel: String,
    message: String,
    createdate: {type: Date, default: Date.now}
})