[**ant-plus-next v0.1.0**](../README.md) • **Docs**

***

[ant-plus-next v0.1.0](../globals.md) / MuscleOxygenSensor

# Class: MuscleOxygenSensor

Represents a Muscle Oxygen sensor.
This class extends the AntPlusSensor class to handle specific data related to muscle oxygen measurements.

## Extends

- `AntPlusSensor`

## Constructors

### new MuscleOxygenSensor()

> **new MuscleOxygenSensor**(`stick`): [`MuscleOxygenSensor`](MuscleOxygenSensor.md)

Constructs an instance of the AntPlusSensor class.

#### Parameters

• **stick**: `USBDriverBase`

The USB driver instance used for communication with the ANT+ stick.

#### Returns

[`MuscleOxygenSensor`](MuscleOxygenSensor.md)

#### Inherited from

`AntPlusSensor.constructor`

#### Defined in

[sensors/antPlusSensor.ts:16](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/antPlusSensor.ts#L16)

## Properties

### deviceType

> `readonly` `static` **deviceType**: `number` = `0x1f`

The device type code for Muscle Oxygen sensors.

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensor.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/muscleOxygen/muscleOxygenSensor.ts#L22)

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
const sensor = new MuscleOxygenSensor();
sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
```

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensor.ts:43](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/muscleOxygen/muscleOxygenSensor.ts#L43)

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

### setLap()

> **setLap**(`cbk`?): `Promise`\<`void`\>

Sets a lap marker on the sensor.

#### Parameters

• **cbk?**: `SendCallback`

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.setLap(callbackFunction);
```

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensor.ts:137](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/muscleOxygen/muscleOxygenSensor.ts#L137)

***

### setUTCTime()

> **setUTCTime**(`cbk`?): `Promise`\<`void`\>

Sets the UTC time on the sensor.

#### Parameters

• **cbk?**: `SendCallback`

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.setUTCTime(callbackFunction);
```

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensor.ts:95](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/muscleOxygen/muscleOxygenSensor.ts#L95)

***

### startSession()

> **startSession**(`cbk`?): `Promise`\<`void`\>

Starts a new session on the sensor.

#### Parameters

• **cbk?**: `SendCallback`

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.startSession(callbackFunction);
```

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensor.ts:109](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/muscleOxygen/muscleOxygenSensor.ts#L109)

***

### stopSession()

> **stopSession**(`cbk`?): `Promise`\<`void`\>

Stops the current session on the sensor.

#### Parameters

• **cbk?**: `SendCallback`

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.stopSession(callbackFunction);
```

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensor.ts:123](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/muscleOxygen/muscleOxygenSensor.ts#L123)
