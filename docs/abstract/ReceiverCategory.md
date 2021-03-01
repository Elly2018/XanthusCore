# Receiver Category

## Body

```typescript
class ReceiverCategory {
    receivers:DataReceiverBase[] = [];
    prefix:string;
    constructor(prefix:string){
        this.prefix = prefix;
    }
    public Add(receiver:DataReceiverBase){
        this.receivers.push(receiver);
    }

    public AnalysisData(data:any, ws?:WebSocket):boolean{
        for(let i = 0; i < this.receivers.length;i++){
            if(this.receivers[i].Check(data.header)){
                this.receivers[i].Analysis(data, ws);
                return true;
            }
        }
        return false;
    }
}
```

## Description

Categorize receiver

## Properties

**receivers**: Data receivers, see more in [here](./DataReceiverBase.md)

**prefix**: Receiver header prefix, we use this identify receiver category

## Method

**Add**: Adding receiver into category

**AnalysisData**: Check all receivers find the match then call it
