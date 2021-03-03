# Log

## Body
```typescript
interface ILog extends IDatabaseBase {
    channel: string,
    tag: string,
    message: string,
    color: string,
}
```

## Schema
```typescript
const SLog:mongoose.Schema = new mongoose.Schema({
    channel: String,
    tag: String,
    message: String,
    color: String,
    createdate: {type:Date, default: Date.now}
})
```

## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md)

## Description

A log element in log channel

## Properties

**channel**: Belong which log channel

**tag**: Log prefix

**message**: Log content

**color**: Log color, must be theme string, not hex value

