# ILeave

## Body

```typescript
interface IOutsource extends IDatabaseBase {
    charge: string,
    deputy: string,

    project: string,
    group: string,

    vendor: string,
    email: string,
    website: string,
    phone: string,

    payment: string,
    expectedPayDate: number,
    actualPayDate: number,
}
```

## Description

The table store outsource target and its detail

## Properties

**charge**: Who is responsible for this project,

**deputy**: A substitute for charge person

<hr>

**project**: Target project

**group**: Target department

<hr>

**vendor**: Vendor name

**email**: Vendor email address

**website**: Vendor website link

**phone**: Vendor contact phone

<hr>

**payment**: Except payment

**expectedPayDate**: Except pay date

**actualPayDate**: Actual pay date