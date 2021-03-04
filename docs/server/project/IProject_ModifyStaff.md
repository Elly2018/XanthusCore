# IProjectModifyStaff

## Body
```typescript
interface IProjectModifyStaff extends IBase {
    account_id: string,
    roles: Array<string>,
}
```

## Inherit

[IBase](./../../base/IBase.md)

## Description

Project manager trying to modify staff info

## Properties

**account_id**: Account target

**roles**: Permission status (ID list)