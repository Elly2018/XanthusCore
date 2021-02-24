# DataReceiver

## Body

```typescript
abstract class DataReceiver<T> extends DataReceiverBase{
    public abstract Analysis(data:T, ws?:WebSocket):void;
}
```

## Description

Inherit [DataReceiverBase](./DataReceiverBase.md) for basic feature\
But this will type check, convert data to the type we choose

## Method

**Analysis**: Receiver action but with type convert

## Example

For example let's to create an receiver\
The action will be user like a post on forum

```typescript
interface UserLikePost extends IBase {
    post: string // Post ID
}

class CustomReceiver extends DataReceiver<UserLikePost>{
    public abstract Analysis(data:UserLikePost, ws?:WebSocket):void{
        // Action go here
    }
}
```