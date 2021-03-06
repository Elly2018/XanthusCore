# IProfile_ChangePassword

## Body

```typescript
export interface IProfileChangePassword extends IBase {
    oldpassword: string,
    newpassword: string,
}
```

## Inherit

[IBase](./../../base/IBase.md)

## Description

User trying to change password

## Properties

**oldpassword**: original password

**newpassword**: change password