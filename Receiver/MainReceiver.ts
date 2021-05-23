import { DataReceiverBase } from "./DataReceiver";

/**
 * Receivers group\
 * Contain all kinds of receiver\
 * User will create a instance base on prefix
 * @example
 * "Prefix-Group-Element" => (Prefix)
 * "Yes-Account-Getter" => (Yes)
 */
export class ReceiverCategory {
    /**
     * Receivers
     */
    receivers:DataReceiverBase[] = [];
    /**
     * Front prefix string
     */
    prefix:string;
    /**
     * Create instance
     * @param prefix Group data prefix
     */
    constructor(prefix:string){
        this.prefix = prefix;
    }
    /**
     * Adding receiver in the group
     * @param receiver 
     */
    Add(receiver:DataReceiverBase){
        this.receivers.push(receiver);
    }
    /**
     * Check the data package is matches with one of the recevier in the list\
     * If it matches, it will call the receiver function, then this will return true\
     * To tell {@link MainReceiver} stop testing
     * @param data Test data
     * @param ws Sender
     * @returns If match
     */
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

/**
 * The client or server main network package receiver\
 * This data only support text stream (does not support binary data yet)
 */
export abstract class MainReceiver {
    /**
     * The receiver's group
     */
    receivers:ReceiverCategory[] = [];

    /**
     * Create main receiver or application\
     * It will create the tree structure that contain only 2 layer\
     * Which base on their keyword
     * @param receivers Register receivers
     */
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
    /**
     * Start search through all group to testing received network package
     * @param data Incoming data
     * @param ws Sender
     */
    AnalysisData(data:any, ws?:WebSocket){
        const prefix = (data.header as string).split('-')[0];
        // Use prefix search
        const cate = this.receivers.find(x => x.prefix == prefix);
        if(cate){ // Then do the test to the receiver group
            if(!cate.AnalysisData(data, ws)){
                this.CannotFindHeader(data);
            }
        }else{
            this.CannotFindHeader(data);
        }
    }

    /**
     * Simply check if the keyword is registered yet
     * @param prefix Prefix keyword
     * @returns If it registered
     */
    private HavePrefix(prefix:string):ReceiverCategory|undefined{
        return this.receivers.find(x => x.prefix == prefix);
    }

    /**
     * What will happen if package is not match with any of the receiver we register
     * @param data 
     */
    abstract CannotFindHeader(data:any):void;
}