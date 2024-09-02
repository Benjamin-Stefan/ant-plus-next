/**
 * A collection of constants used in the ANT+ protocol for wireless communication.
 * These constants define various message types, configuration parameters, events,
 * and capabilities used to control and manage channels, transmit data, and handle
 * protocol-specific operations.
 *
 * @class Constants
 * @see {@link https://www.thisisant.com/developer/resources/downloads#documents} for the ANT+ protocol documentation.
 */
export class Constants {
    // Message Types
    /**
     * Represents a generic Radio Frequency (RF) message type used in the ANT+ protocol.
     * @type {number}
     */
    static readonly MESSAGE_RF: number = 0x01;

    /**
     * Represents a synchronization message used to align data transmission.
     * @type {number}
     */
    static readonly MESSAGE_TX_SYNC: number = 0xa4;

    /**
     * Default network number used by ANT+ devices.
     * @type {number}
     */
    static readonly DEFAULT_NETWORK_NUMBER: number = 0x00;

    // Configuration Messages
    /**
     * Unassigns a channel, making it available for reassignment or closing.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_UNASSIGN: number = 0x41;

    /**
     * Assigns a channel with a specific type and network number.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_ASSIGN: number = 0x42;

    /**
     * Sets the unique identifier for a channel.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_ID: number = 0x51;

    /**
     * Configures the message period for a channel, defining the frequency of data messages.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_PERIOD: number = 0x43;

    /**
     * Sets the timeout period for channel searching operations.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_SEARCH_TIMEOUT: number = 0x44;

    /**
     * Configures the frequency of the channel in the RF spectrum.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_FREQUENCY: number = 0x45;

    /**
     * Sets the transmission power level for a specific channel.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_TX_POWER: number = 0x60;

    /**
     * Sets the network key for secure communication between ANT+ devices.
     * @type {number}
     */
    static readonly MESSAGE_NETWORK_KEY: number = 0x46;

    /**
     * Defines the transmit power for the device.
     * @type {number}
     */
    static readonly MESSAGE_TX_POWER: number = 0x47;

    /**
     * Enables proximity search for devices within a specified range.
     * @type {number}
     */
    static readonly MESSAGE_PROXIMITY_SEARCH: number = 0x71;

    /**
     * Enables extended receive mode for handling additional data.
     * @type {number}
     */
    static readonly MESSAGE_ENABLE_RX_EXT: number = 0x66;

    /**
     * Configures the library settings for ANT+ communication.
     * @type {number}
     */
    static readonly MESSAGE_LIB_CONFIG: number = 0x6e;

    /**
     * Opens a channel for RX scan mode, allowing the device to search for broadcasts.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_OPEN_RX_SCAN: number = 0x5b;

    // Notifications
    /**
     * Indicates a startup event, typically sent after a device reset or initialization.
     * @type {number}
     */
    static readonly MESSAGE_STARTUP: number = 0x6f;

    // Control Messages
    /**
     * Resets the ANT+ device system.
     * @type {number}
     */
    static readonly MESSAGE_SYSTEM_RESET: number = 0x4a;

    /**
     * Opens a communication channel for data transmission.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_OPEN: number = 0x4b;

    /**
     * Closes a previously opened communication channel.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_CLOSE: number = 0x4c;

    /**
     * Requests a specific operation or status update for a channel.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_REQUEST: number = 0x4d;

    // Data Messages
    /**
     * Transmits broadcast data over an open channel.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_BROADCAST_DATA: number = 0x4e;

    /**
     * Sends acknowledged data that requires a response confirmation.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_ACKNOWLEDGED_DATA: number = 0x4f;

    /**
     * Sends burst data packets over a channel, useful for high-throughput scenarios.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_BURST_DATA: number = 0x50;

    // Channel Event Messages
    /**
     * Represents various events occurring on a channel, such as RX or TX completion.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_EVENT: number = 0x40;

    // Requested Response Messages
    /**
     * Queries the status of a channel, returning details like state or assigned ID.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_STATUS: number = 0x52;

    /**
     * Retrieves the version of the ANT+ device software or protocol.
     * @type {number}
     */
    static readonly MESSAGE_VERSION: number = 0x3e;

