[**ant-plus-next v0.3.1**](../README.md) • **Docs**

***

[ant-plus-next v0.3.1](../README.md) / BaseSensor

# Class: `abstract` BaseSensor

Abstract base class for sensors that communicates over a USB connection.
Extends EventEmitter to handle various events related to sensor data and status.

## Extends

- `EventEmitter`

## Constructors

### new BaseSensor()

> **new BaseSensor**(`stick`): [`BaseSensor`](BaseSensor.md)

Creates an instance of BaseSensor.

#### Parameters

• **stick**: [`USBDriverBase`](../interfaces/USBDriverBase.md)

The USB driver used for communication with the sensor.

#### Returns

[`BaseSensor`](BaseSensor.md)

#### Overrides

`EventEmitter.constructor`

#### Defined in

[sensors/baseSensor.ts:37](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/baseSensor.ts#L37)

## Methods

### detach()

> **detach**(): `Promise`\<`void`\>

Detaches the sensor from its assigned channel and stops communication.

#### Returns

`Promise`\<`void`\>

#### Throws

Will throw an error if there is an issue detaching.

#### Defined in

[sensors/baseSensor.ts:249](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/baseSensor.ts#L249)
