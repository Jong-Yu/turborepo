# @repo/accent

The accent module provides a basic types and ubiquitous language for developing
drama on [NARA Way](https://naraway.io). For a detailed usage or guide document,
please see [NARA Way](https://naraway.io).

## Features

- Domain base model types
- Interface for message types
- Base model types for kollection and drama
- Tenant base model types
- Utility functions and classes

## Installation

```sh
npm install @repo/accent
```

## Usage

### Entities

You can generate a list of changed properties from a Domain Entity source and a
changed object. Or you can provide a function for the purpose of generating a
`NameValueList` object.

Getting changed `nameValues` between source and modified entity:

```ts
// NameValueList

const sourceEntity: Foo = foo;
const modifiedEntity: Foo = fooOther;

const nameValue: NameValueList<Foo> =
  Entities.modifiedNameValues<T = Foo>(sourceEntity, modifiedEntity, FooUpdatable);

// IdNameValueList

const sourceEntities: Foo[] = foos;
const modifiedEntities: Foo[] = fooOthers;

const idNameValues: NameValueList<Foo> =
  Entities.modifiedIdNameValues<T = Foo>(sourceEntities, modifiedEntities, FooUpdatable);
```

Create `NameValue` and `NameValueList` type variable:

```ts
const nameValue1: NameValue = Entities.nameValue('prop', 'value');
const nameValue2: NameValue = Entities.nameValue('compositProp', compositValue);

const nameValues: NameValueList = Entities.nameValues(
  'prop',
  'value',
  'compositProp',
  compositValue,
);
```

### TenantKeys

You can generate id key values for types derived from object id key values for
tenant and workspace types used on the NARA platform. For example, you can
generate a stage key value from actor or get a citizen key value from actor.

```ts
const actorKey = TenantKeys.actorKey('1@1:1:1:1-1');

actorKey.type; // -> Actor

actorKey.audienceId; // -> 1@1:1:1:1
actorKey.citizenId; // -> 1@1:1:1

actorKey.stageId; // -> 1:1:1:1-1
actorKey.cineroomId; // -> 1:1:1:1
actorKey.pavilionId; // -> 1:1:1
```

### Paginations

A helper class that can be used in lists that support pages. It takes an Offset
type as an argument and supports various properties and functions for handling
pages.

| Property    | Type    | Description           |
| ----------- | ------- | --------------------- |
| total       | number  | Total count           |
| count       | number  | Page count            |
| size        | number  | Size per page         |
| page        | number  | Current page (1, 2..) |
| next        | Offset  | Next page offset      |
| previous    | Offset  | Previous page offset  |
| first       | Offset  | First page offset     |
| last        | Offset  | Last page offset      |
| hasNext     | boolean | Has next page         |
| hasPrevious | boolean | Has previous page     |
| hasFirst    | boolean | Has first page        |
| hasLast     | boolean | Has last page         |

To get the offset information by specifying the page to navigate to, use the
following function:

```ts
import { Paginations } from './Paginations';

const paginations: Paginations = new Paginations({
  offset: 0,
  limit: 10,
  totalCount: 55,
} as Offset);

const offset: Offset = paginations.navigate(5);
// offset     -> 50
// limit      -> 10
// totalCount -> 55
```

## Getting more help

Visit the Nara Way page to get more information about the library:  
[https://github.com/naraway](https://github.com/naraway)

You can ask any question about Nara Way using the [NARA Way Page](https://www.naraway.io).
