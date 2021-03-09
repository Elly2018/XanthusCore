# IAccounting

## Body

```typescript
interface IAccounting extends IDatabaseBase {
    title: string,
    description: string,
    salary: string,
    income: number,
    outcome: number,
    category: number,
    type: number,
}
```

## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md)

## Reference

[AccountingFilter](./../../utility/AccountingFilter.md), 
[Salary](./Salary.md)

## Description

Bill content

## Properties

**title**: Show title

**description**: Bill info

**salary**: Salary binding (ID)

**income**: Income

**outcome**: Outcome

**category**: Bill main category

**type**: Bill sub category