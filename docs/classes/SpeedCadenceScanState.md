[**ant-plus-next v0.3.2**](../README.md)

***

[ant-plus-next](../README.md) / SpeedCadenceScanState

# Class: SpeedCadenceScanState

Represents the state of a Speed and Cadence sensor during scanning.
Extends the SpeedCadenceSensorState to include additional fields specific to scanning,
such as RSSI (Received Signal Strength Indicator) and signal threshold.

## Extends

- [`SpeedCadenceSensorState`](SpeedCadenceSensorState.md)

## Constructors

### new SpeedCadenceScanState()

> **new SpeedCadenceScanState**(`deviceId`): [`SpeedCadenceScanState`](SpeedCadenceScanState.md)

Creates an instance of the SpeedCadenceSensorState.

#### Parameters

##### deviceId

`number`

The unique identifier of the sensor device.

#### Returns

[`SpeedCadenceScanState`](SpeedCadenceScanState.md)

#### Example

```ts
const sensorState = new SpeedCadenceSensorState(12345);
```

#### Inherited from

[`SpeedCadenceSensorState`](SpeedCadenceSensorState.md).[`constructor`](SpeedCadenceSensorState.md#constructors)

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:14](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L14)

## Properties

### CadenceEventTime

> **CadenceEventTime**: `undefined` \| `number`

The time of the last cadence event in seconds, measured as a fractional part.

#### Inherited from

[`SpeedCadenceSensorState`](SpeedCadenceSensorState.md).[`CadenceEventTime`](SpeedCadenceSensorState.md#cadenceeventtime)

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:28](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L28)

***

### CalculatedCadence

> **CalculatedCadence**: `undefined` \| `number`

The calculated cadence in revolutions per minute (RPM).

#### Inherited from

[`SpeedCadenceSensorState`](SpeedCadenceSensorState.md).[`CalculatedCadence`](SpeedCadenceSensorState.md#calculatedcadence)

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:52](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L52)

***

### CalculatedDistance

> **CalculatedDistance**: `undefined` \| `number`

The calculated distance traveled in meters.

#### Inherited from

[`SpeedCadenceSensorState`](SpeedCadenceSensorState.md).[`CalculatedDistance`](SpeedCadenceSensorState.md#calculateddistance)

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:58](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L58)

***

### CalculatedSpeed

> **CalculatedSpeed**: `undefined` \| `number`

The calculated speed in meters per second (m/s).

#### Inherited from

[`SpeedCadenceSensorState`](SpeedCadenceSensorState.md).[`CalculatedSpeed`](SpeedCadenceSensorState.md#calculatedspeed)

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:64](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L64)

***

### CumulativeCadenceRevolutionCount

> **CumulativeCadenceRevolutionCount**: `undefined` \| `number`

The cumulative count of cadence revolutions since the sensor started.

#### Inherited from

[`SpeedCadenceSensorState`](SpeedCadenceSensorState.md).[`CumulativeCadenceRevolutionCount`](SpeedCadenceSensorState.md#cumulativecadencerevolutioncount)

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:34](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L34)

***

### CumulativeSpeedRevolutionCount

> **CumulativeSpeedRevolutionCount**: `undefined` \| `number`

The cumulative count of speed revolutions since the sensor started.

#### Inherited from

[`SpeedCadenceSensorState`](SpeedCadenceSensorState.md).[`CumulativeSpeedRevolutionCount`](SpeedCadenceSensorState.md#cumulativespeedrevolutioncount)

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:46](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L46)

***

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Inherited from

[`SpeedCadenceSensorState`](SpeedCadenceSensorState.md).[`DeviceId`](SpeedCadenceSensorState.md#deviceid-1)

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L22)

***

### Rssi

> **Rssi**: `undefined` \| `number`

The received signal strength indicator (RSSI) of the sensor signal.

#### Defined in

[sensors/speedCadence/speedCadenceScanState.ts:13](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceScanState.ts#L13)

***

### SpeedEventTime

> **SpeedEventTime**: `undefined` \| `number`

The time of the last speed event in seconds, measured as a fractional part.

#### Inherited from

[`SpeedCadenceSensorState`](SpeedCadenceSensorState.md).[`SpeedEventTime`](SpeedCadenceSensorState.md#speedeventtime)

#### Defined in

[sensors/speedCadence/speedCadenceSensorState.ts:40](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceSensorState.ts#L40)

***

### Threshold

> **Threshold**: `undefined` \| `number`

The signal threshold value.

#### Defined in

[sensors/speedCadence/speedCadenceScanState.ts:19](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speedCadence/speedCadenceScanState.ts#L19)
