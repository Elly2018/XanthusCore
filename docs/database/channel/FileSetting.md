# FileSetting

## Body
```typescript
interface FileSetting {
    use_nas: boolean,
    nas:Array<Nas>
}
```

## Reference

[Nas](./Nas.md)

## Description

File channel setting

## Properties

**use_nas**: Is this file channel have NAS mode on

**nas**: It is meaningless when 

**use_nas** is false, it contain nas element array