[**ant-plus-next v0.3.2**](../README.md)

***

[ant-plus-next](../README.md) / PairedDevice

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

[types/pairedDevice.ts:23](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/types/pairedDevice.ts#L23)
