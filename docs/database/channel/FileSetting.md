# FileSetting

## Body
```typescript
interface FileSetting {
    root: string,
    usenas: boolean,
    nas:Array<Nas>
}
```

## Reference

[FileURL](./../element/FileURL.md), 
[Nas](./Nas.md)

## Description

File channel setting

## Properties

**root**: Root file URL

**usenas**: Is this file channel have NAS mode on

**nas**: It is meaningless when 