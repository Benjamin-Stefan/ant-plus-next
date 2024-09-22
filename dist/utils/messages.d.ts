export declare class Messages {
    static BUFFER_INDEX_MSG_LEN: number;
    static BUFFER_INDEX_MSG_TYPE: number;
    static BUFFER_INDEX_CHANNEL_NUM: number;
    static BUFFER_INDEX_MSG_DATA: number;
    static BUFFER_INDEX_EXT_MSG_BEGIN: number;
    static resetSystem(): Uint8Array;
    static requestMessage(channel: number, messageId: number): Uint8Array;
    static setNetworkKey(): Uint8Array;
    static assignChannel(channel: number, type?: string): Uint8Array;
    static setDevice(channel: number, deviceId: number, deviceType: number, transmissionType: number): Uint8Array;
    static searchChannel(channel: number, timeout: number): Uint8Array;
    static setPeriod(channel: number, period: number): Uint8Array;
    static setFrequency(channel: number, frequency: number): Uint8Array;
    static setRxExt(): Uint8Array;
    static libConfig(channel: number, how: number): Uint8Array;
    static openRxScan(): Uint8Array;
    static openChannel(channel: number): Uint8Array;
    static closeChannel(channel: number): Uint8Array;
    static unassignChannel(channel: number): Uint8Array;
    static acknowledgedData(channel: number, payload: number[]): Uint8Array;
    static broadcastData(channel: number, payload: number[]): Uint8Array;
    static buildMessage(payload?: number[], messageId?: number): Uint8Array;
    static intToLEHexArray(int: number, numBytes?: number): number[];
    static decimalToHex(d: number, numDigits: number): string;
    static getChecksum(message: number[]): number;
}
//# sourceMappingURL=messages.d.ts.map