[**ant-plus-next v0.3.2**](../README.md)

***

[ant-plus-next](../README.md) / MuscleOxygenSensorState

# Class: MuscleOxygenSensorState

Represents the state of a Muscle Oxygen sensor.
This class holds the data fields associated with the state of a Muscle Oxygen sensor, including
event count, device details, measurement data, and battery status.

## Extended by

- [`MuscleOxygenScanState`](MuscleOxygenScanState.md)

## Constructors

### new MuscleOxygenSensorState()

> **new MuscleOxygenSensorState**(`deviceId`): [`MuscleOxygenSensorState`](MuscleOxygenSensorState.md)

Creates an instance of the MuscleOxygenSensorState.

#### Parameters

##### deviceId

`number`

The unique identifier of the sensor device.

#### Returns

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md)

#### Example

```ts
const sensorState = new MuscleOxygenSensorState(12345);
```

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:14](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L14)

## Properties

### \_EventCount?

> `optional` **\_EventCount**: `number`

The count of events detected by the sensor.

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L22)

***

### BatteryStatus?

> `optional` **BatteryStatus**: `"New"` \| `"Good"` \| `"Ok"` \| `"Low"` \| `"Critical"` \| `"Invalid"`

The battery status of the sensor.
Can be "New", "Good", "Ok", "Low", "Critical", or "Invalid".

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:117](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L117)

***

### BatteryStatusBit?

> `optional` **BatteryStatusBit**: `number`

The battery status bit of the sensor.

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:122](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L122)

***

### BatteryVoltage?

> `optional` **BatteryVoltage**: `number`

The battery voltage of the sensor.

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:110](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L110)

***

### CurrentSaturatedHemoglobinPercentage?

> `optional` **CurrentSaturatedHemoglobinPercentage**: `number` \| `"Invalid"` \| `"AmbientLightTooHigh"`

The percentage of saturated hemoglobin from the current measurement.
Can be a numeric value, "AmbientLightTooHigh", or "Invalid".

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:68](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L68)

***

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:28](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L28)

***

### HwVersion?

> `optional` **HwVersion**: `number`

The hardware version of the sensor.

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:74](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L74)

***

### ManId?

> `optional` **ManId**: `number`

The manufacturer ID of the sensor.

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:80](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L80)

***

### MeasurementInterval?

> `optional` **MeasurementInterval**: `1` \| `2` \| `0.5` \| `0.25`

The measurement interval in seconds.
Possible values: 0.25, 0.5, 1, or 2 seconds.

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:47](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L47)

***

### ModelNum?

> `optional` **ModelNum**: `number`

The model number of the sensor.

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:86](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L86)

***

### OperatingTime?

> `optional` **OperatingTime**: `number`

The cumulative operating time of the sensor in seconds.

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:104](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L104)

***

### PreviousSaturatedHemoglobinPercentage?

> `optional` **PreviousSaturatedHemoglobinPercentage**: `number` \| `"Invalid"` \| `"AmbientLightTooHigh"`

The percentage of saturated hemoglobin from the previous measurement.
Can be a numeric value, "AmbientLightTooHigh", or "Invalid".

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:61](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L61)

***

### SerialNumber?

> `optional` **SerialNumber**: `number`

The serial number of the sensor.

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:98](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L98)

***

### SupportANTFS?

> `optional` **SupportANTFS**: `boolean`

Indicates whether ANT-FS is supported by the sensor.

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:40](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L40)

***

### SwVersion?

> `optional` **SwVersion**: `number`

The software version of the sensor.

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:92](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L92)

***

### TotalHemoglobinConcentration?

> `optional` **TotalHemoglobinConcentration**: `number` \| `"Invalid"` \| `"AmbientLightTooHigh"`

The total hemoglobin concentration.
Can be a numeric value, "AmbientLightTooHigh", or "Invalid".

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:54](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L54)

***

### UTCTimeRequired?

> `optional` **UTCTimeRequired**: `boolean`

Indicates whether UTC time is required by the sensor.

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:34](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L34)
