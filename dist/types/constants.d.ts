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
    static readonly MESSAGE_RF = 1;
    /**
     * Represents a synchronization message used to align data transmission.
     * @type {number}
     */
    static readonly MESSAGE_TX_SYNC = 164;
    /**
     * Default network number used by ANT+ devices.
     * @type {number}
     */
    static readonly DEFAULT_NETWORK_NUMBER = 0;
    /**
     * Unassigns a channel, making it available for reassignment or closing.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_UNASSIGN = 65;
    /**
     * Assigns a channel with a specific type and network number.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_ASSIGN = 66;
    /**
     * Sets the unique identifier for a channel.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_ID = 81;
    /**
     * Configures the message period for a channel, defining the frequency of data messages.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_PERIOD = 67;
    /**
     * Sets the timeout period for channel searching operations.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_SEARCH_TIMEOUT = 68;
    /**
     * Configures the frequency of the channel in the RF spectrum.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_FREQUENCY = 69;
    /**
     * Sets the transmission power level for a specific channel.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_TX_POWER = 96;
    /**
     * Sets the network key for secure communication between ANT+ devices.
     * @type {number}
     */
    static readonly MESSAGE_NETWORK_KEY = 70;
    /**
     * Defines the transmit power for the device.
     * @type {number}
     */
    static readonly MESSAGE_TX_POWER = 71;
    /**
     * Enables proximity search for devices within a specified range.
     * @type {number}
     */
    static readonly MESSAGE_PROXIMITY_SEARCH = 113;
    /**
     * Enables extended receive mode for handling additional data.
     * @type {number}
     */
    static readonly MESSAGE_ENABLE_RX_EXT = 102;
    /**
     * Configures the library settings for ANT+ communication.
     * @type {number}
     */
    static readonly MESSAGE_LIB_CONFIG = 110;
    /**
     * Opens a channel for RX scan mode, allowing the device to search for broadcasts.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_OPEN_RX_SCAN = 91;
    /**
     * Indicates a startup event, typically sent after a device reset or initialization.
     * @type {number}
     */
    static readonly MESSAGE_STARTUP = 111;
    /**
     * Resets the ANT+ device system.
     * @type {number}
     */
    static readonly MESSAGE_SYSTEM_RESET = 74;
    /**
     * Opens a communication channel for data transmission.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_OPEN = 75;
    /**
     * Closes a previously opened communication channel.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_CLOSE = 76;
    /**
     * Requests a specific operation or status update for a channel.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_REQUEST = 77;
    /**
     * Transmits broadcast data over an open channel.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_BROADCAST_DATA = 78;
    /**
     * Sends acknowledged data that requires a response confirmation.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_ACKNOWLEDGED_DATA = 79;
    /**
     * Sends burst data packets over a channel, useful for high-throughput scenarios.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_BURST_DATA = 80;
    /**
     * Represents various events occurring on a channel, such as RX or TX completion.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_EVENT = 64;
    /**
     * Queries the status of a channel, returning details like state or assigned ID.
     * @type {number}
     */
    static readonly MESSAGE_CHANNEL_STATUS = 82;
    /**
     * Retrieves the version of the ANT+ device software or protocol.
     * @type {number}
     */
    static readonly MESSAGE_VERSION = 62;
    /**
     * Retrieves the capabilities of the ANT+ device, such as supported features.
     * @type {number}
     */
    static readonly MESSAGE_CAPABILITIES = 84;
    /**
     * Retrieves the unique serial number of the ANT+ device.
     * @type {number}
     */
    static readonly MESSAGE_SERIAL_NUMBER = 97;
    /**
     * Channel type for two-way data reception.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_TWOWAY_RECEIVE = 0;
    /**
     * Channel type for two-way data transmission.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_TWOWAY_TRANSMIT = 16;
    /**
     * Channel type for shared data reception.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_SHARED_RECEIVE = 32;
    /**
     * Channel type for shared data transmission.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_SHARED_TRANSMIT = 48;
    /**
     * Channel type for one-way data reception.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_ONEWAY_RECEIVE = 64;
    /**
     * Channel type for one-way data transmission.
     * @type {number}
     */
    static readonly CHANNEL_TYPE_ONEWAY_TRANSMIT = 80;
    /**
     * Radio transmit power level: -20 dB.
     * @type {number}
     */
    static readonly RADIO_TX_POWER_MINUS20DB = 0;
    /**
     * Radio transmit power level: -10 dB.
     * @type {number}
     */
    static readonly RADIO_TX_POWER_MINUS10DB = 1;
    /**
     * Radio transmit power level: 0 dB.
     * @type {number}
     */
    static readonly RADIO_TX_POWER_0DB = 2;
    /**
     * Radio transmit power level: +4 dB.
     * @type {number}
     */
    static readonly RADIO_TX_POWER_PLUS4DB = 3;
    /**
     * No error occurred in the response.
     * @type {number}
     */
    static readonly RESPONSE_NO_ERROR = 0;
    /**
     * RX search timed out.
     * @type {number}
     */
    static readonly EVENT_RX_SEARCH_TIMEOUT = 1;
    /**
     * RX failed.
     * @type {number}
     */
    static readonly EVENT_RX_FAIL = 2;
    /**
     * TX completed successfully.
     * @type {number}
     */
    static readonly EVENT_TX = 3;
    /**
     * Transfer RX failed.
     * @type {number}
     */
    static readonly EVENT_TRANSFER_RX_FAILED = 4;
    /**
     * Transfer TX completed successfully.
     * @type {number}
     */
    static readonly EVENT_TRANSFER_TX_COMPLETED = 5;
    /**
     * Transfer TX failed.
     * @type {number}
     */
    static readonly EVENT_TRANSFER_TX_FAILED = 6;
    /**
     * Channel was closed.
     * @type {number}
     */
    static readonly EVENT_CHANNEL_CLOSED = 7;
    /**
     * RX failed; channel will go to search.
     * @type {number}
     */
    static readonly EVENT_RX_FAIL_GO_TO_SEARCH = 8;
    /**
     * Channel collision detected.
     * @type {number}
     */
    static readonly EVENT_CHANNEL_COLLISION = 9;
    /**
     * Transfer TX started.
     * @type {number}
     */
    static readonly EVENT_TRANSFER_TX_START = 10;
    /**
     * Channel is in the wrong state for the requested operation.
     * @type {number}
     */
    static readonly CHANNEL_IN_WRONG_STATE = 21;
    /**
     * Channel is not opened.
     * @type {number}
     */
    static readonly CHANNEL_NOT_OPENED = 22;
    /**
     * Channel ID is not set.
     * @type {number}
     */
    static readonly CHANNEL_ID_NOT_SET = 24;
    /**
     * Command to close all channels.
     * @type {number}
     */
    static readonly CLOSE_ALL_CHANNELS = 25;
    /**
     * Transfer is currently in progress.
     * @type {number}
     */
    static readonly TRANSFER_IN_PROGRESS = 31;
    /**
     * Transfer sequence number error.
     * @type {number}
     */
    static readonly TRANSFER_SEQUENCE_NUMBER_ERROR = 32;
    /**
     * Transfer is in an error state.
     * @type {number}
     */
    static readonly TRANSFER_IN_ERROR = 33;
    /**
     * Message size exceeds allowed limit.
     * @type {number}
     */
    static readonly MESSAGE_SIZE_EXCEEDS_LIMIT = 39;
    /**
     * Invalid message received.
     * @type {number}
     */
    static readonly INVALID_MESSAGE = 40;
    /**
     * Invalid network number provided.
     * @type {number}
     */
    static readonly INVALID_NETWORK_NUMBER = 41;
    /**
     * Invalid list ID provided.
     * @type {number}
     */
    static readonly INVALID_LIST_ID = 48;
    /**
     * Invalid scan TX channel specified.
     * @type {number}
     */
    static readonly INVALID_SCAN_TX_CHANNEL = 49;
    /**
     * Invalid parameter provided for a message or operation.
     * @type {number}
     */
    static readonly INVALID_PARAMETER_PROVIDED = 51;
    /**
     * Event queue overflow occurred.
     * @type {number}
     */
    static readonly EVENT_QUEUE_OVERFLOW = 53;
    /**
     * USB string write operation failed.
     * @type {number}
     */
    static readonly USB_STRING_WRITE_FAIL = 112;
    /**
     * Channel is unassigned.
     * @type {number}
     */
    static readonly CHANNEL_STATE_UNASSIGNED = 0;
    /**
     * Channel is assigned.
     * @type {number}
     */
    static readonly CHANNEL_STATE_ASSIGNED = 1;
    /**
     * Channel is searching for another device.
     * @type {number}
     */
    static readonly CHANNEL_STATE_SEARCHING = 2;
    /**
     * Channel is tracking another device.
     * @type {number}
     */
    static readonly CHANNEL_STATE_TRACKING = 3;
    /**
     * Device has no receive channels.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_RECEIVE_CHANNELS = 1;
    /**
     * Device has no transmit channels.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_TRANSMIT_CHANNELS = 2;
    /**
     * Device has no receive message capability.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_RECEIVE_MESSAGES = 4;
    /**
     * Device has no transmit message capability.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_TRANSMIT_MESSAGES = 8;
    /**
     * Device has no acknowledged message capability.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_ACKNOWLEDGED_MESSAGES = 16;
    /**
     * Device has no burst message capability.
     * @type {number}
     */
    static readonly CAPABILITIES_NO_BURST_MESSAGES = 32;
    /**
     * Device supports network communication.
     * @type {number}
     */
    static readonly CAPABILITIES_NETWORK_ENABLED = 2;
    /**
     * Device serial number feature enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_SERIAL_NUMBER_ENABLED = 8;
    /**
     * Per-channel transmit power adjustment enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_PER_CHANNEL_TX_POWER_ENABLED = 16;
    /**
     * Low priority search capability enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_LOW_PRIORITY_SEARCH_ENABLED = 32;
    /**
     * Script feature enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_SCRIPT_ENABLED = 64;
    /**
     * Search list capability enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_SEARCH_LIST_ENABLED = 128;
    /**
     * LED feature enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_LED_ENABLED = 1;
    /**
     * Extended messaging enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_EXT_MESSAGE_ENABLED = 2;
    /**
     * Scan mode enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_SCAN_MODE_ENABLED = 4;
    /**
     * Proximity search capability enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_PROX_SEARCH_ENABLED = 16;
    /**
     * Extended channel assignment enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_EXT_ASSIGN_ENABLED = 32;
    /**
     * File share (ANT-FS) feature enabled.
     * @type {number}
     */
    static readonly CAPABILITIES_FS_ANTFS_ENABLED = 64;
    /**
     * Special value indicating that the timeout for an operation is set to never expire.
     * @type {number}
     */
    static readonly TIMEOUT_NEVER = 255;
}
