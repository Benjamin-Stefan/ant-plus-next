/*
 * ANT+ profile: https://www.thisisant.com/developer/ant-plus/device-profiles/#526_tab
 * Spec sheet: https://www.thisisant.com/resources/heart-rate-monitor/
 */

import { Page, PageState, updateState } from "./heartRateUtils.js";
import { HeartRateSensorState } from "./heartRateSensorState.js";
import { AntPlusSensor } from "../antPlusSensor.js";

/**
 * Represents a Heart Rate sensor.
 * This class extends the AntPlusSensor class to handle specific data related to heart rate monitoring.
 */
export class HeartRateSensor extends AntPlusSensor {
    /**
     * The device type code for Heart Rate sensors.
     * @type {number}
     * @readonly
     */
    static deviceType: number = 120;

    /**
     * Attaches the sensor to a specified ANT+ channel and initializes its state.
     *
     * @public
     * @param {number} channel - The ANT+ channel number used for communication with the sensor.
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @returns {void}
     *
     * @example
     * const sensor = new HeartRateSensor();
     * sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
     */
    public async attach(channel: number, deviceId: number): Promise<void> {
        await super.attachSensor(channel, "receive", deviceId, HeartRateSensor.deviceType, 0, 255, 8070);
        this.state = new HeartRateSensorState(deviceId);
    }

    /**
     * The current state of the Heart Rate sensor.
     * @private
     * @type {HeartRateSensorState}
     */
    private state!: HeartRateSensorState;

    /**
     * Represents the page information used in communication with the sensor.
     * @private
     * @type {Page}
     * @default { oldPage: -1, pageState: PageState.INIT_PAGE }
     */
    private page: Page = {
        oldPage: -1,
        pageState: PageState.INIT_PAGE,
    };

    /**
     * Updates the state of the sensor based on incoming data.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @param {Buffer} data - The raw data buffer received from the sensor.
     * @returns {void}
     *
     * @example
     * const dataBuffer = getDataFromSensor(); // assume this function gets data from a sensor
     * sensor.updateState(12345, dataBuffer);
     */
    protected updateState(deviceId: number, data: Buffer) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, this.page, data);
    }
}
