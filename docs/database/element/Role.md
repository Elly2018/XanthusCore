# Log

## Body
```typescript
interface IRole extends RoleTemplate, IDatabaseBase {
    server: string,
    sidebar: boolean,
    dynamic: boolean,
}
```

## Schema
```typescript
const SRole:mongoose.Schema = new mongoose.Schema({
    name: String,
    server: String,
    sidebar: Boolean,
    color: String,
    dynamic: Boolean,
    permission: {
        server: {
            server_modify: Boolean,
            channel_modify: Boolean
        },
        channel: {
            text_message_modify: Boolean,
            file_element_modify: Boolean,
            issue_post_modify: Boolean,
            task_modify: Boolean
        }
    },
    createdate: {type: Date,default: Date.now}
})
```

## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md),
[RoleTemplate](./RoleTemplate.md)

## Description

Server role element, define a staff's permission in the server

## Properties

**server**: Belong to which server

**sidebar**: Does this role should separate to a group and show in sidebar

**dynamic**: Is the role can be modify or delete