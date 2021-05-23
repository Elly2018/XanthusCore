import ws from 'ws'
import { IBase } from '../IBase';

/**
 * Server side use data sender
 */
export abstract class DataSender<T extends IBase>{
    /**
     * The sending keyword
     */
    header:string = ""
    /**
     * Create sender
     * @param header Keyword
     */
    constructor(header:string){
        this.header = header;
    }
    /**
     * Sending data through sender
     * @param data Data
     * @param sender Target websocket instance
     */
    public SendMessage(data:T, sender:WebSocket){
        data.header = this.header;
        sender.send(JSON.stringify(data));
    }
}

/**
 * Client side use data sender
 */
export abstract class ClientDataSender<T extends IBase>{
    /**
     * The sending keyword
     */
    header:string = ""
    /**
     * Create sender
     * @param header Keyword
     */
    constructor(header:string){
        this.header = header;
    }
    /**
     * Sending data through sender
     * @param data Data
     * @param sender Target websocket instance
     */
    public SendMessage(data:T, sender:ws){
        data.header = this.header;
        sender.send(JSON.stringify(data));
    }
}