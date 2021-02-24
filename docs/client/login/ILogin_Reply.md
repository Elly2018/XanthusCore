# Ilogin_Reply

## Body

```typescript
interface ILoginReply extends IBase{
    type: number,
    message: string,
    _id: string,
    account?: IAccount
}
```