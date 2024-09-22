import { BaseSensor } from "../../sensors/baseSensor";
import { USBDriverBase } from "../../types/usbDriverBase";
import EventEmitter from "events";
/**
 * WebUSBDriver is a class that manages the connection and communication with USB devices using the WebUSB API.
 * It handles device setup, communication, and sensor attachment.
 *
 * @extends EventEmitter
 * @implements USBDriverBase
 */
export declare class WebUSBDriver extends EventEmitter implements USBDriverBase {
    /**
     * Stores the USB devices currently in use.
     * @type {USBDevice[]}
     * @private
     */
    private static deviceInUse;
    /**
     * The current USB device.
     * @type {USBDevice|undefined}
     * @private
     */
    private device;
    /**
     * The USB interface of the connected device.
     * @type {USBInterface|undefined}
     * @private
     */
    private iface;
    /**
     * The input endpoint for communication.
     * @type {USBEndpoint|undefined}
     * @private
     */
    private inEndpoint;
    /**
     * The output endpoint for communication.
     * @type {USBEndpoint|undefined}
     * @private
     */
    private outEndpoint;
    /**
     * Stores any leftover data from previous USB reads.
     * @type {Uint8Array|undefined}
     * @private
     */
    private leftover;
    /**
     * The number of channels currently used.
     * @type {number}
     */
    usedChannels: number;
    /**
     * The sensors attached to the driver.
     * @type {BaseSensor[]}
     * @private
     */
    private attachedSensors;
    /**
     * Controller for aborting asynchronous operations.
     * @type {AbortController}
     * @private
     */
    private abortController;
    /**
     * Signal for aborting asynchronous operations.
     * @type {AbortSignal}
     * @private
     */
    private signal;
    /**
     * The maximum number of channels available for communication.
     * @type {number}
     */
    maxChannels: number;
    /**
     * Indicates whether the device can scan.
     * @type {boolean}
     */
    _canScan: boolean;
    /**
     * Initializes the WebUSBDriver instance, setting up the abort controller and signal.
     */
    constructor();
    /**
     * Checks if a new sensor can be attached to the driver.
     * It verifies whether the current number of used channels is less than the maximum available channels.
     *
     * @returns {Promise<boolean>} Resolves with true if a new sensor can be attached, otherwise false.
     *
     * @example
     * const canAttach = await this.stick.canAttach();
     * if (canAttach) {
     *   console.log("A new sensor can be attached.");
     * } else {
     *   console.log("Cannot attach sensor: Maximum number of channels reached.");
     * }
     */
    canAttach(): Promise<boolean>;
    /**
     * Checks if the device can scan for channels.
     *
     * @returns {Promise<boolean>} Resolves with true if the device can scan, otherwise false.
     */
    canScan(): Promise<boolean>;
    /**
     * Opens a connection to the USB device and initializes the endpoints.
     *
     * @returns {Promise<boolean>} Resolves with true if the device was successfully opened, otherwise false.
     */
    open(): Promise<boolean>;
    /**
     * Continuously reads data from the USB device.
     * Recursively calls itself after each read until aborted.
     *
     * @private
     * @returns {Promise<void>} Resolves when the read loop is completed or aborted.
     */
    private readLoop;
    /**
     * Closes the connection to the USB device and cleans up.
     *
     * @returns {Promise<void>} Resolves when the device is closed.
     */
    close(): Promise<void>;
    /**
     * Cancels the current read loop by aborting the signal.
     */
    cancelReadLoop(): void;
    /**
     * Processes the data received from the USB device.
     *
     * @param {Uint8Array} data The data received from the USB device.
     * @returns {Promise<void>} Resolves when the data has been processed.
     */
    read(data: Uint8Array): Promise<void>;
    /**
     * Writes data to the USB device.
     *
     * @param {Uint8Array} data The data to be sent to the USB device.
     * @returns {Promise<void>} Resolves when the data has been written.
     */
    write(data: Uint8Array): Promise<void>;
    /**
     * Resets the device and channels, and sends a reset message to the system.
     *
     * @returns {Promise<void>} Resolves when the reset is completed.
     */
    reset(): Promise<void>;
    /**
     * Attaches a sensor to the driver and assigns it a channel.
     *
     * @param {BaseSensor} sensor The sensor to attach.
     * @param {boolean} forScan Whether the sensor is being attached for scanning.
     * @returns {Promise<boolean>} Resolves with true if the sensor was successfully attached, otherwise false.
     */
    attach(sensor: BaseSensor, forScan: boolean): Promise<boolean>;
    /**
     * Detaches a sensor from the driver.
     *
     * @param {BaseSensor} sensor The sensor to detach.
     * @returns {Promise<boolean>} Resolves with true if the sensor was successfully detached, otherwise false.
     */
    detach(sensor: BaseSensor): Promise<boolean>;
    /**
     * Checks if a device is currently connected.
     *
     * @returns {Promise<boolean>} Resolves with true if a device is present, otherwise false.
     */
    isPresent(): Promise<boolean>;
    /**
     * Checks if the device is currently scanning.
     *
     * @returns {Promise<boolean>} Resolves with true if the device is scanning, otherwise false.
     */
    isScanning(): Promise<boolean>;
    /**
     * Detaches all sensors from the driver.
     *
     * @private
     * @returns {Promise<void>} Resolves when all sensors have been detached.
     */
    private detachAll;
    /**
     * Concatenates two Uint8Array objects into one.
     *
     * @private
     * @param {Uint8Array} arr1 The first array.
     * @param {Uint8Array} arr2 The second array.
     * @returns {Uint8Array} The concatenated result.
     */
    private concatUint8Arrays;
}
//# sourceMappingURL=webUSBDriver.d.ts.map