import { Constants } from "../../src/types/constants";
import { HeartRateSensor } from "../../src/sensors/heartRate/heartRateSensor";
import { HeartRateScanner } from "../../src/sensors/heartRate/heartRateScanner";
import { HeartRateSensorState } from "../../src/sensors/heartRate/heartRateSensorState";
import { FitnessEquipmentSensor } from "../../src/sensors/fitnessEquipment/fitnessEquipmentSensor";
import { antMessage, atOffset, FakeStick, flush } from "./helpers";

describe("BaseSensor", () => {
    let stick: FakeStick;

    beforeEach(() => {
        stick = new FakeStick();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("decodes a message that does not start at offset 0 of its buffer", async () => {
        const sensor = new HeartRateSensor(stick.asDriver());
        await sensor.attach(0, 1234);

        const received: HeartRateSensorState[] = [];
        sensor.on("heartRateData", (state: HeartRateSensorState) => received.push({ ...state }));

        // Default HRM page: bytes 4-5 beat time, byte 6 beat count, byte 7 computed heart rate.
        stick.emit("read", atOffset(antMessage(Constants.MESSAGE_CHANNEL_BROADCAST_DATA, 0, [0x00, 0xff, 0xff, 0xff, 0x10, 0x20, 5, 72])));
        await flush();

        expect(received).toHaveLength(1);
        expect(received[0].ComputedHeartRate).toBe(72);
        expect(received[0].BeatCount).toBe(5);
        expect(received[0].BeatTime).toBe(0x2010);
    });

    it("emits eventData for channel events the status handler does not handle", async () => {
        const sensor = new HeartRateSensor(stick.asDriver());
        await sensor.attach(0, 1234);

        const events: unknown[] = [];
        sensor.on("eventData", (event) => events.push(event));

        stick.emit("read", atOffset(antMessage(Constants.MESSAGE_CHANNEL_EVENT, 0, [Constants.MESSAGE_RF, Constants.EVENT_RX_SEARCH_TIMEOUT])));
        await flush();

        expect(events).toEqual([{ message: Constants.MESSAGE_RF, code: Constants.EVENT_RX_SEARCH_TIMEOUT }]);
    });

    it("does not emit eventData for handled channel events", async () => {
        const sensor = new HeartRateSensor(stick.asDriver());
        await sensor.attach(0, 1234);

        const events: unknown[] = [];
        sensor.on("eventData", (event) => events.push(event));

        stick.emit("read", new Uint8Array(antMessage(Constants.MESSAGE_CHANNEL_EVENT, 0, [Constants.MESSAGE_RF, Constants.EVENT_CHANNEL_CLOSED])));
        await flush();

        expect(events).toEqual([]);
    });

    it("reports a failing write in the status handler instead of leaving the promise unhandled", async () => {
        const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
        const sensor = new HeartRateSensor(stick.asDriver());
        await sensor.attach(0, 1234);

        // A closed channel makes the status handler unassign it, which writes to the stick.
        stick.failWrites = true;
        stick.emit("read", new Uint8Array(antMessage(Constants.MESSAGE_CHANNEL_EVENT, 0, [Constants.MESSAGE_RF, Constants.EVENT_CHANNEL_CLOSED])));
        await flush();

        expect(errorSpy).toHaveBeenCalledWith(expect.objectContaining({ message: "write failed" }));
    });

    it("refuses to scan when the stick has no scan capability", async () => {
        stick.scanSupported = false;
        const scanner = new HeartRateScanner(stick.asDriver());

        await expect(scanner.scan()).rejects.toThrow("Stick cannot scan");
    });

    it("sends target power above 1000 W (spec allows up to 4000 W)", async () => {
        const sensor = new FitnessEquipmentSensor(stick.asDriver());
        await sensor.attach(0, 1234);
        stick.written = [];

        await sensor.setTargetPower(2000);

        // Page 0x31, target power in 0.25 W units in bytes 6-7 (little-endian): 8000 = 0x1F40.
        const payload = Array.from(stick.written[0].subarray(4, 12));
        expect(payload).toEqual([0x31, 0xff, 0xff, 0xff, 0xff, 0xff, 0x40, 0x1f]);
    });
});
