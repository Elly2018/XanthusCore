import { DataReceiverBase } from "./DataReceiver";

export class ReceiverCategory {
    receivers:DataReceiverBase[] = [];
    prefix:string;
    constructor(prefix:string){
        this.prefix = prefix;
    }
    Add(receiver:DataReceiverBase){
        this.receivers.push(receiver);
    }

    AnalysisData(data:any, ws?:WebSocket):boolean{
        for(let i = 0; i < this.receivers.length;i++){
            if(this.receivers[i].Check(data.header)){
                this.receivers[i].Analysis(data, ws);
                return true;
            }
        }
        return false;
    }
}

export abstract class MainReceiver {

    receivers:ReceiverCategory[] = [];

    constructor(receivers:DataReceiverBase[]) {
        receivers.forEach(x => {
            x.keyword.forEach(y => {
                const prefix = y.split('-')[0];
                const cate = this.HavePrefix(prefix);
                if(cate){
                    cate.Add(x);
                }else{
                    const newcate:ReceiverCategory = new ReceiverCategory(prefix);
                    this.receivers.push(newcate);
                    newcate.Add(x);
                }
            })
        });
    }

    private HavePrefix(prefix:string):ReceiverCategory|undefined{
        return this.receivers.find(x => x.prefix == prefix);
    }

    AnalysisData(data:any, ws?:WebSocket){
        const prefix = (data.header as string).split('-')[0];
        const cate = this.receivers.find(x => x.prefix == prefix);
        if(cate){
            if(!cate.AnalysisData(data, ws)){
                this.CannotFindHeader(data);
            }
        }else{
            this.CannotFindHeader(data);
        }
    }

    abstract CannotFindHeader(data:any):void;
}