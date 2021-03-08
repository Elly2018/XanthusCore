# ProjectMember

## Body
```typescript
interface ProjectMember {
    owner: boolean,
    roles: Array<string>,
    groups: Array<string>,
    permission: RolePermission,
}
```

## Reference

[RolePermission](./../../database/element/RolePermission.md)

## Description

Describe user member position in the project

## Properties

**owner**: Is user owner

**roles**: Own role id list

**groups**: Can view group list

**permission**: Permission status