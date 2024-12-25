[**ant-plus-next v0.3.2**](../README.md)

***

[ant-plus-next](../README.md) / HeartRateSensorState

# Class: HeartRateSensorState

Represents the state of a Heart Rate sensor.
This class holds the data fields associated with the state of a Heart Rate sensor,
including heart rate measurements, device details, and battery status.

## Extended by

- [`HeartRateScanState`](HeartRateScanState.md)

## Constructors

### new HeartRateSensorState()

> **new HeartRateSensorState**(`deviceId`): [`HeartRateSensorState`](HeartRateSensorState.md)

Creates an instance of the HeartRateSensorState.

#### Parameters

##### deviceId

`number`

The unique identifier of the sensor device.

#### Returns

[`HeartRateSensorState`](HeartRateSensorState.md)

#### Example

```ts
const sensorState = new HeartRateSensorState(12345);
```

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:14](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L14)

## Properties

### BatteryLevel?

> `optional` **BatteryLevel**: `number`

The battery level of the sensor.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:118](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L118)

***

### BatteryStatus?

> `optional` **BatteryStatus**: `"New"` \| `"Good"` \| `"Ok"` \| `"Low"` \| `"Critical"` \| `"Invalid"`

The battery status of the sensor.
Can be "New", "Good", "Ok", "Low", "Critical", or "Invalid".

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:131](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L131)

***

### BatteryStatusBit?

> `optional` **BatteryStatusBit**: `number`

The battery status bit of the sensor.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:136](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L136)

***

### BatteryVoltage?

> `optional` **BatteryVoltage**: `number`

The battery voltage of the sensor.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:124](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L124)

***

### BeatCount

> **BeatCount**: `undefined` \| `number`

The cumulative count of beat events since the sensor started.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:34](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L34)

***

### BeatTime

> **BeatTime**: `undefined` \| `number`

The time of the last beat event in milliseconds.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:28](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L28)

***

### ComputedHeartRate

> **ComputedHeartRate**: `undefined` \| `number`

The computed heart rate in beats per minute (BPM).

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:40](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L40)

***

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L22)

***

### EnabledFeatures?

> `optional` **EnabledFeatures**: `number`

The enabled features of the sensor.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:112](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L112)

***

### HwVersion?

> `optional` **HwVersion**: `number`

The hardware version of the sensor.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:64](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L64)

***

### IntervalAverage?

> `optional` **IntervalAverage**: `number`

The average heart rate over a certain interval.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:88](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L88)

***

### IntervalMax?

> `optional` **IntervalMax**: `number`

The maximum heart rate over a certain interval.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:94](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L94)

***

### ManId?

> `optional` **ManId**: `number`

The manufacturer ID of the sensor.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:52](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L52)

***

### ModelNum?

> `optional` **ModelNum**: `number`

The model number of the sensor.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:76](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L76)

***

### OperatingTime?

> `optional` **OperatingTime**: `number`

The cumulative operating time of the sensor in seconds.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:46](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L46)

***

### PreviousBeat?

> `optional` **PreviousBeat**: `number`

The time of the previous beat measurement.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:82](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L82)

***

### SerialNumber?

> `optional` **SerialNumber**: `number`

The serial number of the sensor.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:58](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L58)

***

### SessionAverage?

> `optional` **SessionAverage**: `number`

The average heart rate over the current session.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:100](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L100)

***

### SupportedFeatures?

> `optional` **SupportedFeatures**: `number`

The supported features of the sensor.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:106](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L106)

***

### SwVersion?

> `optional` **SwVersion**: `number`

The software version of the sensor.

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:70](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/heartRate/heartRateSensorState.ts#L70)
