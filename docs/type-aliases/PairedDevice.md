[**ant-plus-next v0.3.1**](../README.md) • **Docs**

***

[ant-plus-next v0.3.1](../README.md) / PairedDevice

# Type Alias: PairedDevice

> **PairedDevice**: `object`

Represents a device that is paired with the system.
This type is used to define the properties of a paired device, including its unique identifier, type, and pairing status.

## Type declaration

### id

> **id**: `number`

### paired

> **paired**: `boolean`

### type

> **type**: `number`

## Example

```ts
// Example of a paired device object
const device = {
  id: 1,
  type: 101,
  paired: true
};

console.log(device.id); // Output: 1
console.log(device.type); // Output: 101
console.log(device.paired); // Output: true
```

## Defined in

[types/pairedDevice.ts:23](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/types/pairedDevice.ts#L23)
