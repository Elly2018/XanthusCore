# IAccounting

## Body

```typescript
interface IAccounting extends IDatabaseBase {
    title: string,
    description: string,
    income: number,
    outcome: number,
    category: number,
    type: number,
}
```

## Schema

```typescript
const SAccounting:mongoose.Schema = new mongoose.Schema({
    title: String,
    description: String,
    income: String,
    outcome: Number,
    category: Number,
    type: Number,
    createdate: Number
})
```

## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md)

## Description

Bill content

## Properties

**title**: Show title

**description**: Bill info

**income**: Income

**outcome**: Outcome

**category**: Bill main category, see more in [here](./../../utility/AccountingFormat.md)

**type**: Bill sub category, see more in [here](./../../utility/AccountingFormat.md)