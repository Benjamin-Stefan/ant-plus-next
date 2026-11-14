import { GarminStick3 } from "../../src/core/nodeUsbSticks";
import { BaseSensor } from "../../src/sensors/baseSensor";
import { Constants } from "../../src/types/constants";
import { antMessage } from "./helpers";

// The driver uses `import usb from "usb"`, which Node's ESM loader maps to module.exports.
// ts-jest compiles to CommonJS, where the default import would be undefined, so provide it explicitly.
jest.mock("usb", () => {
    const actual = jest.requireActual<Record<string, unknown>>("usb");
    return { __esModule: true, ...actual, default: actual };
});

type DriverInternals = {
    onData(data: Uint8Array): Promise<void>;
    detachAll(): Promise<void>;
    attachedSensors: BaseSensor[];
};

const internals = (stick: GarminStick3) => stick as unknown as DriverInternals;

describe("NodeUSBDriver", () => {
    it("routes every message of a multi-message USB transfer by its own header", async () => {
        const stick = new GarminStick3();
        const reads: number[][] = [];
        const startup = jest.fn();
        stick.on("read", (data: Uint8Array) => reads.push(Array.from(data)));
        stick.on("startup", startup);

        const broadcast = antMessage(Constants.MESSAGE_CHANNEL_BROADCAST_DATA, 0, [0x00, 0xff, 0xff, 0xff, 0x10, 0x20, 5, 72]);
        const networkKeyAck = antMessage(Constants.MESSAGE_CHANNEL_EVENT, 0, [Constants.MESSAGE_NETWORK_KEY, 0x00]);

        // node-usb hands over a slice of a larger, freshly allocated transfer buffer.
        const transfer = Buffer.alloc(64);
        transfer.set([...broadcast, ...networkKeyAck]);
        await internals(stick).onData(transfer.subarray(0, broadcast.length + networkKeyAck.length));

        expect(reads).toEqual([broadcast]);
        expect(startup).toHaveBeenCalledTimes(1);
    });

    it("detaches every attached sensor", async () => {
        const stick = new GarminStick3();
        stick.maxChannels = 8;

        const sensors = [0, 1, 2].map(() => {
            const sensor = { detach: jest.fn() } as unknown as BaseSensor & { detach: jest.Mock };
            sensor.detach.mockImplementation(async () => {
                await stick.detach(sensor);
            });
            return sensor;
        });
        for (const sensor of sensors) {
            await stick.attach(sensor, false);
        }

        await internals(stick).detachAll();

        for (const sensor of sensors) {
            expect(sensor.detach).toHaveBeenCalledTimes(1);
        }
        expect(internals(stick).attachedSensors).toEqual([]);
        expect(stick.usedChannels).toBe(0);
    });

    it("rejects writes while the device is not open instead of hanging", async () => {
        const stick = new GarminStick3();

        await expect(stick.write(new Uint8Array([0xa4]))).rejects.toThrow("Device is not open.");
    });
});
