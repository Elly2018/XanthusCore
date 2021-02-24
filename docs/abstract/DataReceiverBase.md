# DataReceiverBase

## Body

```typescript
abstract class DataReceiverBase {

    keyword:string[];

    constructor(keyword:string[]){
        this.keyword = keyword;
    }

    public Check(key:string):boolean{
        for(let i = 0; i < this.keyword.length; i++){
            if(this.keyword[i] == key) return true;
        }
        return false;
    }

    public abstract Analysis(data:any, ws?:WebSocket):void;
}
```

## Description

A Receiver instance for handle one type of format\
After websocket received data, it will trying to the right data receiver
to analysis the data

## Properties

**keyword**: format header keyword detail see [this](../base/IBase.md)

## Method

**Check**: During the search receiver stage, detail see [this](./MainReceiver.md)\
it will loop all receiver find the match keyword

**Analysis**: After find the match keyword it will call analysis\
To actually decoding the data and making action

## Example

Here we can define a custom data receiver

```typescript
class CustomReceiver extends DataReceiverBase {
    public abstract Analysis(data:any, ws?:WebSocket):void{
        // Action to here
    }
}
```