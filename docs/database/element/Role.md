# Log

## Body
```typescript
interface IRole extends RoleTemplate, IDatabaseBase {
    project: string,
    sidebar: boolean,
    dynamic: boolean,
}
```

## Schema
```typescript
const SRole:mongoose.Schema = new mongoose.Schema({
    name: String,
    project: String,
    sidebar: Boolean,
    color: String,
    dynamic: Boolean,
    permission: {
        project: {
            project_modify: Boolean,
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

Project role element, define a staff's permission in the project

## Properties

**project**: Belong to which project

**sidebar**: Does this role should separate to a group and show in sidebar

**dynamic**: Is the role can be modify or delete