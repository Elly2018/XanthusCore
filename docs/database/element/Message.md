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

## Description

## Properties

**channel**: Belong which text channel

**user**: Sender user account

**tag**: Contain tags

**reply**: Is message reply to other message, see more in [here](./IReply.md)

**message**: Message content