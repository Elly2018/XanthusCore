# ClassPermission

## Body

```typescript
interface ClassPermission{
    createProject: boolean,
    accountManagement: boolean,
    viewAccounting: boolean,
    modifyAccounting: boolean,
    projectManagement: boolean,
}
```

## Description

Class permission setting

## Properties

**createProject**: Can create project

**accountManagement**: Can create modify delete and view account detail

**viewAccounting**: Can see accounting menu

**modifyAccounting**: Can submit or delete or modify accounting data

**projectManagement**: Can see project manage menu