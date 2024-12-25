[**ant-plus-next v0.3.2**](../README.md)

***

[ant-plus-next](../README.md) / MuscleOxygenSensor

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

##### stick

[`USBDriverBase`](../interfaces/USBDriverBase.md)

The USB driver instance used for communication with the ANT+ stick.

#### Returns

[`MuscleOxygenSensor`](MuscleOxygenSensor.md)

#### Inherited from

`AntPlusSensor.constructor`

#### Defined in

[sensors/antPlusSensor.ts:16](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/antPlusSensor.ts#L16)

## Properties

### deviceType

> `readonly` `static` **deviceType**: `number` = `0x1f`

The device type code for Muscle Oxygen sensors.

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensor.ts:24](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensor.ts#L24)

## Methods

### attach()

> **attach**(`channel`, `deviceId`): `Promise`\<`void`\>

Attaches the sensor to a specified ANT+ channel and initializes its state.

#### Parameters

##### channel

`number`

The ANT+ channel number used for communication with the sensor.

##### deviceId

`number`

The unique identifier of the sensor device.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
const sensor = new MuscleOxygenSensor();
sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
```

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensor.ts:45](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensor.ts#L45)

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

[sensors/baseSensor.ts:249](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/baseSensor.ts#L249)

***

### setLap()

> **setLap**(`cbk`?): `Promise`\<`void`\>

Sets a lap marker on the sensor.

#### Parameters

##### cbk?

[`SendCallback`](../type-aliases/SendCallback.md)

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.setLap(callbackFunction);
```

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensor.ts:139](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensor.ts#L139)

***

### setUTCTime()

> **setUTCTime**(`cbk`?): `Promise`\<`void`\>

Sets the UTC time on the sensor.

#### Parameters

##### cbk?

[`SendCallback`](../type-aliases/SendCallback.md)

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.setUTCTime(callbackFunction);
```

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensor.ts:97](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensor.ts#L97)

***

### startSession()

> **startSession**(`cbk`?): `Promise`\<`void`\>

Starts a new session on the sensor.

#### Parameters

##### cbk?

[`SendCallback`](../type-aliases/SendCallback.md)

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.startSession(callbackFunction);
```

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensor.ts:111](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensor.ts#L111)

***

### stopSession()

> **stopSession**(`cbk`?): `Promise`\<`void`\>

Stops the current session on the sensor.

#### Parameters

##### cbk?

[`SendCallback`](../type-aliases/SendCallback.md)

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.stopSession(callbackFunction);
```

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensor.ts:125](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/muscleOxygen/muscleOxygenSensor.ts#L125)
