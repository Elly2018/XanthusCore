# MainReceiver

## Body

```typescript
abstract class MainReceiver {

    receivers:DataReceiverBase[];

    constructor(receivers:DataReceiverBase[]) {
        this.receivers = receivers;
    }

    public AnalysisData(data:any, ws?:WebSocket){
        // Loop all receiver find the right match keyword
        for(let i = 0; i < this.receivers.length;i++){
            if(this.receivers[i].Check(data.header)){
                // Match !
                this.receivers[i].Analysis(data, ws);
                return;
            }
        }
        this.CannotFindHeader(data);
    }

    public abstract CannotFindHeader(data:any):void;
}
```

## Description

Response for the websocket network receiver\
Find the match receiver instance then making action

## Properties

**receivers**: All the receiver we need to check

## Method

**AnalysisData**: Start iterate all receiver find match keyword\
then call it's action, detail see [this](./DataReceiver.md)

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