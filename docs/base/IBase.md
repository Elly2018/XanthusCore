# IBase

## Body
```typescript
interface IBase {
    header?: string,
    meta?:string
}
```

## Description

Most of data format will have basic properties

## Properties

**header**: Define the network package

**meta**: Extra information about the package

## Example

For example if we want to define a new data format

```typescript
interface INewFormat extends IBase {
    property1: string,
    property2: string,
    ...
}
```

