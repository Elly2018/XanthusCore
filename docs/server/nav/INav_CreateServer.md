# INav_CreateServer

## Body

```typescript
interface INavCreateServer extends IBase {
    name: string,
    template: INavTemplate
}
```

## Description

Create server request, contain name and channel template

## Properties

**name**: Server name

**template**: Channel template, see detail in [here](./INav_Template.md)