import { updateState } from "../../src/sensors/muscleOxygen/muscleOxygenUtils";
import { MuscleOxygenSensorState } from "../../src/sensors/muscleOxygen/muscleOxygenSensorState";
import { MuscleOxygenSensor } from "../../src/sensors/muscleOxygen/muscleOxygenSensor";
import { Constants } from "../../src/types/constants";
import { antMessage } from "./helpers";

describe("Muscle oxygen battery status page (0x52)", () => {
    it("decodes voltage, status and operating time from a plain 13-byte message", () => {
        const sensor = { emit: jest.fn() } as unknown as MuscleOxygenSensor;
        const state = new MuscleOxygenSensorState(1234);

        // Byte 2 battery id, bytes 3-5 operating time, byte 6 fractional voltage (1/256 V),
        // byte 7: bit 7 time resolution (1 = 2 s), bits 4-6 status (1 = new), bits 0-3 coarse voltage.
        const message = new Uint8Array(antMessage(Constants.MESSAGE_CHANNEL_BROADCAST_DATA, 0, [0x52, 0xff, 0x00, 0x10, 0x00, 0x00, 0x80, 0x93]));
        expect(message.byteLength).toBe(13);

        updateState(sensor, state, new DataView(message.buffer));

        expect(state.BatteryVoltage).toBe(3.5);
        expect(state.BatteryStatus).toBe("New");
        expect(state.OperatingTime).toBe(32);
    });
});
