[**ant-plus-next v0.1.0**](../README.md) • **Docs**

***

[ant-plus-next v0.1.0](../README.md) / StrideSpeedDistanceSensor

# Class: StrideSpeedDistanceSensor

Represents a Stride-Based Speed and Distance Monitor (SDM) sensor.
This class extends the AntPlusSensor class to provide specific functionality for handling SDM sensor data.

## Extends

- `AntPlusSensor`

## Constructors

### new StrideSpeedDistanceSensor()

> **new StrideSpeedDistanceSensor**(`stick`): [`StrideSpeedDistanceSensor`](StrideSpeedDistanceSensor.md)

Constructs an instance of the AntPlusSensor class.

#### Parameters

• **stick**: `USBDriverBase`

The USB driver instance used for communication with the ANT+ stick.

#### Returns

[`StrideSpeedDistanceSensor`](StrideSpeedDistanceSensor.md)

#### Inherited from

`AntPlusSensor.constructor`

#### Defined in

[sensors/antPlusSensor.ts:16](https://github.com/Benjamin-Stefan/ant-plus-next/blob/b17049a469528157a32f68083cac64e99938f880/src/sensors/antPlusSensor.ts#L16)

## Properties

### deviceType

> `readonly` `static` **deviceType**: `number` = `124`

The device type code for Stride-Based Speed and Distance Monitor (SDM) sensors.

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensor.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/b17049a469528157a32f68083cac64e99938f880/src/sensors/strideSpeedDistance/strideSpeedDistanceSensor.ts#L22)

## Methods

### attach()

> **attach**(`channel`, `deviceId`): `Promise`\<`void`\>

Attaches the sensor to a specified ANT+ channel and initializes its state.

#### Parameters

• **channel**: `number`

The ANT+ channel number used for communication with the sensor.

• **deviceId**: `number`

The unique identifier of the sensor device.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
const sensor = new StrideSpeedDistanceSensor();
sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
```

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensor.ts:36](https://github.com/Benjamin-Stefan/ant-plus-next/blob/b17049a469528157a32f68083cac64e99938f880/src/sensors/strideSpeedDistance/strideSpeedDistanceSensor.ts#L36)

***

### detach()

> **detach**(): `Promise`\<`void`\>

Detaches the sensor from its assigned channel and stops communication.

#### Returns

`Promise`\<`void`\>

#### Throws

Will throw an error if there is an issue detaching.

#### Inherited from

`AntPlusSensor.detach`

#### Defined in

[sensors/baseSensor.ts:249](https://github.com/Benjamin-Stefan/ant-plus-next/blob/b17049a469528157a32f68083cac64e99938f880/src/sensors/baseSensor.ts#L249)
