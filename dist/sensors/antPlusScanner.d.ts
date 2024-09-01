import { AntPlusBaseSensor } from "./antPlusBaseSensor.js";
import { USBDriver } from "../core/usbDriver.js";
/**
 * Abstract base class for scanning and decoding data from ANT+ sensors.
 * This class provides methods to scan for sensors, handle sensor data, and manage sensor states.
 */
export declare abstract class AntPlusScanner extends AntPlusBaseSensor {
    /**
     * Returns the type of device being scanned for.
     *
     * @protected
     * @returns {number} The numeric code representing the device type.
     */
    protected abstract deviceType(): number;
    /**
     * Creates a new state for the device if it does not already exist.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the device.
     */
    protected abstract createStateIfNew(deviceId: number): void;
    /**
     * Updates the RSSI (Received Signal Strength Indicator) and the signal threshold for the specified device.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the device.
     * @param {number} rssi - The received signal strength indicator of the device.
     * @param {number} threshold - The signal threshold value for the device.
     */
    protected abstract updateRssiAndThreshold(deviceId: number, rssi: number, threshold: number): void;
    /**
     * Constructs an instance of the AntPlusScanner class.
     *
     * @param {USBDriver} stick - The USB driver instance used for communication with the ANT+ stick.
     */
    constructor(stick: USBDriver);
    /**
     * Initiates a scan for ANT+ sensors by receiving broadcast messages.
     *
     * @public
     * @returns {Promise<void>} A promise that resolves when the scanning process is complete.
     *
     * @example
     * // Example usage:
     * const scanner = new AntPlusScanner();
     * scanner.scan();
     */
    scan(): void;
    /**
     * Unsupported method for attaching to a sensor. Throws an error when called.
     *
     * @protected
     * @throws {Error} Always throws an error indicating that attaching is unsupported.
     */
    protected attach(): void;
    /**
     * Unsupported method for sending data to a sensor. Throws an error when called.
     *
     * @protected
     * @throws {Error} Always throws an error indicating that sending is unsupported.
     */
    protected send(): void;
    /**
     * Decodes the incoming data from the ANT+ sensors and updates the sensor state.
     *
     * @private
     * @param {Buffer} data - The raw data buffer received from the ANT+ sensor.
     * @returns {void}
     *
     * @example
     * // Example usage:
     * const dataBuffer = getDataFromSensor(); // assume this function gets data from a sensor
     * decodeData(dataBuffer);
     */
    private decodeData;
}
