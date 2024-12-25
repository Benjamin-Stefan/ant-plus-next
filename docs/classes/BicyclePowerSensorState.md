[**ant-plus-next v0.3.2**](../README.md)

***

[ant-plus-next](../README.md) / BicyclePowerSensorState

# Class: BicyclePowerSensorState

Represents the state of a Bicycle Power sensor.
Stores various metrics and calculated values related to bicycle power, such as pedal power, cadence, torque, and power.

## Extended by

- [`BicyclePowerScanState`](BicyclePowerScanState.md)

## Constructors

### new BicyclePowerSensorState()

> **new BicyclePowerSensorState**(`deviceId`): [`BicyclePowerSensorState`](BicyclePowerSensorState.md)

Creates an instance of BicyclePowerSensorState.

#### Parameters

##### deviceId

`number`

The unique identifier of the sensor device.

#### Returns

[`BicyclePowerSensorState`](BicyclePowerSensorState.md)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:11](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L11)

## Properties

### AccumulatedPower?

> `optional` **AccumulatedPower**: `number`

The accumulated power in watts.
Represents the total power output accumulated over time.

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:54](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L54)

***

### Cadence?

> `optional` **Cadence**: `number`

The cadence value in revolutions per minute (RPM).
Represents the number of pedal revolutions per minute.

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:47](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L47)

***

### CalculatedCadence?

> `optional` **CalculatedCadence**: `number`

The calculated cadence in RPM.
Represents the calculated cadence based on sensor data.

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:103](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L103)

***

### CalculatedPower?

> `optional` **CalculatedPower**: `number`

The calculated power in watts.
Represents the power calculated from torque and cadence data.

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:117](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L117)

***

### CalculatedTorque?

> `optional` **CalculatedTorque**: `number`

The calculated torque in Newton meters (Nm).
Represents the torque calculated from sensor data.

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:110](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L110)

***

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:19](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L19)

***

### EventCount?

> `optional` **EventCount**: `number`

The event count value.
Represents the number of events recorded by the sensor.

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:75](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L75)

***

### LeftPedalPower?

> `optional` **LeftPedalPower**: `number`

The power percentage from the left pedal.
If available, represents the contribution of the left pedal to the total power.

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:40](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L40)

***

### offset

> **offset**: `number` = `0`

The offset value used for torque calculations.

#### Default

```ts
0
```

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:68](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L68)

***

### PedalPower?

> `optional` **PedalPower**: `number`

The total pedal power percentage.
Represents the percentage of power produced by the pedal strokes.

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:26](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L26)

***

### Power?

> `optional` **Power**: `number`

The current power output in watts.
Represents the instantaneous power output of the cyclist.

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:61](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L61)

***

### RightPedalPower?

> `optional` **RightPedalPower**: `number`

The power percentage from the right pedal.
If available, represents the contribution of the right pedal to the total power.

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:33](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L33)

***

### Slope?

> `optional` **Slope**: `number`

The slope value used for torque calculations.
Represents the slope or gradient used in the torque computation.

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:89](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L89)

***

### TimeStamp?

> `optional` **TimeStamp**: `number`

The timestamp of the last recorded event.
Represents the time at which the last event was recorded.

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:82](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L82)

***

### TorqueTicksStamp?

> `optional` **TorqueTicksStamp**: `number`

The timestamp for the last torque tick.
Represents the time at which the last torque measurement was recorded.

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:96](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L96)
