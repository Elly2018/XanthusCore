# IProjectModifyGroup

## Body
```typescript
interface IProjectModifyGroup extends IBase {
    group_id: string,
    roles: Array<string>
}
```

## Inherit

[IBase](./../../base/IBase.md)

## Description

Server manager trying to modify group permission content

## Properties

**group_id**: Target group

**roles**: Update roles (ID list)