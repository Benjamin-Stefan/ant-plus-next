import { Device, OutEndpoint, InEndpoint } from "usb";

/**
 * Interface for a USB device communication wrapper.
 * Provides methods to manage USB devices and handle data transfer operations.
 *
 * @interface IUSBWrapper
 */
export interface IUSBWrapper {
    /**
     * Retrieves a list of available USB devices.
     *
     * @returns {Promise<Device[]>} A promise that resolves to an array of USB devices.
     *
     * @example
     * ```typescript
     * const devices = await usbWrapper.getDevices();
     * console.log(devices);
     * ```
     */
    getDevices(): Promise<Device[]>;

    /**
     * Opens a connection to the specified USB device.
     *
     * @param {Device} device - The USB device to open.
     * @returns {Promise<void>} A promise that resolves when the device is successfully opened.
     *
     * @example
     * ```typescript
     * const device = devices[0];
     * await usbWrapper.open(device);
     * ```
     */
    open(device: Device): Promise<void>;

    /**
     * Closes the connection to the specified USB device.
     *
     * @param {Device} device - The USB device to close.
     * @returns {Promise<void>} A promise that resolves when the device is successfully closed.
     *
     * @example
     * ```typescript
     * await usbWrapper.close(device);
     * ```
     */
    close(device: Device): Promise<void>;

    /**
     * Transfers data to an output endpoint of the USB device.
     *
     * @param {OutEndpoint} endpoint - The output endpoint to which data will be transferred.
     * @param {Buffer} data - The data buffer to transfer.
     * @returns {Promise<void>} A promise that resolves when the data is successfully transferred.
     *
     * @example
     * ```typescript
     * const data = Buffer.from([0x01, 0x02, 0x03]);
     * await usbWrapper.transferOut(outEndpoint, data);
     * ```
     */
    transferOut(endpoint: OutEndpoint, data: Buffer): Promise<void>;

    /**
     * Transfers data from an input endpoint of the USB device.
     *
     * @param {InEndpoint} endpoint - The input endpoint from which data will be transferred.
     * @param {number} length - The length of data to read.
     * @returns {Promise<Buffer>} A promise that resolves to a buffer containing the received data.
     *
     * @example
     * ```typescript
     * const receivedData = await usbWrapper.transferIn(inEndpoint, 64);
     * console.log(receivedData);
     * ```
     */
    transferIn(endpoint: InEndpoint, length: number): Promise<Buffer>;
}
