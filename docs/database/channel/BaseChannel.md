# Base Channel

## Body

```typescript
interface IBaseChannel<T extends IBaseChannelSetting> {
    _id?: string,
    setting:T,
}
```

## Description

Channel is the core mechanism this application provide\
It contain all kinds of different feature

In order to manage or create these channel\
They must inherit it to make it works

## Properties

**setting**: Channel setting, see more in [here](./BaseChannelSetting.md)