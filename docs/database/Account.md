# IAccount

## Body

```typescript
interface IAccount extends IDatabaseBase {
    email: string,
    username: string,
    password: string,

    identitycard: string,
    firstname: string,
    lastname: string,
    passportname: string,
    phone: string,

    firstdayofwork: number,
    lastdayofwork: number,

    color: string,
    rank: string,
    class: string,

    salary: number,
    laborinsurance: number,
    healthinsurance: number,
    pension: number,

    block: boolean,
    projects: Array<string>,
}
```

## Inherit

[IDatabaseBase](./../base/IDatabaseBase.md)

## Description

Define account data format

## Properties

**email**: Account email

**username**: Account username

**password**: Account password

<hr>

**identitycard**: Account ID number

**firstname**: Staff first name

**lastname**: Staff last name

**passportname**: Staff passport English name

**phone**: Staff cellphone number

<hr>

**color**: Account profile background color

**rank**: Account rank (ID)

**class**: Account class (ID)

<hr>

**salary**: Account salary

**laborinsurance**: Account labor insurance

**healthinsurance**: Account health insurance

**pension**: Account pension

<hr>

**block**: Is account block

**projects**: Join project list