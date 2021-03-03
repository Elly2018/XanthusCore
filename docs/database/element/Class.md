# IClass

## Body

```typescript
interface IClass {
    _id: string,
    name: string,
    cannotDelete: boolean,
    permission: ClassPermission,
    createdate: number
}
```

## Schema

```typescript
const SClass:mongoose.Schema = new mongoose.Schema({
    name: String,
    cannotDelete: Boolean,
    permission:{
        administrator: Boolean,
        create_server: Boolean,
        view_accounting: Boolean,
        modify_accounting: Boolean
    },
    createdate: {type:Date, default:Date.now}
})
```

## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md)

## Description

Define each account's permission

## Properties

**name**: Class name

**cannotDelete**: Does class can be delete

**permission**: Account permission status, Structure detail in [here](./../ClassPermission.md)

**createdate**: Class create date