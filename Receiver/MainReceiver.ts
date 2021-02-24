import { DataReceiverBase } from "./DataReceiver";

export abstract class MainReceiver {

    receivers:DataReceiverBase[];

    constructor(receivers:DataReceiverBase[]) {
        this.receivers = receivers;
    }

    public AnalysisData(data:any, ws?:WebSocket){
        for(let i = 0; i < this.receivers.length;i++){
            if(this.receivers[i].Check(data.header)){
                this.receivers[i].Analysis(data, ws);
                return;
            }
        }
        this.CannotFindHeader(data);
    }

    public abstract CannotFindHeader(data:any):void;
}