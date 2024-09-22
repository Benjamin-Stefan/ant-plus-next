[**ant-plus-next v0.1.0**](../README.md) • **Docs**

***

[ant-plus-next v0.1.0](../globals.md) / SpeedCadenceSensor

# Class: SpeedCadenceSensor

Represents a Bicycle Speed and Cadence sensor.
This class extends the AntPlusSensor class to handle specific data related to speed and cadence.

## Extends

- `AntPlusSensor`

## Constructors

### new SpeedCadenceSensor()

> **new SpeedCadenceSensor**(`stick`): [`SpeedCadenceSensor`](SpeedCadenceSensor.md)

Constructs an instance of the AntPlusSensor class.

#### Parameters

• **stick**: `USBDriverBase`

The USB driver instance used for communication with the ANT+ stick.

#### Returns

[`SpeedCadenceSensor`](SpeedCadenceSensor.md)

#### Inherited from

`AntPlusSensor.constructor`

#### Defined in

[sensors/antPlusSensor.ts:16](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/antPlusSensor.ts#L16)

## Properties

### wheelCircumference

> **wheelCircumference**: `number` = `2.199`

The wheel circumference in meters, used to calculate speed.

#### Default

```ts
2.199
```

#### Defined in

[sensors/speedCadence/speedCadenceSensor.ts:27](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/speedCadence/speedCadenceSensor.ts#L27)

***

### deviceType

> `readonly` `static` **deviceType**: `number` = `0x79`

The device type code for Bicycle Speed and Cadence sensors.

#### Defined in

[sensors/speedCadence/speedCadenceSensor.ts:20](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/speedCadence/speedCadenceSensor.ts#L20)

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
const sensor = new SpeedCadenceSensor();
sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
```

#### Defined in

[sensors/speedCadence/speedCadenceSensor.ts:56](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/speedCadence/speedCadenceSensor.ts#L56)

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

[sensors/baseSensor.ts:249](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/baseSensor.ts#L249)

***

### setWheelCircumference()

> **setWheelCircumference**(`wheelCircumference`): `void`

Sets the wheel circumference for speed calculation.

#### Parameters

• **wheelCircumference**: `number`

The wheel circumference in meters.

#### Returns

`void`

#### Example

```ts
const sensor = new SpeedCadenceSensor();
sensor.setWheelCircumference(2.105); // Sets the wheel circumference to 2.105 meters
```

#### Defined in

[sensors/speedCadence/speedCadenceSensor.ts:40](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/speedCadence/speedCadenceSensor.ts#L40)
