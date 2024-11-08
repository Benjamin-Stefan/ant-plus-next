[**ant-plus-next v0.3.0**](../README.md) • **Docs**

***

[ant-plus-next v0.3.0](../README.md) / BicyclePowerScanState

# Class: BicyclePowerScanState

Represents the scan state of a Bicycle Power sensor.
Extends the BicyclePowerSensorState to include additional data related to signal quality during a scan.

## Extends

- [`BicyclePowerSensorState`](BicyclePowerSensorState.md)

## Constructors

### new BicyclePowerScanState()

> **new BicyclePowerScanState**(`deviceId`): [`BicyclePowerScanState`](BicyclePowerScanState.md)

Creates an instance of BicyclePowerSensorState.

#### Parameters

• **deviceId**: `number`

The unique identifier of the sensor device.

#### Returns

[`BicyclePowerScanState`](BicyclePowerScanState.md)

#### Inherited from

[`BicyclePowerSensorState`](BicyclePowerSensorState.md).[`constructor`](BicyclePowerSensorState.md#constructors)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:11](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L11)

## Properties

### AccumulatedPower?

> `optional` **AccumulatedPower**: `number`

The accumulated power in watts.
Represents the total power output accumulated over time.

#### Inherited from

[`BicyclePowerSensorState`](BicyclePowerSensorState.md).[`AccumulatedPower`](BicyclePowerSensorState.md#accumulatedpower)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:54](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L54)

***

### Cadence?

> `optional` **Cadence**: `number`

The cadence value in revolutions per minute (RPM).
Represents the number of pedal revolutions per minute.

#### Inherited from

[`BicyclePowerSensorState`](BicyclePowerSensorState.md).[`Cadence`](BicyclePowerSensorState.md#cadence)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:47](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L47)

***

### CalculatedCadence?

> `optional` **CalculatedCadence**: `number`

The calculated cadence in RPM.
Represents the calculated cadence based on sensor data.

#### Inherited from

[`BicyclePowerSensorState`](BicyclePowerSensorState.md).[`CalculatedCadence`](BicyclePowerSensorState.md#calculatedcadence)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:103](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L103)

***

### CalculatedPower?

> `optional` **CalculatedPower**: `number`

The calculated power in watts.
Represents the power calculated from torque and cadence data.

#### Inherited from

[`BicyclePowerSensorState`](BicyclePowerSensorState.md).[`CalculatedPower`](BicyclePowerSensorState.md#calculatedpower)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:117](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L117)

***

### CalculatedTorque?

> `optional` **CalculatedTorque**: `number`

The calculated torque in Newton meters (Nm).
Represents the torque calculated from sensor data.

#### Inherited from

[`BicyclePowerSensorState`](BicyclePowerSensorState.md).[`CalculatedTorque`](BicyclePowerSensorState.md#calculatedtorque)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:110](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L110)

***

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Inherited from

[`BicyclePowerSensorState`](BicyclePowerSensorState.md).[`DeviceId`](BicyclePowerSensorState.md#deviceid)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:19](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L19)

***

### EventCount?

> `optional` **EventCount**: `number`

The event count value.
Represents the number of events recorded by the sensor.

#### Inherited from

[`BicyclePowerSensorState`](BicyclePowerSensorState.md).[`EventCount`](BicyclePowerSensorState.md#eventcount)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:75](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L75)

***

### LeftPedalPower?

> `optional` **LeftPedalPower**: `number`

The power percentage from the left pedal.
If available, represents the contribution of the left pedal to the total power.

#### Inherited from

[`BicyclePowerSensorState`](BicyclePowerSensorState.md).[`LeftPedalPower`](BicyclePowerSensorState.md#leftpedalpower)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:40](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L40)

***

### offset

> **offset**: `number` = `0`

The offset value used for torque calculations.

#### Default

```ts
0
```

#### Inherited from

[`BicyclePowerSensorState`](BicyclePowerSensorState.md).[`offset`](BicyclePowerSensorState.md#offset)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:68](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L68)

***

### PedalPower?

> `optional` **PedalPower**: `number`

The total pedal power percentage.
Represents the percentage of power produced by the pedal strokes.

#### Inherited from

[`BicyclePowerSensorState`](BicyclePowerSensorState.md).[`PedalPower`](BicyclePowerSensorState.md#pedalpower)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:26](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L26)

***

### Power?

> `optional` **Power**: `number`

The current power output in watts.
Represents the instantaneous power output of the cyclist.

#### Inherited from

[`BicyclePowerSensorState`](BicyclePowerSensorState.md).[`Power`](BicyclePowerSensorState.md#power)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:61](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L61)

***

### RightPedalPower?

> `optional` **RightPedalPower**: `number`

The power percentage from the right pedal.
If available, represents the contribution of the right pedal to the total power.

#### Inherited from

[`BicyclePowerSensorState`](BicyclePowerSensorState.md).[`RightPedalPower`](BicyclePowerSensorState.md#rightpedalpower)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:33](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L33)

***

### Rssi

> **Rssi**: `undefined` \| `number`

Received Signal Strength Indicator (RSSI).
Represents the strength of the received signal from the sensor.

#### Defined in

[sensors/bicyclePower/bicyclePowerScanState.ts:13](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerScanState.ts#L13)

***

### Slope?

> `optional` **Slope**: `number`

The slope value used for torque calculations.
Represents the slope or gradient used in the torque computation.

#### Inherited from

[`BicyclePowerSensorState`](BicyclePowerSensorState.md).[`Slope`](BicyclePowerSensorState.md#slope)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:89](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L89)

***

### Threshold

> **Threshold**: `undefined` \| `number`

The threshold value for the RSSI.
Represents the minimum acceptable signal strength for communication.

#### Defined in

[sensors/bicyclePower/bicyclePowerScanState.ts:20](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerScanState.ts#L20)

***

### TimeStamp?

> `optional` **TimeStamp**: `number`

The timestamp of the last recorded event.
Represents the time at which the last event was recorded.

#### Inherited from

[`BicyclePowerSensorState`](BicyclePowerSensorState.md).[`TimeStamp`](BicyclePowerSensorState.md#timestamp)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:82](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L82)

***

### TorqueTicksStamp?

> `optional` **TorqueTicksStamp**: `number`

The timestamp for the last torque tick.
Represents the time at which the last torque measurement was recorded.

#### Inherited from

[`BicyclePowerSensorState`](BicyclePowerSensorState.md).[`TorqueTicksStamp`](BicyclePowerSensorState.md#torqueticksstamp)

#### Defined in

[sensors/bicyclePower/bicyclePowerSensorState.ts:96](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/bicyclePower/bicyclePowerSensorState.ts#L96)