    /**
     * Retrieves the capabilities of the ANT+ device, such as supported features.
     * @type {number}
     */
    static readonly MESSAGE_CAPABILITIES: number = 0x54;

    /**
     * Retrieves the unique serial number of the ANT+ device.
     * @type {number}
     */
    static readonly MESSAGE_SERIAL_NUMBER: number = 0x61;

    // Message Parameters
    /**
     * Channel type for two-way data reception.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_TWOWAY_RECEIVE: number = 0x00;

    /**
     * Channel type for two-way data transmission.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_TWOWAY_TRANSMIT: number = 0x10;

    /**
     * Channel type for shared data reception.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_SHARED_RECEIVE: number = 0x20;

    /**
     * Channel type for shared data transmission.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_SHARED_TRANSMIT: number = 0x30;

    /**
     * Channel type for one-way data reception.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_ONEWAY_RECEIVE: number = 0x40;

    /**
     * Channel type for one-way data transmission.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_ONEWAY_TRANSMIT: number = 0x50;

    /**
     * Radio transmit power level: -20 dB.
     * @type {number}
     */
    static readonly RADIO_TX_POWER_MINUS20DB: number = 0x00;

    /**
     * Radio transmit power level: -10 dB.
     * @type {number}
     */
    static readonly RADIO_TX_POWER_MINUS10DB: number = 0x01;

    /**
     * Radio transmit power level: 0 dB.
     * @type {number}
     */
    static readonly RADIO_TX_POWER_0DB: number = 0x02;

    /**
     * Radio transmit power level: +4 dB.
     * @type {number}
     */
    static readonly RADIO_TX_POWER_PLUS4DB: number = 0x03;

    // Event Codes
    /**
     * No error occurred in the response.
     * @type {number}
     */
    static readonly RESPONSE_NO_ERROR: number = 0x00;

    /**
     * RX search timed out.
     * @type {number}
     */
    static readonly EVENT_RX_SEARCH_TIMEOUT: number = 0x01;

    /**
     * RX failed.
     * @type {number}
     */
    static readonly EVENT_RX_FAIL: number = 0x02;

    /**
     * TX completed successfully.
     * @type {number}
     */
    static readonly EVENT_TX: number = 0x03;

    /**
     * Transfer RX failed.
     * @type {number}
     */
    static readonly EVENT_TRANSFER_RX_FAILED: number = 0x04;

    /**
     * Transfer TX completed successfully.
     * @type {number}
     */
    static readonly EVENT_TRANSFER_TX_COMPLETED: number = 0x05;

    /**
     * Transfer TX failed.
     * @type {number}
     */
    static readonly EVENT_TRANSFER_TX_FAILED: number = 0x06;

    /**
     * Channel was closed.
     * @type {number}
     */
    static readonly EVENT_CHANNEL_CLOSED: number = 0x07;

    /**
     * RX failed; channel will go to search.
     * @type {number}
     */
    static readonly EVENT_RX_FAIL_GO_TO_SEARCH: number = 0x08;

    /**
     * Channel collision detected.
     * @type {number}
     */
    static readonly EVENT_CHANNEL_COLLISION: number = 0x09;

    /**
     * Transfer TX started.
     * @type {number}
     */
    static readonly EVENT_TRANSFER_TX_START: number = 0x0a;

    // Error and State Codes
    /**
     * Channel is in the wrong state for the requested operation.
     * @type {number}
     */
    static readonly CHANNEL_IN_WRONG_STATE: number = 0x15;

    /**
     * Channel is not opened.
     * @type {number}
     */
    static readonly CHANNEL_NOT_OPENED: number = 0x16;

    /**
     * Channel ID is not set.
     * @type {number}
     */
    static readonly CHANNEL_ID_NOT_SET: number = 0x18;

    /**
     * Command to close all channels.
     * @type {number}
     */
    static readonly CLOSE_ALL_CHANNELS: number = 0x19;

    /**
     * Transfer is currently in progress.
     * @type {number}
     */
    static readonly TRANSFER_IN_PROGRESS: number = 0x1f;

