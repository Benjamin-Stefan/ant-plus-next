import { BaseSensor } from "../sensors/baseSensor";
import EventEmitter from "events";
/**
 * Interface representing the base functionalities of a USB driver.
 * This interface extends EventEmitter to allow for emitting and handling events.
 * It provides methods to open, close, read, write, and manage sensors.
 *
 * @extends EventEmitter
 */
export interface USBDriverBase extends EventEmitter {
    /**
     * Opens the connection to the USB device.
     *
     * @returns {Promise<boolean>} A promise that resolves to true if the device was successfully opened, otherwise false.
     *
     * @example
     * const driver: USBDriverBase = new SomeUSBDriver();
     * const isOpen = await driver.open();
     * console.log(isOpen); // true if successfully opened, false otherwise
     */
    open(): Promise<boolean>;
    /**
     * Closes the connection to the USB device.
     *
     * @returns {Promise<void>} A promise that resolves when the device is successfully closed.
     *
     * @example
     * await driver.close();
     * console.log("Device closed.");
     */
    close(): Promise<void>;
    /**
     * Reads data from the USB device.
     *
     * @param {Uint8Array} data - The data received from the USB device.
     * @returns {Promise<void>} A promise that resolves when the data has been processed.
     *
     * @example
     * const data = new Uint8Array([0x01, 0x02, 0x03]);
     * await driver.read(data);
     */
    read(data: Uint8Array): Promise<void>;
    /**
     * Writes data to the USB device.
     *
     * @param {Uint8Array} data - The data to send to the USB device.
     * @returns {Promise<void>} A promise that resolves when the data has been sent.
     *
     * @example
     * const data = new Uint8Array([0xA4, 0xB5]);
     * await driver.write(data);
     */
    write(data: Uint8Array): Promise<void>;
    /**
     * Resets the USB device and channels.
     *
     * @returns {Promise<void>} A promise that resolves when the device has been reset.
     *
     * @example
     * await driver.reset();
     * console.log("Device reset.");
     */
    reset(): Promise<void>;
    /**
     * Attaches a sensor to the USB driver and assigns it a channel.
     *
     * @param {BaseSensor} sensor - The sensor to attach.
     * @param {boolean} forScan - Whether the sensor is being attached for scanning.
     * @returns {Promise<boolean>} A promise that resolves to true if the sensor was successfully attached, otherwise false.
     *
     * @example
     * const sensor = new SomeSensor();
     * const attached = await driver.attach(sensor, true);
     * console.log(attached); // true if successfully attached
     */
    attach(sensor: BaseSensor, forScan: boolean): Promise<boolean>;
    /**
     * Detaches a sensor from the USB driver.
     *
     * @param {BaseSensor} sensor - The sensor to detach.
     * @returns {Promise<boolean>} A promise that resolves to true if the sensor was successfully detached, otherwise false.
     *
     * @example
     * const detached = await driver.detach(sensor);
     * console.log(detached); // true if successfully detached
     */
    detach(sensor: BaseSensor): Promise<boolean>;
    /**
     * Checks if a USB device is currently present and connected.
     *
     * @returns {Promise<boolean>} A promise that resolves to true if the device is present, otherwise false.
     *
     * @example
     * const isPresent = await driver.isPresent();
     * console.log(isPresent); // true if the device is present
     */
    isPresent(): Promise<boolean>;
    /**
     * Checks if the USB driver is currently scanning for devices.
     *
     * @returns {Promise<boolean>} A promise that resolves to true if the driver is scanning, otherwise false.
     *
     * @example
     * const isScanning = await driver.isScanning();
     * console.log(isScanning); // true if the device is scanning
     */
    isScanning(): Promise<boolean>;
    /**
     * Checks if the USB driver is capable of scanning for devices.
     *
     * @returns {Promise<boolean>} A promise that resolves to true if the driver can scan, otherwise false.
     *
     * @example
     * const canScan = await driver.canScan();
     * console.log(canScan); // true if the device can scan
     */
    canScan(): Promise<boolean>;
    /**
     * The number of channels currently in use.
     *
     * @type {number}
     * @example
     * console.log(driver.usedChannels); // Outputs the number of channels in use
     */
    usedChannels: number;
    /**
     * The maximum number of channels available for communication.
     *
     * @type {number}
     * @example
     * console.log(driver.maxChannels); // Outputs the maximum number of channels available
     */
    maxChannels: number;
    /**
     * Checks if a new sensor can be attached based on the available channels.
     *
     * @returns {Promise<boolean>} A promise that resolves to true if a new sensor can be attached, otherwise false.
     *
     * @example
     * const canAttach = await driver.canAttach();
     * console.log(canAttach); // true if another sensor can be attached
     */
    canAttach(): Promise<boolean>;
}
//# sourceMappingURL=usbDriverBase.d.ts.map