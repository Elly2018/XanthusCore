# RoleTemplate

## Body
```typescript
interface RolePermission {
    project: ProjectPermission,
    channel: ChannelPermission
}
```

## Reference

[ProjectPermission](./ProjectPermission.md),
[ChannelPermission](./ChannelPermission.md)

## Description

Define role permission structure

## Properties

**project**: Project management side permission options

**channel**: Channel management side permission options