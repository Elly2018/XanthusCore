# FileSetting

## Body
```typescript
interface FileSetting extends IBaseChannelSetting {
    use_nas: boolean,
    nas:Array<Nas>
}
```

## Inherit

[IBaseChannelSetting](./../../base/IBaseChannelSetting.md)

## Reference

[Nas](./Nas.md)

## Description

File channel setting

## Properties

**use_nas**: Is this file channel have NAS mode on

**nas**: It is meaningless when 

**use_nas** is false, it contain nas element array