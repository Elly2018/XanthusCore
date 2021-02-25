# IBaseReply

## Body
```typescript
interface IBaseReply extends IBase {
    successfully: number
    message: string
}
```

## Description

Most of server reply will have basic properties

## Properties

**successfully**: Client action reply

**message**: Action feedback message

## Example

For example if we want to define a new data format

```typescript
interface INewFormat extends IBaseReply {
    property1: string,
    property2: string,
    ...
}
```

