# IProjectModifyRole

## Body
```typescript
interface IProjectModifyRole extends IBase {
    role_id: string,
    name: string,
    content: RoleTemplate,
}
```

## Inherit

[IBase](./../../base/IBase.md)

## Reference

[RoleTemplate](./../../database/element/RoleTemplate.md)

## Description

Project manager trying to modify a role

## Properties

**role_id**: Role target

**name**: Role name

**content**: Role info