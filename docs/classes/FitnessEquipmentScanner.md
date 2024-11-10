[**ant-plus-next v0.3.1**](../README.md) • **Docs**

***

[ant-plus-next v0.3.1](../README.md) / FitnessEquipmentScanner

# Class: FitnessEquipmentScanner

Represents a scanner for Fitness Equipment sensors.
Extends the AntPlusScanner class to handle scanning and state updates for multiple fitness equipment sensors.

## Extends

- `AntPlusScanner`

## Constructors

### new FitnessEquipmentScanner()

> **new FitnessEquipmentScanner**(`stick`): [`FitnessEquipmentScanner`](FitnessEquipmentScanner.md)

Constructs an instance of the AntPlusScanner class.

#### Parameters

• **stick**: [`USBDriverBase`](../interfaces/USBDriverBase.md)

The USB driver instance used for communication with the ANT+ stick.

#### Returns

[`FitnessEquipmentScanner`](FitnessEquipmentScanner.md)

#### Inherited from

`AntPlusScanner.constructor`

#### Defined in

[sensors/antPlusScanner.ts:42](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/antPlusScanner.ts#L42)

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

[sensors/baseSensor.ts:249](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/baseSensor.ts#L249)

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

[sensors/antPlusScanner.ts:58](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/antPlusScanner.ts#L58)
