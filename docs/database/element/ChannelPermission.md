# ChannelPermission

## Body
```typescript
interface ChannelPermission {
    text_message_modify: boolean,
    file_element_modify: boolean,
    issue_post_modify: boolean,
    task_modify: boolean
}
```

## Description

Channel management permission options

## Properties

**text_message_modify**: Modify group text channel content

**file_element_modify**: Modify group file channel content

**issue_post_modify**: Modify group issue channel content

**task_modify**: Modify group task channel content