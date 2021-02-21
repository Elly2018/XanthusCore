export abstract class DataReceiverBase{
    keyword:string[];

    constructor(keyword:string[]){
        this.keyword = keyword;
    }

    /**
     * It return true if match format header
     * @param key Current message header keyword
     */
    public Check(key:string):boolean{
        for(let i = 0; i < this.keyword.length; i++){
            if(this.keyword[i] == key) return true;
        }
        return false;
    }

    public abstract Analysis(data:any, ws?:WebSocket):void;
}

export abstract class DataReceiver<T> extends DataReceiverBase{
    public abstract Analysis(data:T, ws?:WebSocket):void;
}