[**ant-plus-next v0.3.0**](../README.md) • **Docs**

***

[ant-plus-next v0.3.0](../README.md) / StrideSpeedDistanceSensorState

# Class: StrideSpeedDistanceSensorState

Represents the state of a Stride-Based Speed and Distance Monitor (SDM) sensor.
This class holds the data fields associated with the SDM sensor's state, including device ID,
speed, distance, cadence, and other relevant metrics.

## Extended by

- [`StrideSpeedDistanceScanState`](StrideSpeedDistanceScanState.md)

## Constructors

### new StrideSpeedDistanceSensorState()

> **new StrideSpeedDistanceSensorState**(`deviceId`): [`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md)

Creates an instance of the StrideSpeedDistanceSensorState.

#### Parameters

• **deviceId**: `number`

The unique identifier of the sensor device.

#### Returns

[`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md)

#### Example

```ts
const sensorState = new StrideSpeedDistanceSensorState(12345);
```

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:14](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L14)

## Properties

### CadenceFractional

> **CadenceFractional**: `undefined` \| `number`

The fractional part of the cadence in strides per minute.

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:82](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L82)

***

### CadenceInteger

> **CadenceInteger**: `undefined` \| `number`

The integer part of the cadence in strides per minute.

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:76](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L76)

***

### Calories

> **Calories**: `undefined` \| `number`

The total calories burned, if available.

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:94](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L94)

***

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L22)

***

### DistanceFractional

> **DistanceFractional**: `undefined` \| `number`

The fractional part of the total distance traveled in meters.

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:46](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L46)

***

### DistanceInteger

> **DistanceInteger**: `undefined` \| `number`

The integer part of the total distance traveled in meters.

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:40](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L40)

***

### SpeedFractional

> **SpeedFractional**: `undefined` \| `number`

The fractional part of the speed in meters per second.

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:58](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L58)

***

### SpeedInteger

> **SpeedInteger**: `undefined` \| `number`

The integer part of the speed in meters per second.

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:52](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L52)

***

### Status

> **Status**: `undefined` \| `number`

The status of the sensor, represented by a numeric value.

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:88](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L88)

***

### StrideCount

> **StrideCount**: `undefined` \| `number`

The total number of strides counted.

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:64](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L64)

***

### TimeFractional

> **TimeFractional**: `undefined` \| `number`

The fractional part of the elapsed time in seconds.

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:28](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L28)

***

### TimeInteger

> **TimeInteger**: `undefined` \| `number`

The integer part of the elapsed time in seconds.

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:34](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L34)

***

### UpdateLatency

> **UpdateLatency**: `undefined` \| `number`

The latency in milliseconds between updates.

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:70](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L70)
