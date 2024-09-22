/**
 * A collection of constants used in the ANT+ protocol for wireless communication.
 * These constants define various message types, configuration parameters, events,
 * and capabilities used to control and manage channels, transmit data, and handle
 * protocol-specific operations.
 *
 * @class Constants
 * @see {@link https://www.thisisant.com/developer/resources/downloads#documents} for the ANT+ protocol documentation.
 */
export declare class Constants {
    /**
     * Represents a generic Radio Frequency (RF) message type used in the ANT+ protocol.
     * @type {number}
     */
    static readonly MESSAGE_RF: number;
    /**
     * Represents a synchronization message used to align data transmission.
     * @type {number}
     */
    static readonly MESSAGE_TX_SYNC: number;
    /**
     * Default network number used by ANT+ devices.
     * @type {number}
     */
    static readonly DEFAULT_NETWORK_NUMBER: number;
    /**
     * Unassigns a channel, making it available for reassignment or closing.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_UNASSIGN: number;
    /**
     * Assigns a channel with a specific type and network number.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_ASSIGN: number;
    /**
     * Sets the unique identifier for a channel.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_ID: number;
    /**
     * Configures the message period for a channel, defining the frequency of data messages.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_PERIOD: number;
    /**
     * Sets the timeout period for channel searching operations.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_SEARCH_TIMEOUT: number;
    /**
     * Configures the frequency of the channel in the RF spectrum.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_FREQUENCY: number;
    /**
     * Sets the transmission power level for a specific channel.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_TX_POWER: number;
    /**
     * Sets the network key for secure communication between ANT+ devices.
     * @type {number}
     */
    static readonly MESSAGE_NETWORK_KEY: number;
    /**
     * Defines the transmit power for the device.
     * @type {number}
     */
    static readonly MESSAGE_TX_POWER: number;
    /**
     * Enables proximity search for devices within a specified range.
     * @type {number}
     */
    static readonly MESSAGE_PROXIMITY_SEARCH: number;
    /**
     * Enables extended receive mode for handling additional data.
     * @type {number}
     */
    static readonly MESSAGE_ENABLE_RX_EXT: number;
    /**
     * Configures the library settings for ANT+ communication.
     * @type {number}
     */
    static readonly MESSAGE_LIB_CONFIG: number;
    /**
     * Opens a channel for RX scan mode, allowing the device to search for broadcasts.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_OPEN_RX_SCAN: number;
    /**
     * Indicates a startup event, typically sent after a device reset or initialization.
     * @type {number}
     */
    static readonly MESSAGE_STARTUP: number;
    /**
     * Resets the ANT+ device system.
     * @type {number}
     */
    static readonly MESSAGE_SYSTEM_RESET: number;
    /**
     * Opens a communication channel for data transmission.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_OPEN: number;
    /**
     * Closes a previously opened communication channel.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_CLOSE: number;
    /**
     * Requests a specific operation or status update for a channel.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_REQUEST: number;
    /**
     * Transmits broadcast data over an open channel.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_BROADCAST_DATA: number;
    /**
     * Sends acknowledged data that requires a response confirmation.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_ACKNOWLEDGED_DATA: number;
    /**
     * Sends burst data packets over a channel, useful for high-throughput scenarios.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_BURST_DATA: number;
    /**
     * Represents various events occurring on a channel, such as RX or TX completion.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_EVENT: number;
    /**
     * Queries the status of a channel, returning details like state or assigned ID.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_STATUS: number;
    /**
     * Retrieves the version of the ANT+ device software or protocol.
     * @type {number}
     */
    static readonly MESSAGE_VERSION: number;
    /**
     * Retrieves the capabilities of the ANT+ device, such as supported features.
     * @type {number}
     */
    static readonly MESSAGE_CAPABILITIES: number;
    /**
     * Retrieves the unique serial number of the ANT+ device.
     * @type {number}
     */
    static readonly MESSAGE_SERIAL_NUMBER: number;
    /**
     * Channel type for two-way data reception.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_TWOWAY_RECEIVE: number;
    /**
     * Channel type for two-way data transmission.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_TWOWAY_TRANSMIT: number;
    /**
     * Channel type for shared data reception.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_SHARED_RECEIVE: number;
    /**
     * Channel type for shared data transmission.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_SHARED_TRANSMIT: number;
    /**
     * Channel type for one-way data reception.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_ONEWAY_RECEIVE: number;
    /**
     * Channel type for one-way data transmission.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_ONEWAY_TRANSMIT: number;
    /**
     * Radio transmit power level: -20 dB.
     * @type {number}
     */
    static readonly RADIO_TX_POWER_MINUS20DB: number;
    /**
     * Radio transmit power level: -10 dB.
     * @type {number}
     */
    static readonly RADIO_TX_POWER_MINUS10DB: number;
    /**
     * Radio transmit power level: 0 dB.
     * @type {number}
     */
    static readonly RADIO_TX_POWER_0DB: number;
    /**
     * Radio transmit power level: +4 dB.
     * @type {number}
     */
    static readonly RADIO_TX_POWER_PLUS4DB: number;
    /**
     * No error occurred in the response.
     * @type {number}
     */
    static readonly RESPONSE_NO_ERROR: number;
    /**
     * RX search timed out.
     * @type {number}
     */
    static readonly EVENT_RX_SEARCH_TIMEOUT: number;
    /**
     * RX failed.
     * @type {number}
     */
    static readonly EVENT_RX_FAIL: number;
    /**
     * TX completed successfully.
     * @type {number}
     */
    static readonly EVENT_TX: number;
    /**
     * Transfer RX failed.
     * @type {number}
     */
    static readonly EVENT_TRANSFER_RX_FAILED: number;
    /**
     * Transfer TX completed successfully.
     * @type {number}
     */
    static readonly EVENT_TRANSFER_TX_COMPLETED: number;
    /**
     * Transfer TX failed.
     * @type {number}
     */
    static readonly EVENT_TRANSFER_TX_FAILED: number;
    /**
     * Channel was closed.
     * @type {number}
     */
    static readonly EVENT_CHANNEL_CLOSED: number;
    /**
     * RX failed; channel will go to search.
     * @type {number}
     */
    static readonly EVENT_RX_FAIL_GO_TO_SEARCH: number;
    /**
     * Channel collision detected.
     * @type {number}
     */
    static readonly EVENT_CHANNEL_COLLISION: number;
    /**
     * Transfer TX started.
     * @type {number}
     */
    static readonly EVENT_TRANSFER_TX_START: number;
    /**
     * Channel is in the wrong state for the requested operation.
     * @type {number}
     */
    static readonly CHANNEL_IN_WRONG_STATE: number;
    /**
     * Channel is not opened.
     * @type {number}
     */
    static readonly CHANNEL_NOT_OPENED: number;
    /**
     * Channel ID is not set.
     * @type {number}
     */
    static readonly CHANNEL_ID_NOT_SET: number;
    /**
     * Command to close all channels.
     * @type {number}
     */
    static readonly CLOSE_ALL_CHANNELS: number;
    /**
     * Transfer is currently in progress.
     * @type {number}
     */
    static readonly TRANSFER_IN_PROGRESS: number;
    /**
     * Transfer sequence number error.
     * @type {number}
     */
    static readonly TRANSFER_SEQUENCE_NUMBER_ERROR: number;
    /**
     * Transfer is in an error state.
     * @type {number}
     */
    static readonly TRANSFER_IN_ERROR: number;
    /**
     * Message size exceeds allowed limit.
     * @type {number}
     */
    static readonly MESSAGE_SIZE_EXCEEDS_LIMIT: number;
    /**
     * Invalid message received.
     * @type {number}
     */
    static readonly INVALID_MESSAGE: number;
    /**
     * Invalid network number provided.
     * @type {number}
     */
    static readonly INVALID_NETWORK_NUMBER: number;
    /**
     * Invalid list ID provided.
     * @type {number}
     */
    static readonly INVALID_LIST_ID: number;
    /**
     * Invalid scan TX channel specified.
     * @type {number}
     */
    static readonly INVALID_SCAN_TX_CHANNEL: number;
    /**
     * Invalid parameter provided for a message or operation.
     * @type {number}
     */
    static readonly INVALID_PARAMETER_PROVIDED: number;
    /**
     * Event queue overflow occurred.
     * @type {number}
     */
    static readonly EVENT_QUEUE_OVERFLOW: number;
    /**
     * USB string write operation failed.
     * @type {number}
     */
    static readonly USB_STRING_WRITE_FAIL: number;
    /**
     * Channel is unassigned.
     * @type {number}
     */
    static readonly CHANNEL_STATE_UNASSIGNED: number;
    /**
     * Channel is assigned.
     * @type {number}
     */
    static readonly CHANNEL_STATE_ASSIGNED: number;
    /**
     * Channel is searching for another device.
     * @type {number}
     */
    static readonly CHANNEL_STATE_SEARCHING: number;
    /**
     * Channel is tracking another device.
     * @type {number}
     */
    static readonly CHANNEL_STATE_TRACKING: number;
    /**
     * Device has no receive channels.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_RECEIVE_CHANNELS: number;
    /**
     * Device has no transmit channels.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_TRANSMIT_CHANNELS: number;
    /**
     * Device has no receive message capability.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_RECEIVE_MESSAGES: number;
    /**
     * Device has no transmit message capability.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_TRANSMIT_MESSAGES: number;
    /**
     * Device has no acknowledged message capability.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_ACKNOWLEDGED_MESSAGES: number;
    /**
     * Device has no burst message capability.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_BURST_MESSAGES: number;
    /**
     * Device supports network communication.
     * @type {number}
     */
    static readonly CAPABILITIES_NETWORK_ENABLED: number;
    /**
     * Device serial number feature enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_SERIAL_NUMBER_ENABLED: number;
    /**
     * Per-channel transmit power adjustment enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_PER_CHANNEL_TX_POWER_ENABLED: number;
    /**
     * Low priority search capability enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_LOW_PRIORITY_SEARCH_ENABLED: number;
    /**
     * Script feature enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_SCRIPT_ENABLED: number;
    /**
     * Search list capability enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_SEARCH_LIST_ENABLED: number;
    /**
     * LED feature enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_LED_ENABLED: number;
    /**
     * Extended messaging enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_EXT_MESSAGE_ENABLED: number;
    /**
     * Scan mode enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_SCAN_MODE_ENABLED: number;
    /**
     * Proximity search capability enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_PROX_SEARCH_ENABLED: number;
    /**
     * Extended channel assignment enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_EXT_ASSIGN_ENABLED: number;
    /**
     * File share (ANT-FS) feature enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_FS_ANTFS_ENABLED: number;
    /**
     * Special value indicating that the timeout for an operation is set to never expire.
     * @type {number}
     */
    static readonly TIMEOUT_NEVER: number;
}
//# sourceMappingURL=constants.d.ts.map