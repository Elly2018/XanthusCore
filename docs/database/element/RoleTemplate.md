# RoleTemplate

## Body
```typescript
interface RolePermission {
    server: ServerPermission,
    channel: ChannelPermission
}
```

## Description

Define role permission structure

## Properties

**server**: Server management side permission options, see more in [here](./ServerPermission.md)

**channel**: Channel management side permission options, see more in [here](./ChannelPermission.md)