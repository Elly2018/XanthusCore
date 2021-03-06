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

    Setting = 50,
    Activity = 51,
    Notice = 52,
    Social = 53,

    Accounting = 60,
    ServerManage = 61,

    PrivateMessage = 100,
}
```

## Description

All the channel type definition\
We stored they into enum, binding with an index\
It's easier to access

Channel use index range will be 0 - 49\
Profile use index range will be 50 - 59
Manager use index range will be 60 - 69