import ws from 'ws'
import { IBase } from '../IBase';

export abstract class DataSender<T extends IBase>{

    header:string = ""

    constructor(header:string){
        this.header = header;
    }
    public SendMessage(data:T, sender:WebSocket){
        data.header = this.header;
        sender.send(JSON.stringify(data));
    }
}

export abstract class ClientDataSender<T extends IBase>{
    
    header:string = ""

    constructor(header:string){
        this.header = header;
    }

    public SendMessage(data:T, sender:ws){
        data.header = this.header;
        sender.send(JSON.stringify(data));
    }
}