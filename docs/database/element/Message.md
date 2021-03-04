# Message

## Body
```typescript
interface IMessage extends IDatabaseBase{
    channel: string,
    user: string,
    tag: Array<string>,
    reply: IReply,
    message: string,
}
```
```typescript
const SMessage:mongoose.Schema = new mongoose.Schema({
    user: String,
    channel: String,
    tag: [String],
    reply: {
        isreply: Boolean,
        target: String
    },
    message: String,
    createdate: {type: Date, default: Date.now}
})
```

## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md)

## Reference

[IReply](./IReply.md)

## Description

Text message data format

## Properties

**channel**: Belong which text channel

**user**: Sender user account

**tag**: Contain tags

**reply**: Is message reply to other message

**message**: Message content