# Group 

## Body
```typescript
interface IGroup extends IDatabaseBase {
    name: string,
    description: string,
    project: string,
    role: Array<string>,
}
```

## Schema
```typescript
const SGroup:mongoose.Schema = new mongoose.Schema({
    name: String,
    description: String,
    project: String,
    role: [String],
    createdate: {type:Date, default: Date.now}
})
```

## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md)

## Description

project group data format

## Properties

**name**: Group name

**description**: Group description

**project**: Belong which project

**role**: Contain rule (ID list)