[**ant-plus-next v0.3.2**](../README.md)

***

[ant-plus-next](../README.md) / SpeedSensorState

# Class: SpeedSensorState

Represents the state of a Speed sensor.
This class holds the data fields associated with the state of a Speed sensor, including
speed, distance, event times, and various sensor-specific details.

## Extended by

- [`SpeedScanState`](SpeedScanState.md)

## Constructors

### new SpeedSensorState()

> **new SpeedSensorState**(`deviceId`): [`SpeedSensorState`](SpeedSensorState.md)

Creates an instance of the SpeedSensorState.

#### Parameters

##### deviceId

`number`

The unique identifier of the sensor device.

#### Returns

[`SpeedSensorState`](SpeedSensorState.md)

#### Example

```ts
const sensorState = new SpeedSensorState(12345);
```

#### Defined in

[sensors/speed/speedSensorState.ts:14](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speed/speedSensorState.ts#L14)

## Properties

### BatteryStatus?

> `optional` **BatteryStatus**: `"New"` \| `"Good"` \| `"Ok"` \| `"Low"` \| `"Critical"` \| `"Invalid"`

The battery status of the sensor.
Can be "New", "Good", "Ok", "Low", "Critical", or "Invalid".

#### Defined in

[sensors/speed/speedSensorState.ts:95](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speed/speedSensorState.ts#L95)

***

### BatteryStatusBit?

> `optional` **BatteryStatusBit**: `number`

The battery status bit of the sensor.

#### Defined in

[sensors/speed/speedSensorState.ts:100](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speed/speedSensorState.ts#L100)

***

### BatteryVoltage?

> `optional` **BatteryVoltage**: `number`

The battery voltage of the sensor.

#### Defined in

[sensors/speed/speedSensorState.ts:88](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speed/speedSensorState.ts#L88)

***

### CalculatedDistance

> **CalculatedDistance**: `undefined` \| `number`

The calculated distance traveled in meters.

#### Defined in

[sensors/speed/speedSensorState.ts:40](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speed/speedSensorState.ts#L40)

***

### CalculatedSpeed

> **CalculatedSpeed**: `undefined` \| `number`

The calculated speed in meters per second (m/s).

#### Defined in

[sensors/speed/speedSensorState.ts:46](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speed/speedSensorState.ts#L46)

***

### CumulativeSpeedRevolutionCount

> **CumulativeSpeedRevolutionCount**: `undefined` \| `number`

The cumulative count of speed revolutions since the sensor started.

#### Defined in

[sensors/speed/speedSensorState.ts:34](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speed/speedSensorState.ts#L34)

***

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Defined in

[sensors/speed/speedSensorState.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speed/speedSensorState.ts#L22)

***

### HwVersion?

> `optional` **HwVersion**: `number`

The hardware version of the sensor.

#### Defined in

[sensors/speed/speedSensorState.ts:70](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speed/speedSensorState.ts#L70)

***

### ManId?

> `optional` **ManId**: `number`

The manufacturer ID of the sensor.

#### Defined in

[sensors/speed/speedSensorState.ts:58](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speed/speedSensorState.ts#L58)

***

### ModelNum?

> `optional` **ModelNum**: `number`

The model number of the sensor.

#### Defined in

[sensors/speed/speedSensorState.ts:82](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speed/speedSensorState.ts#L82)

***

### Motion?

> `optional` **Motion**: `boolean`

Indicates whether the sensor detects motion.

#### Defined in

[sensors/speed/speedSensorState.ts:106](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speed/speedSensorState.ts#L106)

***

### OperatingTime?

> `optional` **OperatingTime**: `number`

The cumulative operating time of the sensor in seconds.

#### Defined in

[sensors/speed/speedSensorState.ts:52](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speed/speedSensorState.ts#L52)

***

### SerialNumber?

> `optional` **SerialNumber**: `number`

The serial number of the sensor.

#### Defined in

[sensors/speed/speedSensorState.ts:64](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speed/speedSensorState.ts#L64)

***

### SpeedEventTime

> **SpeedEventTime**: `undefined` \| `number`

The time of the last speed event in seconds, measured as a fractional part.

#### Defined in

[sensors/speed/speedSensorState.ts:28](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speed/speedSensorState.ts#L28)

***

### SwVersion?

> `optional` **SwVersion**: `number`

The software version of the sensor.

#### Defined in

[sensors/speed/speedSensorState.ts:76](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/speed/speedSensorState.ts#L76)
