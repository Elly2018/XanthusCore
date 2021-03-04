# IProfile_ChangeUsername

## Body

```typescript
interface IProfileChangeUsername extends IBase{
    new_username: string,
    password:string,
}
```

## Inherit

[IBase](./../../base/IBase.md)

## Description

User trying to change username

## Properties

**new_username**: New username

**password**: Confirm password