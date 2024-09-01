/**
 * Represents the state of a Bicycle Power sensor.
 * Stores various metrics and calculated values related to bicycle power, such as pedal power, cadence, torque, and power.
 */
export class BicyclePowerSensorState {
    /**
     * Creates an instance of BicyclePowerSensorState.
     *
     * @param {number} deviceId - The unique identifier of the sensor device.
     */
    constructor(deviceId: number) {
        this.DeviceId = deviceId;
    }

    /**
     * The unique identifier of the sensor device.
     * @type {number}
     */
    DeviceId: number;

    /**
     * The total pedal power percentage.
     * Represents the percentage of power produced by the pedal strokes.
     * @type {number | undefined}
     */
    PedalPower?: number;

    /**
     * The power percentage from the right pedal.
     * If available, represents the contribution of the right pedal to the total power.
     * @type {number | undefined}
     */
    RightPedalPower?: number;

    /**
     * The power percentage from the left pedal.
     * If available, represents the contribution of the left pedal to the total power.
     * @type {number | undefined}
     */
    LeftPedalPower?: number;

    /**
     * The cadence value in revolutions per minute (RPM).
     * Represents the number of pedal revolutions per minute.
     * @type {number | undefined}
     */
    Cadence?: number;

    /**
     * The accumulated power in watts.
     * Represents the total power output accumulated over time.
     * @type {number | undefined}
     */
    AccumulatedPower?: number;

    /**
     * The current power output in watts.
     * Represents the instantaneous power output of the cyclist.
     * @type {number | undefined}
     */
    Power?: number;

    /**
     * The offset value used for torque calculations.
     * @type {number}
     * @default 0
     */
    offset: number = 0;

    /**
     * The event count value.
     * Represents the number of events recorded by the sensor.
     * @type {number | undefined}
     */
    EventCount?: number;

    /**
     * The timestamp of the last recorded event.
     * Represents the time at which the last event was recorded.
     * @type {number | undefined}
     */
    TimeStamp?: number;

    /**
     * The slope value used for torque calculations.
     * Represents the slope or gradient used in the torque computation.
     * @type {number | undefined}
     */
    Slope?: number;

    /**
     * The timestamp for the last torque tick.
     * Represents the time at which the last torque measurement was recorded.
     * @type {number | undefined}
     */
    TorqueTicksStamp?: number;

    /**
     * The calculated cadence in RPM.
     * Represents the calculated cadence based on sensor data.
     * @type {number | undefined}
     */
    CalculatedCadence?: number;

    /**
     * The calculated torque in Newton meters (Nm).
     * Represents the torque calculated from sensor data.
     * @type {number | undefined}
     */
    CalculatedTorque?: number;

    /**
     * The calculated power in watts.
     * Represents the power calculated from torque and cadence data.
     * @type {number | undefined}
     */
    CalculatedPower?: number;
}
