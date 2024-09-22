[**ant-plus-next v0.1.0**](../README.md) • **Docs**

***

[ant-plus-next v0.1.0](../globals.md) / FitnessEquipmentSensor

# Class: FitnessEquipmentSensor

Represents a Fitness Equipment sensor.
This class extends the AntPlusSensor class to handle specific data related to fitness equipment.

## Extends

- `AntPlusSensor`

## Constructors

### new FitnessEquipmentSensor()

> **new FitnessEquipmentSensor**(`stick`): [`FitnessEquipmentSensor`](FitnessEquipmentSensor.md)

Constructs an instance of the AntPlusSensor class.

#### Parameters

• **stick**: `USBDriverBase`

The USB driver instance used for communication with the ANT+ stick.

#### Returns

[`FitnessEquipmentSensor`](FitnessEquipmentSensor.md)

#### Inherited from

`AntPlusSensor.constructor`

#### Defined in

[sensors/antPlusSensor.ts:16](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/antPlusSensor.ts#L16)

## Properties

### deviceType

> `readonly` `static` **deviceType**: `number` = `0x11`

The device type code for Fitness Equipment sensors.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensor.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/fitnessEquipment/fitnessEquipmentSensor.ts#L22)

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
const sensor = new FitnessEquipmentSensor();
sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
```

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensor.ts:43](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/fitnessEquipment/fitnessEquipmentSensor.ts#L43)

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

### setBasicResistance()

> **setBasicResistance**(`resistance`, `cbk`?): `Promise`\<`void`\>

Sets the basic resistance level on the fitness equipment.

#### Parameters

• **resistance**: `number`

The resistance level to set (0 to 100).

• **cbk?**: `SendCallback`

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.setBasicResistance(50, callbackFunction);
```

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensor.ts:122](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/fitnessEquipment/fitnessEquipmentSensor.ts#L122)

***

### setTargetPower()

> **setTargetPower**(`power`, `cbk`?): `Promise`\<`void`\>

Sets the target power level on the fitness equipment.

#### Parameters

• **power**: `number`

The target power level in watts.

• **cbk?**: `SendCallback`

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.setTargetPower(250, callbackFunction);
```

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensor.ts:140](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/fitnessEquipment/fitnessEquipmentSensor.ts#L140)

***

### setTrackResistance()

> **setTrackResistance**(`slopeOrCallback`?, `rollingResistanceCoeff`?, `cbk`?): `Promise`\<`void`\>

Sets the track resistance on the fitness equipment.

#### Parameters

• **slopeOrCallback?**: `number` \| `SendCallback`

The track slope percentage or a callback function.

• **rollingResistanceCoeff?**: `number`

The rolling resistance coefficient.

• **cbk?**: `SendCallback`

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.setTrackResistance(5, 0.005, callbackFunction);
```

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensor.ts:220](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/fitnessEquipment/fitnessEquipmentSensor.ts#L220)

***

### setUserConfiguration()

> **setUserConfiguration**(`userWeightOrCallback`?, `bikeWeight`?, `wheelDiameter`?, `gearRatio`?, `cbk`?): `Promise`\<`void`\>

Sets the user configuration for the sensor.

#### Parameters

• **userWeightOrCallback?**: `number` \| `SendCallback`

The user's weight in kilograms or a callback function.

• **bikeWeight?**: `number`

The weight of the bike in kilograms.

• **wheelDiameter?**: `number`

The diameter of the wheel in meters.

• **gearRatio?**: `number`

The gear ratio.

• **cbk?**: `SendCallback`

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.setUserConfiguration(70, 10, 0.7, 3.5, callbackFunction);
```

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensor.ts:97](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/fitnessEquipment/fitnessEquipmentSensor.ts#L97)

***

### setWindResistance()

> **setWindResistance**(`windCoeffOrCallback`?, `windSpeed`?, `draftFactor`?, `cbk`?): `Promise`\<`void`\>

Sets the wind resistance on the fitness equipment.

#### Parameters

• **windCoeffOrCallback?**: `number` \| `SendCallback`

The wind resistance coefficient or a callback function.

• **windSpeed?**: `number`

The wind speed in km/h.

• **draftFactor?**: `number`

The drafting factor (0 to 1).

• **cbk?**: `SendCallback`

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.setWindResistance(0.5, 20, 0.1, callbackFunction);
```

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensor.ts:179](https://github.com/Benjamin-Stefan/ant-plus-next/blob/d470eb84e6da33529ea57df2a5b331a44f806a81/src/sensors/fitnessEquipment/fitnessEquipmentSensor.ts#L179)
