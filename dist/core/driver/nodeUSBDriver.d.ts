import { BaseSensor } from "../../sensors/baseSensor";
import { DebugOptions } from "../../types/debugOptions";
import { USBDriverBase } from "../../types/usbDriverBase";
import EventEmitter from "events";
/**
 * NodeUSBDriver class handles the connection and communication with USB devices using the node-usb library.
 * It manages device setup, communication, sensor attachment, and data processing.
 *
 * This class extends EventEmitter to handle events and implements the USBDriverBase interface.
 *
 * @extends EventEmitter
 * @implements USBDriverBase
 */
export declare class NodeUSBDriver extends EventEmitter implements USBDriverBase {
    private idVendor;
    private idProduct;
    /**
     * List of USB devices currently in use.
     * Tracks all connected devices used by this driver.
     *
     * @type {usb.Device[]}
     * @private
     */
    private static deviceInUse;
    /**
     * The USB device instance.
     * Holds a reference to the connected USB device, if any.
     *
     * @type {usb.Device|undefined}
     * @private
     */
    private device;
    /**
     * The USB interface of the device.
     * Used to interact with the endpoints of the connected USB device.
     *
     * @type {usb.Interface|undefined}
     * @private
     */
    private iface;
    /**
     * Indicates if the kernel driver was detached.
     * Marks whether the kernel driver was detached during setup for re-attachment upon disconnection.
     *
     * @type {boolean}
     * @private
     */
    private detachedKernelDriver;
    /**
     * The input endpoint for reading data.
     * Used for receiving data from the USB device.
     *
     * @type {(usb.InEndpoint & EventEmitter)|undefined}
     * @private
     */
    private inEndpoint;
    /**
     * The output endpoint for sending data.
     * Used for sending data to the USB device.
     *
     * @type {(usb.OutEndpoint & EventEmitter)|undefined}
     * @private
     */
    private outEndpoint;
    /**
     * Stores leftover data from previous reads.
     * Used to buffer partial data when reading from the USB device.
     *
     * @type {Uint8Array|undefined}
     * @private
     */
    private leftover;
    /**
     * The number of channels currently used.
     * Tracks how many channels are actively being used.
     *
     * @type {number}
     */
    usedChannels: number;
    /**
     * List of attached sensors.
     * Holds the list of sensors currently connected to the USB driver.
     *
     * @type {BaseSensor[]}
     * @private
     */
    private attachedSensors;
    /**
     * The maximum number of channels available for communication.
     * Defines the total number of channels the device can handle.
     *
     * @type {number}
     */
    maxChannels: number;
    /**
     * Indicates if the device can scan for channels.
     * Represents whether the USB device has scanning capabilities.
     *
     * @type {boolean}
     */
    _canScan: boolean;
    /**
     * Defines whether to throw LibUSB exceptions when errors occur during USB communication.
     * Default value is set to `false`.
     *
     * @type {boolean}
     */
    throwLibUSBException: boolean;
    /**
     * Creates an instance of NodeUSBDriver.
     * Initializes the driver with vendor ID, product ID, and optional debug options.
     *
     * @param {number} idVendor - The vendor ID of the USB device.
     * @param {number} idProduct - The product ID of the USB device.
     * @param {DebugOptions} [debugOptions={}] - Optional debug options for USB operations.
     *                                          Includes usbDebugLevel and throwLibUSBException.
     *
     * @example
     * const driver = new NodeUSBDriver(0x1234, 0x5678, { usbDebugLevel: 2, throwLibUSBException: true });
     */
    constructor(idVendor: number, idProduct: number, debugOptions?: DebugOptions);
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
     * Opens a connection to the USB device and sets up endpoints for communication.
     *
     * @returns {Promise<boolean>} Resolves with true if the device is successfully opened, otherwise false.
     * @example
     * const driver = new NodeUSBDriver(1234, 5678);
     * driver.open().then((result) => {
     *   if (result) {
     *     console.log("Device successfully opened");
     *   } else {
     *     console.error("Failed to open device");
     *   }
     * });
     */
    open(): Promise<boolean>;
    /**
     * Closes the connection to the USB device and releases the interface.
     *
     * @returns {Promise<void>} Resolves when the device is closed.
     * @example
     * const driver = new NodeUSBDriver(1234, 5678);
     * driver.open().then(() => {
     *   driver.close().then(() => console.log("Device closed"));
     * });
     */
    close(): Promise<void>;
    /**
     * Reads data from the USB device and processes it.
     *
     * @param {Uint8Array} data - The data received from the USB device.
     * @returns {Promise<void>} Resolves when the data has been processed.
     * @example
     * const data = new Uint8Array([0x01, 0x02, 0x03]);
     * driver.read(data).then(() => console.log("Data processed"));
     */
    read(data: Uint8Array): Promise<void>;
    /**
     * Writes data to the USB device.
     *
     * @param {Uint8Array} data - The data to be sent to the USB device.
     * @returns {Promise<void>} Resolves when the data has been written.
     * @example
     * const data = new Uint8Array([0x01, 0x02, 0x03]);
     * driver.write(data).then(() => console.log("Data sent"));
     */
    write(data: Uint8Array): Promise<void>;
    /**
     * Resets the device and its channels, and sends a reset message to the system.
     *
     * @returns {Promise<void>} Resolves when the reset is completed.
     * @example
     * driver.reset().then(() => console.log("Device reset"));
     */
    reset(): Promise<void>;
    /**
     * Attaches a sensor to the driver and assigns it a channel.
     *
     * @param {BaseSensor} sensor - The sensor to attach.
     * @param {boolean} forScan - Whether the sensor is being attached for scanning.
     * @returns {Promise<boolean>} Resolves with true if the sensor was successfully attached, otherwise false.
     * @example
     * const sensor = new BaseSensor();
     * driver.attach(sensor, true).then((attached) => {
     *   if (attached) console.log("Sensor attached");
     * });
     */
    attach(sensor: BaseSensor, forScan: boolean): Promise<boolean>;
    /**
     * Detaches a sensor from the driver.
     *
     * @param {BaseSensor} sensor - The sensor to detach.
     * @returns {Promise<boolean>} Resolves with true if the sensor was successfully detached, otherwise false.
     * @example
     * const sensor = new BaseSensor();
     * driver.detach(sensor).then((detached) => {
     *   if (detached) console.log("Sensor detached");
     * });
     */
    detach(sensor: BaseSensor): Promise<boolean>;
    /**
     * Checks if a USB device is present.
     *
     * @returns {Promise<boolean>} Resolves with true if a device is present, otherwise false.
     */
    isPresent(): Promise<boolean>;
    /**
     * Checks if the driver is currently scanning.
     *
     * @returns {Promise<boolean>} Resolves with true if the driver is scanning, otherwise false.
     */
    isScanning(): Promise<boolean>;
    /**
     * Retrieves a list of USB devices matching the specified vendor and product IDs.
     *
     * @private
     * @returns {usb.usb.Device[]} An array of USB devices that match the specified criteria.
     */
    private getDevices;
    /**
     * Detaches all sensors from the USB driver.
     *
     * @private
     * @returns {Promise<void>} Resolves when all sensors are detached.
     */
    private detachAll;
    /**
     * Handles data received from the USB device and processes the messages.
     *
     * @private
     * @param {Uint8Array} data - The data received from the USB device.
     * @returns {Promise<void>} Resolves when the data has been processed.
     */
    private onData;
    /**
     * Concatenates two Uint8Array objects into one.
     *
     * @private
     * @param {Uint8Array} arr1 - The first array.
     * @param {Uint8Array} arr2 - The second array.
     * @returns {Uint8Array} The concatenated result.
     */
    private concatUint8Arrays;
}
//# sourceMappingURL=nodeUSBDriver.d.ts.map