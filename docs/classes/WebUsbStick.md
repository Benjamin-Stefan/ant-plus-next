[**ant-plus-next v0.1.0**](../README.md) • **Docs**

***

[ant-plus-next v0.1.0](../README.md) / WebUsbStick

# Class: WebUsbStick

WebUsbStick class extends the WebUSBDriver to represent a specific USB stick that uses the WebUSB API.
It checks for WebUSB API availability in the environment before initializing.

## Extends

- `WebUSBDriver`

## Constructors

### new WebUsbStick()

> **new WebUsbStick**(): [`WebUsbStick`](WebUsbStick.md)

Creates an instance of WebUsbStick.
Throws an error if the WebUSB API is not available in the current environment (e.g., unsupported browsers).

#### Returns

[`WebUsbStick`](WebUsbStick.md)

#### Throws

If the WebUSB API is not available in the environment.

#### Example

```ts
try {
  const usbStick = new WebUsbStick();
  // Use usbStick for further operations
} catch (error) {
  console.error(error.message);
}
```

#### Overrides

`WebUSBDriver.constructor`

#### Defined in

[core/webUsbStick.ts:25](https://github.com/Benjamin-Stefan/ant-plus-next/blob/f145b7898a90ecdbfec50821d10da351499b1c22/src/core/webUsbStick.ts#L25)

## Properties

### \_canScan

> **\_canScan**: `boolean` = `false`

Indicates whether the device can scan.

#### Inherited from

`WebUSBDriver._canScan`

#### Defined in

[core/driver/webUSBDriver.ts:95](https://github.com/Benjamin-Stefan/ant-plus-next/blob/f145b7898a90ecdbfec50821d10da351499b1c22/src/core/driver/webUSBDriver.ts#L95)

***

### maxChannels

> **maxChannels**: `number` = `0`

The maximum number of channels available for communication.

#### Inherited from

`WebUSBDriver.maxChannels`

#### Defined in

[core/driver/webUSBDriver.ts:89](https://github.com/Benjamin-Stefan/ant-plus-next/blob/f145b7898a90ecdbfec50821d10da351499b1c22/src/core/driver/webUSBDriver.ts#L89)

***

### usedChannels

> **usedChannels**: `number` = `0`

The number of channels currently used.

#### Inherited from

`WebUSBDriver.usedChannels`

#### Defined in

[core/driver/webUSBDriver.ts:62](https://github.com/Benjamin-Stefan/ant-plus-next/blob/f145b7898a90ecdbfec50821d10da351499b1c22/src/core/driver/webUSBDriver.ts#L62)

## Methods

### attach()

> **attach**(`sensor`, `forScan`): `Promise`\<`boolean`\>

Attaches a sensor to the driver and assigns it a channel.

#### Parameters

• **sensor**: `BaseSensor`

The sensor to attach.

• **forScan**: `boolean`

Whether the sensor is being attached for scanning.

#### Returns

`Promise`\<`boolean`\>

Resolves with true if the sensor was successfully attached, otherwise false.

#### Inherited from

`WebUSBDriver.attach`

#### Defined in

[core/driver/webUSBDriver.ts:326](https://github.com/Benjamin-Stefan/ant-plus-next/blob/f145b7898a90ecdbfec50821d10da351499b1c22/src/core/driver/webUSBDriver.ts#L326)

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

`WebUSBDriver.canAttach`

#### Defined in

[core/driver/webUSBDriver.ts:121](https://github.com/Benjamin-Stefan/ant-plus-next/blob/f145b7898a90ecdbfec50821d10da351499b1c22/src/core/driver/webUSBDriver.ts#L121)

***

### cancelReadLoop()

> **cancelReadLoop**(): `void`

Cancels the current read loop by aborting the signal.

#### Returns

`void`

#### Inherited from

`WebUSBDriver.cancelReadLoop`

#### Defined in

[core/driver/webUSBDriver.ts:265](https://github.com/Benjamin-Stefan/ant-plus-next/blob/f145b7898a90ecdbfec50821d10da351499b1c22/src/core/driver/webUSBDriver.ts#L265)

***

### canScan()

> **canScan**(): `Promise`\<`boolean`\>

Checks if the device can scan for channels.

#### Returns

`Promise`\<`boolean`\>

Resolves with true if the device can scan, otherwise false.

#### Inherited from

`WebUSBDriver.canScan`

#### Defined in

[core/driver/webUSBDriver.ts:130](https://github.com/Benjamin-Stefan/ant-plus-next/blob/f145b7898a90ecdbfec50821d10da351499b1c22/src/core/driver/webUSBDriver.ts#L130)

***

### close()

> **close**(): `Promise`\<`void`\>

Closes the connection to the USB device and cleans up.

#### Returns

`Promise`\<`void`\>

Resolves when the device is closed.

#### Inherited from

`WebUSBDriver.close`

#### Defined in

[core/driver/webUSBDriver.ts:241](https://github.com/Benjamin-Stefan/ant-plus-next/blob/f145b7898a90ecdbfec50821d10da351499b1c22/src/core/driver/webUSBDriver.ts#L241)

***

### detach()

> **detach**(`sensor`): `Promise`\<`boolean`\>

Detaches a sensor from the driver.

#### Parameters

• **sensor**: `BaseSensor`

The sensor to detach.

#### Returns

`Promise`\<`boolean`\>

Resolves with true if the sensor was successfully detached, otherwise false.

#### Inherited from

`WebUSBDriver.detach`

#### Defined in

[core/driver/webUSBDriver.ts:350](https://github.com/Benjamin-Stefan/ant-plus-next/blob/f145b7898a90ecdbfec50821d10da351499b1c22/src/core/driver/webUSBDriver.ts#L350)

***

### isPresent()

> **isPresent**(): `Promise`\<`boolean`\>

Checks if a device is currently connected.

#### Returns

`Promise`\<`boolean`\>

Resolves with true if a device is present, otherwise false.

#### Inherited from

`WebUSBDriver.isPresent`

#### Defined in

[core/driver/webUSBDriver.ts:367](https://github.com/Benjamin-Stefan/ant-plus-next/blob/f145b7898a90ecdbfec50821d10da351499b1c22/src/core/driver/webUSBDriver.ts#L367)

***

### isScanning()

> **isScanning**(): `Promise`\<`boolean`\>

Checks if the device is currently scanning.

#### Returns

`Promise`\<`boolean`\>

Resolves with true if the device is scanning, otherwise false.

#### Inherited from

`WebUSBDriver.isScanning`

#### Defined in

[core/driver/webUSBDriver.ts:376](https://github.com/Benjamin-Stefan/ant-plus-next/blob/f145b7898a90ecdbfec50821d10da351499b1c22/src/core/driver/webUSBDriver.ts#L376)

***

### open()

> **open**(): `Promise`\<`boolean`\>

Opens a connection to the USB device and initializes the endpoints.

#### Returns

`Promise`\<`boolean`\>

Resolves with true if the device was successfully opened, otherwise false.

#### Inherited from

`WebUSBDriver.open`

#### Defined in

[core/driver/webUSBDriver.ts:139](https://github.com/Benjamin-Stefan/ant-plus-next/blob/f145b7898a90ecdbfec50821d10da351499b1c22/src/core/driver/webUSBDriver.ts#L139)

***

### read()

> **read**(`data`): `Promise`\<`void`\>

Processes the data received from the USB device.

#### Parameters

• **data**: `Uint8Array`

The data received from the USB device.

#### Returns

`Promise`\<`void`\>

Resolves when the data has been processed.

#### Inherited from

`WebUSBDriver.read`

#### Defined in

[core/driver/webUSBDriver.ts:278](https://github.com/Benjamin-Stefan/ant-plus-next/blob/f145b7898a90ecdbfec50821d10da351499b1c22/src/core/driver/webUSBDriver.ts#L278)

***

### reset()

> **reset**(): `Promise`\<`void`\>

Resets the device and channels, and sends a reset message to the system.

#### Returns

`Promise`\<`void`\>

Resolves when the reset is completed.

#### Inherited from

`WebUSBDriver.reset`

#### Defined in

[core/driver/webUSBDriver.ts:312](https://github.com/Benjamin-Stefan/ant-plus-next/blob/f145b7898a90ecdbfec50821d10da351499b1c22/src/core/driver/webUSBDriver.ts#L312)

***

### write()

> **write**(`data`): `Promise`\<`void`\>

Writes data to the USB device.

#### Parameters

• **data**: `Uint8Array`

The data to be sent to the USB device.

#### Returns

`Promise`\<`void`\>

Resolves when the data has been written.

#### Inherited from

`WebUSBDriver.write`

#### Defined in

[core/driver/webUSBDriver.ts:301](https://github.com/Benjamin-Stefan/ant-plus-next/blob/f145b7898a90ecdbfec50821d10da351499b1c22/src/core/driver/webUSBDriver.ts#L301)
