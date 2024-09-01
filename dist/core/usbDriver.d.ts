import { EventEmitter } from "events";
import { BaseSensor } from "../sensors/baseSensor.js";
import { DebugOptions } from "../types/debugOptions.js";
/**
 * Class representing a USB driver that handles communication with USB devices.
 * Extends EventEmitter to emit various events related to USB operations.
 */
export declare class USBDriver extends EventEmitter {
    private idVendor;
    private idProduct;
    private static deviceInUse;
    private device;
    private iface;
    private detachedKernelDriver;
    private inEndpoint;
    private outEndpoint;
    private leftover;
    private usedChannels;
    private attachedSensors;
    maxChannels: number;
    canScan: boolean;
    /**
     * Creates an instance of USBDriver.
     *
     * @param {number} idVendor - The vendor ID of the USB device.
     * @param {number} idProduct - The product ID of the USB device.
     * @param {DebugOptions} [debugOptions={}] - Optional debug options for USB operations.
     */
    constructor(idVendor: number, idProduct: number, debugOptions?: DebugOptions);
    /**
     * Retrieves a list of USB devices matching the specified vendor and product IDs.
     *
     * @private
     * @returns {usb.usb.Device[]} An array of USB devices that match the specified criteria.
     */
    private getDevices;
    /**
     * Checks if a USB device matching the specified criteria is present.
     *
     * @returns {boolean} True if a matching device is present; otherwise, false.
     *
     * @example
     * ```typescript
     * if (usbDriver.isPresent()) {
     *   console.log("Device is present.");
     * }
     * ```
     */
    isPresent(): boolean;
    /**
     * Opens a connection to a matching USB device and initializes the interface.
     *
     * @returns {boolean} True if a device is successfully opened; otherwise, false.
     *
     * @example
     * ```typescript
     * if (usbDriver.open()) {
     *   console.log("Device opened successfully.");
     * } else {
     *   console.log("Failed to open device.");
     * }
     * ```
     */
    open(): boolean;
    /**
     * Asynchronously opens a connection to a USB device and listens for the "attach" event.
     *
     * @param {AbortSignal} signal - An AbortSignal to control the asynchronous operation.
     * @returns {Promise<void>} A promise that resolves when the connection is successfully opened.
     *
     * @example
     * ```typescript
     * const controller = new AbortController();
     * usbDriver.openAsync(controller.signal).catch(console.error);
     * ```
     */
    openAsync(signal: AbortSignal): Promise<void>;
    /**
     * Closes the connection to the USB device and releases all resources.
     */
    close(): void;
    /**
     * Resets the USB device and prepares it for operation.
     */
    reset(): void;
    /**
     * Checks if the device is currently in scanning mode.
     *
     * @returns {boolean} True if the device is scanning; otherwise, false.
     */
    isScanning(): boolean;
    /**
     * Attaches a sensor to the USB driver for data handling.
     *
     * @param {BaseSensor} sensor - The sensor to attach.
     * @param {boolean} forScan - Indicates if the attachment is for scanning purposes.
     * @returns {boolean} True if the sensor is successfully attached; otherwise, false.
     */
    attach(sensor: BaseSensor, forScan: boolean): boolean;
    /**
     * Detaches a sensor from the USB driver.
     *
     * @param {BaseSensor} sensor - The sensor to detach.
     * @returns {boolean} True if the sensor is successfully detached; otherwise, false.
     */
    detach(sensor: BaseSensor): boolean;
    /**
     * Detaches all sensors from the USB driver.
     */
    detach_all(): void;
    /**
     * Writes data to the USB device's output endpoint.
     *
     * @param {Buffer} data - The data buffer to write to the output endpoint.
     */
    write(data: Buffer): void;
    /**
     * Reads data from the USB device's input endpoint and handles it accordingly.
     *
     * @param {Buffer} data - The data buffer received from the input endpoint.
     */
    read(data: Buffer): void;
}
