[**ant-plus-next v0.3.2**](../README.md)

***

[ant-plus-next](../README.md) / GarminStick2

# Class: GarminStick2

Class representing a Garmin Stick 2 USB driver, which extends the base USBDriver class.

## Extends

- `NodeUSBDriver`

## Constructors

### new GarminStick2()

> **new GarminStick2**(`debugOptions`?): [`GarminStick2`](GarminStick2.md)

Creates an instance of GarminStick2.

#### Parameters

##### debugOptions?

[`DebugOptions`](../interfaces/DebugOptions.md) = `{}`

Optional debug options for USB operations.

#### Returns

[`GarminStick2`](GarminStick2.md)

#### Example

```typescript
const garminStick = new GarminStick2();
garminStick.open(); // Opens the connection to the Garmin Stick 2 device.
```

#### Overrides

`NodeUSBDriver.constructor`

#### Defined in

[core/nodeUsbSticks.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/core/nodeUsbSticks.ts#L22)

## Properties

### \_canScan

> **\_canScan**: `boolean` = `false`

Indicates if the device can scan for channels.
Represents whether the USB device has scanning capabilities.

#### Inherited from

`NodeUSBDriver._canScan`

#### Defined in

[core/driver/nodeUSBDriver.ts:113](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/core/driver/nodeUSBDriver.ts#L113)

***

### maxChannels

> **maxChannels**: `number` = `0`

The maximum number of channels available for communication.
Defines the total number of channels the device can handle.

#### Inherited from

`NodeUSBDriver.maxChannels`

#### Defined in

[core/driver/nodeUSBDriver.ts:105](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/core/driver/nodeUSBDriver.ts#L105)

***

### throwLibUSBException

> **throwLibUSBException**: `boolean` = `false`

Defines whether to throw LibUSB exceptions when errors occur during USB communication.
Default value is set to `false`.

#### Inherited from

`NodeUSBDriver.throwLibUSBException`

#### Defined in

[core/driver/nodeUSBDriver.ts:121](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/core/driver/nodeUSBDriver.ts#L121)

***

### usedChannels

> **usedChannels**: `number` = `0`

The number of channels currently used.
Tracks how many channels are actively being used.

#### Inherited from

`NodeUSBDriver.usedChannels`

#### Defined in

[core/driver/nodeUSBDriver.ts:88](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/core/driver/nodeUSBDriver.ts#L88)

## Methods

### attach()

> **attach**(`sensor`, `forScan`): `Promise`\<`boolean`\>

Attaches a sensor to the driver and assigns it a channel.

#### Parameters

##### sensor

[`BaseSensor`](BaseSensor.md)

The sensor to attach.

##### forScan

`boolean`

Whether the sensor is being attached for scanning.

#### Returns

`Promise`\<`boolean`\>

Resolves with true if the sensor was successfully attached, otherwise false.

#### Example

```ts
const sensor = new BaseSensor();
driver.attach(sensor, true).then((attached) => {
  if (attached) console.log("Sensor attached");
});
```

#### Inherited from

`NodeUSBDriver.attach`

#### Defined in

[core/driver/nodeUSBDriver.ts:394](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/core/driver/nodeUSBDriver.ts#L394)

***

### canAttach()

> **canAttach**(): `Promise`\<`boolean`\>

Checks if a new sensor can be attached to the driver.
It verifies whether the current number of used channels is less than the maximum available channels.

#### Returns

`Promise`\<`boolean`\>

Resolves with true if a new sensor can be attached, otherwise false.

#### Example

```ts
const canAttach = await this.stick.canAttach();
if (canAttach) {
  console.log("A new sensor can be attached.");
} else {
  console.log("Cannot attach sensor: Maximum number of channels reached.");
}
```

#### Inherited from

`NodeUSBDriver.canAttach`

#### Defined in

[core/driver/nodeUSBDriver.ts:160](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/core/driver/nodeUSBDriver.ts#L160)

***

### canScan()

> **canScan**(): `Promise`\<`boolean`\>

Checks if the device can scan for channels.

#### Returns

`Promise`\<`boolean`\>

Resolves with true if the device can scan, otherwise false.

#### Inherited from

`NodeUSBDriver.canScan`

#### Defined in

[core/driver/nodeUSBDriver.ts:169](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/core/driver/nodeUSBDriver.ts#L169)

***

### close()

> **close**(): `Promise`\<`void`\>

Closes the connection to the USB device and releases the interface.

#### Returns

`Promise`\<`void`\>

Resolves when the device is closed.

#### Example

```ts
const driver = new NodeUSBDriver(1234, 5678);
driver.open().then(() => {
  driver.close().then(() => console.log("Device closed"));
});
```

#### Inherited from

`NodeUSBDriver.close`

#### Defined in

[core/driver/nodeUSBDriver.ts:282](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/core/driver/nodeUSBDriver.ts#L282)

***

### detach()

> **detach**(`sensor`): `Promise`\<`boolean`\>

Detaches a sensor from the driver.

#### Parameters

##### sensor

[`BaseSensor`](BaseSensor.md)

The sensor to detach.

#### Returns

`Promise`\<`boolean`\>

Resolves with true if the sensor was successfully detached, otherwise false.

#### Example

```ts
const sensor = new BaseSensor();
driver.detach(sensor).then((detached) => {
  if (detached) console.log("Sensor detached");
});
```

#### Inherited from

`NodeUSBDriver.detach`

#### Defined in

[core/driver/nodeUSBDriver.ts:424](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/core/driver/nodeUSBDriver.ts#L424)

***

### isPresent()

> **isPresent**(): `Promise`\<`boolean`\>

Checks if a USB device is present.

#### Returns

`Promise`\<`boolean`\>

Resolves with true if a device is present, otherwise false.

#### Inherited from

`NodeUSBDriver.isPresent`

#### Defined in

[core/driver/nodeUSBDriver.ts:441](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/core/driver/nodeUSBDriver.ts#L441)

***

### isScanning()

> **isScanning**(): `Promise`\<`boolean`\>

Checks if the driver is currently scanning.

#### Returns

`Promise`\<`boolean`\>

Resolves with true if the driver is scanning, otherwise false.

#### Inherited from

`NodeUSBDriver.isScanning`

#### Defined in

[core/driver/nodeUSBDriver.ts:450](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/core/driver/nodeUSBDriver.ts#L450)

***

### open()

> **open**(): `Promise`\<`boolean`\>

Opens a connection to the USB device and sets up endpoints for communication.

#### Returns

`Promise`\<`boolean`\>

Resolves with true if the device is successfully opened, otherwise false.

#### Example

```ts
const driver = new NodeUSBDriver(1234, 5678);
driver.open().then((result) => {
  if (result) {
    console.log("Device successfully opened");
  } else {
    console.error("Failed to open device");
  }
});
```

#### Inherited from

`NodeUSBDriver.open`

#### Defined in

[core/driver/nodeUSBDriver.ts:187](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/core/driver/nodeUSBDriver.ts#L187)

***

### read()

> **read**(`data`): `Promise`\<`void`\>

Reads data from the USB device and processes it.

#### Parameters

##### data

`Uint8Array`\<`ArrayBufferLike`\>

The data received from the USB device.

#### Returns

`Promise`\<`void`\>

Resolves when the data has been processed.

#### Example

```ts
const data = new Uint8Array([0x01, 0x02, 0x03]);
driver.read(data).then(() => console.log("Data processed"));
```

#### Inherited from

`NodeUSBDriver.read`

#### Defined in

[core/driver/nodeUSBDriver.ts:327](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/core/driver/nodeUSBDriver.ts#L327)

***

### reset()

> **reset**(): `Promise`\<`void`\>

Resets the device and its channels, and sends a reset message to the system.

#### Returns

`Promise`\<`void`\>

Resolves when the reset is completed.

#### Example

```ts
driver.reset().then(() => console.log("Device reset"));
```

#### Inherited from

`NodeUSBDriver.reset`

#### Defined in

[core/driver/nodeUSBDriver.ts:375](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/core/driver/nodeUSBDriver.ts#L375)

***

### write()

> **write**(`data`): `Promise`\<`void`\>

Writes data to the USB device.

#### Parameters

##### data

`Uint8Array`\<`ArrayBufferLike`\>

The data to be sent to the USB device.

#### Returns

`Promise`\<`void`\>

Resolves when the data has been written.

#### Example

```ts
const data = new Uint8Array([0x01, 0x02, 0x03]);
driver.write(data).then(() => console.log("Data sent"));
```

#### Inherited from

`NodeUSBDriver.write`

#### Defined in

[core/driver/nodeUSBDriver.ts:353](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/core/driver/nodeUSBDriver.ts#L353)
