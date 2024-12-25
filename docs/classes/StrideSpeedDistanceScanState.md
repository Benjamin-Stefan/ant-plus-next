[**ant-plus-next v0.3.2**](../README.md)

***

[ant-plus-next](../README.md) / StrideSpeedDistanceScanState

# Class: StrideSpeedDistanceScanState

Represents the state of a Stride-Based Speed and Distance Monitor (SDM) sensor during scanning.
Extends the StrideSpeedDistanceSensorState to include additional fields specific to scanning,
such as RSSI (Received Signal Strength Indicator) and the signal threshold.

## Extends

- [`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md)

## Constructors

### new StrideSpeedDistanceScanState()

> **new StrideSpeedDistanceScanState**(`deviceId`): [`StrideSpeedDistanceScanState`](StrideSpeedDistanceScanState.md)

Creates an instance of the StrideSpeedDistanceSensorState.

#### Parameters

##### deviceId

`number`

The unique identifier of the sensor device.

#### Returns

[`StrideSpeedDistanceScanState`](StrideSpeedDistanceScanState.md)

#### Example

```ts
const sensorState = new StrideSpeedDistanceSensorState(12345);
```

#### Inherited from

[`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md).[`constructor`](StrideSpeedDistanceSensorState.md#constructors)

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:14](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L14)

## Properties

### CadenceFractional

> **CadenceFractional**: `undefined` \| `number`

The fractional part of the cadence in strides per minute.

#### Inherited from

[`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md).[`CadenceFractional`](StrideSpeedDistanceSensorState.md#cadencefractional)

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:82](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L82)

***

### CadenceInteger

> **CadenceInteger**: `undefined` \| `number`

The integer part of the cadence in strides per minute.

#### Inherited from

[`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md).[`CadenceInteger`](StrideSpeedDistanceSensorState.md#cadenceinteger)

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:76](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L76)

***

### Calories

> **Calories**: `undefined` \| `number`

The total calories burned, if available.

#### Inherited from

[`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md).[`Calories`](StrideSpeedDistanceSensorState.md#calories)

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:94](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L94)

***

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Inherited from

[`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md).[`DeviceId`](StrideSpeedDistanceSensorState.md#deviceid-1)

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L22)

***

### DistanceFractional

> **DistanceFractional**: `undefined` \| `number`

The fractional part of the total distance traveled in meters.

#### Inherited from

[`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md).[`DistanceFractional`](StrideSpeedDistanceSensorState.md#distancefractional)

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:46](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L46)

***

### DistanceInteger

> **DistanceInteger**: `undefined` \| `number`

The integer part of the total distance traveled in meters.

#### Inherited from

[`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md).[`DistanceInteger`](StrideSpeedDistanceSensorState.md#distanceinteger)

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:40](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L40)

***

### Rssi

> **Rssi**: `undefined` \| `number`

The received signal strength indicator (RSSI) of the sensor signal.

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceScanState.ts:13](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/strideSpeedDistance/strideSpeedDistanceScanState.ts#L13)

***

### SpeedFractional

> **SpeedFractional**: `undefined` \| `number`

The fractional part of the speed in meters per second.

#### Inherited from

[`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md).[`SpeedFractional`](StrideSpeedDistanceSensorState.md#speedfractional)

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:58](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L58)

***

### SpeedInteger

> **SpeedInteger**: `undefined` \| `number`

The integer part of the speed in meters per second.

#### Inherited from

[`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md).[`SpeedInteger`](StrideSpeedDistanceSensorState.md#speedinteger)

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:52](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L52)

***

### Status

> **Status**: `undefined` \| `number`

The status of the sensor, represented by a numeric value.

#### Inherited from

[`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md).[`Status`](StrideSpeedDistanceSensorState.md#status)

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:88](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L88)

***

### StrideCount

> **StrideCount**: `undefined` \| `number`

The total number of strides counted.

#### Inherited from

[`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md).[`StrideCount`](StrideSpeedDistanceSensorState.md#stridecount)

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:64](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L64)

***

### Threshold

> **Threshold**: `undefined` \| `number`

The signal threshold value.

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceScanState.ts:19](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/strideSpeedDistance/strideSpeedDistanceScanState.ts#L19)

***

### TimeFractional

> **TimeFractional**: `undefined` \| `number`

The fractional part of the elapsed time in seconds.

#### Inherited from

[`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md).[`TimeFractional`](StrideSpeedDistanceSensorState.md#timefractional)

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:28](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L28)

***

### TimeInteger

> **TimeInteger**: `undefined` \| `number`

The integer part of the elapsed time in seconds.

#### Inherited from

[`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md).[`TimeInteger`](StrideSpeedDistanceSensorState.md#timeinteger)

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:34](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L34)

***

### UpdateLatency

> **UpdateLatency**: `undefined` \| `number`

The latency in milliseconds between updates.

#### Inherited from

[`StrideSpeedDistanceSensorState`](StrideSpeedDistanceSensorState.md).[`UpdateLatency`](StrideSpeedDistanceSensorState.md#updatelatency)

#### Defined in

[sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts:70](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/strideSpeedDistance/strideSpeedDistanceSensorState.ts#L70)
