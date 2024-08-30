export declare class Messages {
    static BUFFER_INDEX_MSG_LEN: number;
    static BUFFER_INDEX_MSG_TYPE: number;
    static BUFFER_INDEX_CHANNEL_NUM: number;
    static BUFFER_INDEX_MSG_DATA: number;
    static BUFFER_INDEX_EXT_MSG_BEGIN: number;
    static resetSystem(): Buffer;
    static requestMessage(channel: number, messageId: number): Buffer;
    static setNetworkKey(): Buffer;
    static assignChannel(channel: number, type?: string): Buffer;
    static setDevice(channel: number, deviceId: number, deviceType: number, transmissionType: number): Buffer;
    static searchChannel(channel: number, timeout: number): Buffer;
    static setPeriod(channel: number, period: number): Buffer;
    static setFrequency(channel: number, frequency: number): Buffer;
    static setRxExt(): Buffer;
    static libConfig(channel: number, how: number): Buffer;
    static openRxScan(): Buffer;
    static openChannel(channel: number): Buffer;
    static closeChannel(channel: number): Buffer;
    static unassignChannel(channel: number): Buffer;
    static acknowledgedData(channel: number, payload: number[]): Buffer;
    static broadcastData(channel: number, payload: number[]): Buffer;
    static buildMessage(payload?: number[], messageId?: number): Buffer;
    static intToLEHexArray(int: number, numBytes?: number): number[];
    static decimalToHex(d: number, numDigits: number): string;
    static getChecksum(message: number[]): number;
}
