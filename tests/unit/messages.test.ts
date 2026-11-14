import { Messages } from "../../src/utils/messages";

const xorAll = (bytes: Iterable<number>) => Array.from(bytes).reduce((acc, byte) => acc ^ byte, 0);

describe("Messages.getChecksum", () => {
    it("keeps an intermediate XOR value of 0xFF", () => {
        // 0xA4 ^ 0x5B === 0xFF; a modulo 0xFF used to turn this into 0.
        expect(Messages.getChecksum([0xa4, 0x5b])).toBe(0xff);
    });

    it("builds messages whose bytes XOR to zero for every device id", () => {
        for (let deviceId = 0; deviceId <= 0xffff; deviceId += 7) {
            const message = Messages.setDevice(0, deviceId, 120, 0);
            expect(xorAll(message)).toBe(0);
        }
    });
});
