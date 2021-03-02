# IAccount

## Body

```typescript
interface IChannel extends IDatabaseBase {
    name: string,
    type: number,
    link: string,
    group: boolean,
    groupid: string,
    notices: Array<ChannelNotice>,
}
```

## Inherit

[IDatabaseBase](./../base/IDatabaseBase.md)

## Schema

```typescript
const SChannel:mongoose.Schema = new mongoose.Schema({
    name: String,
    type: Number,
    link: String,
    group: Boolean,
    groupid: String,
    notices: [
        {account_id: String, value: Number}
    ],
    createdate: {type: Date, default: Date.now}
})
```

## Description

Define an channel header\
Only contain basic information about the channel\
Channel data will store in another collection and store in the **link** field\
Depend on the **type** The link is targeting different collection

## Properties

**name**: Channel name

**type**: Channel type, see type in [here](./../utility/ChannelType.md)

**link**: Link channel setting and properties

**group**: Is channel a group channel or lobby channel

**groupid**: If it is group channel, which group it is binding with

**notices**: Notices info, Account will see badges base on this value

**createdate**: When does the account created