    /**
     * Transfer sequence number error.
     * @type {number}
     */
    static readonly TRANSFER_SEQUENCE_NUMBER_ERROR: number = 0x20;

    /**
     * Transfer is in an error state.
     * @type {number}
     */
    static readonly TRANSFER_IN_ERROR: number = 0x21;

    /**
     * Message size exceeds allowed limit.
     * @type {number}
     */
    static readonly MESSAGE_SIZE_EXCEEDS_LIMIT: number = 0x27;

    /**
     * Invalid message received.
     * @type {number}
     */
    static readonly INVALID_MESSAGE: number = 0x28;

    /**
     * Invalid network number provided.
     * @type {number}
     */
    static readonly INVALID_NETWORK_NUMBER: number = 0x29;

    /**
     * Invalid list ID provided.
     * @type {number}
     */
    static readonly INVALID_LIST_ID: number = 0x30;

    /**
     * Invalid scan TX channel specified.
     * @type {number}
     */
    static readonly INVALID_SCAN_TX_CHANNEL: number = 0x31;

    /**
     * Invalid parameter provided for a message or operation.
     * @type {number}
     */
    static readonly INVALID_PARAMETER_PROVIDED: number = 0x33;

    /**
     * Event queue overflow occurred.
     * @type {number}
     */
    static readonly EVENT_QUEUE_OVERFLOW: number = 0x35;

    /**
     * USB string write operation failed.
     * @type {number}
     */
    static readonly USB_STRING_WRITE_FAIL: number = 0x70;

    // Channel States
    /**
     * Channel is unassigned.
     * @type {number}
     */
    static readonly CHANNEL_STATE_UNASSIGNED: number = 0x00;

    /**
     * Channel is assigned.
     * @type {number}
     */
    static readonly CHANNEL_STATE_ASSIGNED: number = 0x01;

    /**
     * Channel is searching for another device.
     * @type {number}
     */
    static readonly CHANNEL_STATE_SEARCHING: number = 0x02;

    /**
     * Channel is tracking another device.
     * @type {number}
     */
    static readonly CHANNEL_STATE_TRACKING: number = 0x03;

    // Capability Flags
    /**
     * Device has no receive channels.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_RECEIVE_CHANNELS: number = 0x01;

    /**
     * Device has no transmit channels.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_TRANSMIT_CHANNELS: number = 0x02;

    /**
     * Device has no receive message capability.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_RECEIVE_MESSAGES: number = 0x04;

    /**
     * Device has no transmit message capability.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_TRANSMIT_MESSAGES: number = 0x08;

    /**
     * Device has no acknowledged message capability.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_ACKNOWLEDGED_MESSAGES: number = 0x10;

    /**
     * Device has no burst message capability.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_BURST_MESSAGES: number = 0x20;

    /**
     * Device supports network communication.
     * @type {number}
     */
    static readonly CAPABILITIES_NETWORK_ENABLED: number = 0x02;

    /**
     * Device serial number feature enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_SERIAL_NUMBER_ENABLED: number = 0x08;

    /**
     * Per-channel transmit power adjustment enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_PER_CHANNEL_TX_POWER_ENABLED: number = 0x10;

    /**
     * Low priority search capability enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_LOW_PRIORITY_SEARCH_ENABLED: number = 0x20;

    /**
     * Script feature enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_SCRIPT_ENABLED: number = 0x40;

    /**
     * Search list capability enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_SEARCH_LIST_ENABLED: number = 0x80;

    /**
     * LED feature enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_LED_ENABLED: number = 0x01;

    /**
     * Extended messaging enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_EXT_MESSAGE_ENABLED: number = 0x02;

    /**
     * Scan mode enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_SCAN_MODE_ENABLED: number = 0x04;

    /**
     * Proximity search capability enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_PROX_SEARCH_ENABLED: number = 0x10;

    /**
     * Extended channel assignment enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_EXT_ASSIGN_ENABLED: number = 0x20;

    /**
     * File share (ANT-FS) feature enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_FS_ANTFS_ENABLED: number = 0x40;

    // Miscellaneous
    /**
     * Special value indicating that the timeout for an operation is set to never expire.
     * @type {number}
     */
    static readonly TIMEOUT_NEVER: number = 0xff;
}
