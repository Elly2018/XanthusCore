# IChannel

## Body

```typescript
interface IChannel extends IDatabaseBase {
    name: string,
    type: number,
    group: boolean,
    groupid: string,
    setting: object,
    notices: Array<ChannelNotice>,
}
```

## Inherit

[IDatabaseBase](./../base/IDatabaseBase.md)

## Reference

[ChannelType](./../utility/ChannelType.md)

## Description

Define an channel header\
Only contain basic information about the channel\
Channel data will store in another collection and store in the **link** field\
Depend on the **type** The link is targeting different collection

## Properties

**name**: Channel name

**type**: Channel type

**group**: Is channel a group channel or lobby channel

**groupid**: If it is group channel, which group it is binding with

**setting**: Channel setting

**notices**: Notices info, Account will see badges base on this value

**createdate**: When does the account created