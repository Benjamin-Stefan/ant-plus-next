[**ant-plus-next v0.3.2**](../README.md)

***

[ant-plus-next](../README.md) / BaseSensor

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

##### stick

[`USBDriverBase`](../interfaces/USBDriverBase.md)

The USB driver used for communication with the sensor.

#### Returns

[`BaseSensor`](BaseSensor.md)

#### Overrides

`EventEmitter.constructor`

#### Defined in

[sensors/baseSensor.ts:37](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/baseSensor.ts#L37)

## Methods

### detach()

> **detach**(): `Promise`\<`void`\>

Detaches the sensor from its assigned channel and stops communication.

#### Returns

`Promise`\<`void`\>

#### Throws

Will throw an error if there is an issue detaching.

#### Defined in

[sensors/baseSensor.ts:249](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/baseSensor.ts#L249)
