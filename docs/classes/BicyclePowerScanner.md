[**ant-plus-next v0.3.0**](../README.md) • **Docs**

***

[ant-plus-next v0.3.0](../README.md) / BicyclePowerScanner

# Class: BicyclePowerScanner

Represents a scanner for Bicycle Power sensors.
Extends the AntPlusScanner class to handle scanning for multiple Bicycle Power sensors.

## Extends

- `AntPlusScanner`

## Constructors

### new BicyclePowerScanner()

> **new BicyclePowerScanner**(`stick`): [`BicyclePowerScanner`](BicyclePowerScanner.md)

Constructs an instance of the AntPlusScanner class.

#### Parameters

• **stick**: `USBDriverBase`

The USB driver instance used for communication with the ANT+ stick.

#### Returns

[`BicyclePowerScanner`](BicyclePowerScanner.md)

#### Inherited from

`AntPlusScanner.constructor`

#### Defined in

[sensors/antPlusScanner.ts:42](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/antPlusScanner.ts#L42)

## Methods

### detach()

> **detach**(): `Promise`\<`void`\>

Detaches the sensor from its assigned channel and stops communication.

#### Returns

`Promise`\<`void`\>

#### Throws

Will throw an error if there is an issue detaching.

#### Inherited from

`AntPlusScanner.detach`

#### Defined in

[sensors/baseSensor.ts:249](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/baseSensor.ts#L249)

***

### scan()

> **scan**(): `Promise`\<`void`\>

Initiates a scan for ANT+ sensors by receiving broadcast messages.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the scanning process is complete.

#### Example

```ts
// Example usage:
const scanner = new AntPlusScanner();
scanner.scan();
```

#### Inherited from

`AntPlusScanner.scan`

#### Defined in

[sensors/antPlusScanner.ts:58](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/antPlusScanner.ts#L58)
