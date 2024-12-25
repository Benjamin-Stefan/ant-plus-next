[**ant-plus-next v0.3.2**](../README.md)

***

[ant-plus-next](../README.md) / SpeedCadenceSensorState

# Class: SpeedCadenceSensorState

Represents the state of a Speed and Cadence sensor.
This class holds the data fields associated with the state of a Speed and Cadence sensor, including
cadence, speed, distance, and event times.

## Extended by

- [`SpeedCadenceScanState`](SpeedCadenceScanState.md)

## Constructors

### new SpeedCadenceSensorState()

> **new SpeedCadenceSensorState**(`deviceId`): [`SpeedCadenceSensorState`](SpeedCadenceSensorState.md)

Creates an instance of the SpeedCadenceSensorState.

#### Parameters

##### deviceId

`number`

The unique identifier of the sensor device.

#### Returns

[`SpeedCadenceSensorState`](SpeedCadenceSensorState.md)

#### Example

```ts
const sensorState = new SpeedCadenceSensorState(12345);
```

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:14](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L14)

## Properties

### CadenceEventTime

> **CadenceEventTime**: `undefined` \| `number`

The time of the last cadence event in seconds, measured as a fractional part.

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:28](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L28)

***

### CalculatedCadence

> **CalculatedCadence**: `undefined` \| `number`

The calculated cadence in revolutions per minute (RPM).

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:52](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L52)

***

### CalculatedDistance

> **CalculatedDistance**: `undefined` \| `number`

The calculated distance traveled in meters.

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:58](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L58)

***

### CalculatedSpeed

> **CalculatedSpeed**: `undefined` \| `number`

The calculated speed in meters per second (m/s).

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:64](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L64)

***

### CumulativeCadenceRevolutionCount

> **CumulativeCadenceRevolutionCount**: `undefined` \| `number`

The cumulative count of cadence revolutions since the sensor started.

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:34](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L34)

***

### CumulativeSpeedRevolutionCount

> **CumulativeSpeedRevolutionCount**: `undefined` \| `number`

The cumulative count of speed revolutions since the sensor started.

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:46](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L46)

***

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L22)

***

### SpeedEventTime

> **SpeedEventTime**: `undefined` \| `number`

The time of the last speed event in seconds, measured as a fractional part.

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:40](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L40)
