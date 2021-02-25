# IProfile_ChangePassword

## Body

```typescript
export interface IProfileChangePassword extends IBase {
    old_password: string,
    new_password: string,
}
```

## Description

User trying to change password

## Properties

**old_password**: original password

**new_password**: change password