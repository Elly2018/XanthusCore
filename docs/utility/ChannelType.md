# ChannelType

## Body
```typescript
export enum ChannelType{
    Text = 0,
    File = 1,
    Issue = 2,
    Request = 3,
    Graph = 4,
    Task = 5,
    Bill = 6,
    Log = 7,
    Social = 50,
    Setting = 51,
    Accounting = 52,
    ServerManage = 53,
    Notice = 54,
    PrivateMessage = 100,
}
```

## Description

All the channel type definition\
We stored they into enum, binding with an index\
It's easier to access

Server use channel range will be 0 - 49\
Profile use channel range will be 50 - 99