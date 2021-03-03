# Group 

## Body
```typescript
interface IGroup extends IDatabaseBase {
    name: string,
    description: string,
    server: string,
    role: Array<string>,
}
```

## Schema
```typescript
const SGroup:mongoose.Schema = new mongoose.Schema({
    name: String,
    description: String,
    server: String,
    role: [String],
    createdate: {type:Date, default: Date.now}
})
```

## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md)

## Description

Server group data format

## Properties

**name**: Group name

**description**: Group description

**server**: Belong which server

**role**: Contain rule (ID list)