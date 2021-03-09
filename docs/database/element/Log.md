# Log

## Body
```typescript
interface ILog extends IDatabaseBase {
    sender: string,
    target: Array<string>,
    type: number,
    tag: string,
    message: string,
}
```

## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md)

## Reference

[LogType](./LogType.md)

## Description

A log element record everything\
Depend on type, sender or target can sometime be null

## Properties

**sender**: Sender ID

**target**: Targeting ID list

**type**: Log type

**tag**: Log prefix

**message**: Log message

