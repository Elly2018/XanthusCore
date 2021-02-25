# Ilogin_Reply

## Body

```typescript
interface ILoginReply extends IBaseReply {
    account?: IAccount
}
```

## Properties

**successfully**: 0: Successfully, 1: Failed, 2: Login Already, 3: Account Block, 4:Password Error

**account**: User account information