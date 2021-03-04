# MainReceiver

## Body

```typescript
abstract class MainReceiver {

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

    public AnalysisData(data:any, ws?:WebSocket){
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

    public abstract CannotFindHeader(data:any):void;
}
```

## Reference

[ReceiverCategory](./ReceiverCategory.md),
[DataReceiver](./DataReceiver.md)

## Description

Response for the websocket network receiver\
Find the match receiver category then making analysis

All the receiver keyword should follow the patterm:\
**(cate)-(address)**\
At the initialization stage, all receiver will sort into different group\
Easier for search later

## Properties

**receivers**: All the receiver category we need to check

## Method

**HavePrefix**: Check receivers already have category

**AnalysisData**: Start iterate all receiver find match keyword\
then call it's action

**CannotFindHeader**: When iterate all receiver but cannot find the match

## Example

For example we want to create an server receiver

```typescript
class ServerReceiver extends MainReceiver {
    public CannotFindHeader(data:any):void {
        console.log("Cannot find match receiver !!");
        console.log(">;(");
    }
}

const serverReceiver:ServerReceiver = new ServerReceiver([
    Receiver1,
    Receiver2,
    Receiver3,
    ...
]);
```