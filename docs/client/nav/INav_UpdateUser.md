# INav_UpdateUser

```typescript
interface INavUpdateUser extends IBase {
    account : IAccount
}
```

## Description

When user data has change while user is logining\
Server will send a new user data to update client status

## Properties

**account**: Account information, structure detail see [here](./../../database/IAccount.md)