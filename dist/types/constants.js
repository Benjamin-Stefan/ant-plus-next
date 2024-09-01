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
}
// Nachrichtentypen
/**
 * Represents a generic Radio Frequency (RF) message type used in the ANT+ protocol.
 * @type {number}
 */
Constants.MESSAGE_RF = 0x01;
/**
 * Represents a synchronization message used to align data transmission.
 * @type {number}
 */
Constants.MESSAGE_TX_SYNC = 0xa4;
/**
 * Default network number used by ANT+ devices.
 * @type {number}
 */
Constants.DEFAULT_NETWORK_NUMBER = 0x00;
// Konfigurationsnachrichten
/**
 * Unassigns a channel, making it available for reassignment or closing.
 * @type {number}
 */
Constants.MESSAGE_CHANNEL_UNASSIGN = 0x41;
/**
 * Assigns a channel with a specific type and network number.
 * @type {number}
 */
Constants.MESSAGE_CHANNEL_ASSIGN = 0x42;
/**
 * Sets the unique identifier for a channel.
 * @type {number}
 */
Constants.MESSAGE_CHANNEL_ID = 0x51;
/**
 * Configures the message period for a channel, defining the frequency of data messages.
 * @type {number}
 */
Constants.MESSAGE_CHANNEL_PERIOD = 0x43;
/**
 * Sets the timeout period for channel searching operations.
 * @type {number}
 */
Constants.MESSAGE_CHANNEL_SEARCH_TIMEOUT = 0x44;
/**
 * Configures the frequency of the channel in the RF spectrum.
 * @type {number}
 */
Constants.MESSAGE_CHANNEL_FREQUENCY = 0x45;
/**
 * Sets the transmission power level for a specific channel.
 * @type {number}
 */
Constants.MESSAGE_CHANNEL_TX_POWER = 0x60;
/**
 * Sets the network key for secure communication between ANT+ devices.
 * @type {number}
 */
Constants.MESSAGE_NETWORK_KEY = 0x46;
/**
 * Defines the transmit power for the device.
 * @type {number}
 */
Constants.MESSAGE_TX_POWER = 0x47;
/**
 * Enables proximity search for devices within a specified range.
 * @type {number}
 */
Constants.MESSAGE_PROXIMITY_SEARCH = 0x71;
/**
 * Enables extended receive mode for handling additional data.
 * @type {number}
 */
Constants.MESSAGE_ENABLE_RX_EXT = 0x66;
/**
 * Configures the library settings for ANT+ communication.
 * @type {number}
 */
Constants.MESSAGE_LIB_CONFIG = 0x6e;
/**
 * Opens a channel for RX scan mode, allowing the device to search for broadcasts.
 * @type {number}
 */
Constants.MESSAGE_CHANNEL_OPEN_RX_SCAN = 0x5b;
// Benachrichtigungen
/**
 * Indicates a startup event, typically sent after a device reset or initialization.
 * @type {number}
 */
Constants.MESSAGE_STARTUP = 0x6f;
// Steuerungsnachrichten
/**
 * Resets the ANT+ device system.
 * @type {number}
 */
Constants.MESSAGE_SYSTEM_RESET = 0x4a;
/**
 * Opens a communication channel for data transmission.
 * @type {number}
 */
Constants.MESSAGE_CHANNEL_OPEN = 0x4b;
/**
 * Closes a previously opened communication channel.
 * @type {number}
 */
Constants.MESSAGE_CHANNEL_CLOSE = 0x4c;
/**
 * Requests a specific operation or status update for a channel.
 * @type {number}
 */
Constants.MESSAGE_CHANNEL_REQUEST = 0x4d;
// Daten-Nachrichten
/**
 * Transmits broadcast data over an open channel.
 * @type {number}
 */
Constants.MESSAGE_CHANNEL_BROADCAST_DATA = 0x4e;
/**
 * Sends acknowledged data that requires a response confirmation.
 * @type {number}
 */
Constants.MESSAGE_CHANNEL_ACKNOWLEDGED_DATA = 0x4f;
/**
 * Sends burst data packets over a channel, useful for high-throughput scenarios.
 * @type {number}
 */
Constants.MESSAGE_CHANNEL_BURST_DATA = 0x50;
// Kanalereignis-Nachrichten
/**
 * Represents various events occurring on a channel, such as RX or TX completion.
 * @type {number}
 */
Constants.MESSAGE_CHANNEL_EVENT = 0x40;
// Angeforderte Antwort-Nachrichten
/**
 * Queries the status of a channel, returning details like state or assigned ID.
 * @type {number}
 */
Constants.MESSAGE_CHANNEL_STATUS = 0x52;
/**
 * Retrieves the version of the ANT+ device software or protocol.
 * @type {number}
 */
Constants.MESSAGE_VERSION = 0x3e;
/**
 * Retrieves the capabilities of the ANT+ device, such as supported features.
 * @type {number}
 */
Constants.MESSAGE_CAPABILITIES = 0x54;
/**
 * Retrieves the unique serial number of the ANT+ device.
 * @type {number}
 */
Constants.MESSAGE_SERIAL_NUMBER = 0x61;
// Nachrichten-Parameter
/**
 * Channel type for two-way data reception.
 * @type {number}
 */
Constants.CHANNEL_TYPE_TWOWAY_RECEIVE = 0x00;
/**
 * Channel type for two-way data transmission.
 * @type {number}
 */
Constants.CHANNEL_TYPE_TWOWAY_TRANSMIT = 0x10;
/**
 * Channel type for shared data reception.
 * @type {number}
 */
Constants.CHANNEL_TYPE_SHARED_RECEIVE = 0x20;
/**
 * Channel type for shared data transmission.
 * @type {number}
 */
Constants.CHANNEL_TYPE_SHARED_TRANSMIT = 0x30;
/**
 * Channel type for one-way data reception.
 * @type {number}
 */
Constants.CHANNEL_TYPE_ONEWAY_RECEIVE = 0x40;
/**
 * Channel type for one-way data transmission.
 * @type {number}
 */
Constants.CHANNEL_TYPE_ONEWAY_TRANSMIT = 0x50;
/**
 * Radio transmit power level: -20 dB.
 * @type {number}
 */
Constants.RADIO_TX_POWER_MINUS20DB = 0x00;
/**
 * Radio transmit power level: -10 dB.
 * @type {number}
 */
Constants.RADIO_TX_POWER_MINUS10DB = 0x01;
/**
 * Radio transmit power level: 0 dB.
 * @type {number}
 */
Constants.RADIO_TX_POWER_0DB = 0x02;
/**
 * Radio transmit power level: +4 dB.
 * @type {number}
 */
Constants.RADIO_TX_POWER_PLUS4DB = 0x03;
// Event Codes
/**
 * No error occurred in the response.
 * @type {number}
 */
Constants.RESPONSE_NO_ERROR = 0x00;
/**
 * RX search timed out.
 * @type {number}
 */
Constants.EVENT_RX_SEARCH_TIMEOUT = 0x01;
/**
 * RX failed.
 * @type {number}
 */
Constants.EVENT_RX_FAIL = 0x02;
/**
 * TX completed successfully.
 * @type {number}
 */
Constants.EVENT_TX = 0x03;
/**
 * Transfer RX failed.
 * @type {number}
 */
Constants.EVENT_TRANSFER_RX_FAILED = 0x04;
/**
 * Transfer TX completed successfully.
 * @type {number}
 */
Constants.EVENT_TRANSFER_TX_COMPLETED = 0x05;
/**
 * Transfer TX failed.
 * @type {number}
 */
Constants.EVENT_TRANSFER_TX_FAILED = 0x06;
/**
 * Channel was closed.
 * @type {number}
 */
Constants.EVENT_CHANNEL_CLOSED = 0x07;
/**
 * RX failed; channel will go to search.
 * @type {number}
 */
Constants.EVENT_RX_FAIL_GO_TO_SEARCH = 0x08;
/**
 * Channel collision detected.
 * @type {number}
 */
Constants.EVENT_CHANNEL_COLLISION = 0x09;
/**
 * Transfer TX started.
 * @type {number}
 */
Constants.EVENT_TRANSFER_TX_START = 0x0a;
// Error and State Codes
/**
 * Channel is in the wrong state for the requested operation.
 * @type {number}
 */
Constants.CHANNEL_IN_WRONG_STATE = 0x15;
/**
 * Channel is not opened.
 * @type {number}
 */
Constants.CHANNEL_NOT_OPENED = 0x16;
/**
 * Channel ID is not set.
 * @type {number}
 */
Constants.CHANNEL_ID_NOT_SET = 0x18;
/**
 * Command to close all channels.
 * @type {number}
 */
Constants.CLOSE_ALL_CHANNELS = 0x19;
/**
 * Transfer is currently in progress.
 * @type {number}
 */
Constants.TRANSFER_IN_PROGRESS = 0x1f;
/**
 * Transfer sequence number error.
 * @type {number}
 */
Constants.TRANSFER_SEQUENCE_NUMBER_ERROR = 0x20;
/**
 * Transfer is in an error state.
 * @type {number}
 */
Constants.TRANSFER_IN_ERROR = 0x21;
/**
 * Message size exceeds allowed limit.
 * @type {number}
 */
Constants.MESSAGE_SIZE_EXCEEDS_LIMIT = 0x27;
/**
 * Invalid message received.
 * @type {number}
 */
Constants.INVALID_MESSAGE = 0x28;
/**
 * Invalid network number provided.
 * @type {number}
 */
Constants.INVALID_NETWORK_NUMBER = 0x29;
/**
 * Invalid list ID provided.
 * @type {number}
 */
Constants.INVALID_LIST_ID = 0x30;
/**
 * Invalid scan TX channel specified.
 * @type {number}
 */
Constants.INVALID_SCAN_TX_CHANNEL = 0x31;
/**
 * Invalid parameter provided for a message or operation.
 * @type {number}
 */
Constants.INVALID_PARAMETER_PROVIDED = 0x33;
/**
 * Event queue overflow occurred.
 * @type {number}
 */
Constants.EVENT_QUEUE_OVERFLOW = 0x35;
/**
 * USB string write operation failed.
 * @type {number}
 */
Constants.USB_STRING_WRITE_FAIL = 0x70;
// Channel States
/**
 * Channel is unassigned.
 * @type {number}
 */
Constants.CHANNEL_STATE_UNASSIGNED = 0x00;
/**
 * Channel is assigned.
 * @type {number}
 */
Constants.CHANNEL_STATE_ASSIGNED = 0x01;
/**
 * Channel is searching for another device.
 * @type {number}
 */
Constants.CHANNEL_STATE_SEARCHING = 0x02;
/**
 * Channel is tracking another device.
 * @type {number}
 */
Constants.CHANNEL_STATE_TRACKING = 0x03;
// Capability Flags
/**
 * Device has no receive channels.
 * @type {number}
 */
Constants.CAPABILITIES_NO_RECEIVE_CHANNELS = 0x01;
/**
 * Device has no transmit channels.
 * @type {number}
 */
Constants.CAPABILITIES_NO_TRANSMIT_CHANNELS = 0x02;
/**
 * Device has no receive message capability.
 * @type {number}
 */
Constants.CAPABILITIES_NO_RECEIVE_MESSAGES = 0x04;
/**
 * Device has no transmit message capability.
 * @type {number}
 */
Constants.CAPABILITIES_NO_TRANSMIT_MESSAGES = 0x08;
/**
 * Device has no acknowledged message capability.
 * @type {number}
 */
Constants.CAPABILITIES_NO_ACKNOWLEDGED_MESSAGES = 0x10;
/**
 * Device has no burst message capability.
 * @type {number}
 */
Constants.CAPABILITIES_NO_BURST_MESSAGES = 0x20;
/**
 * Device supports network communication.
 * @type {number}
 */
Constants.CAPABILITIES_NETWORK_ENABLED = 0x02;
/**
 * Device serial number feature enabled.
 * @type {number}
 */
Constants.CAPABILITIES_SERIAL_NUMBER_ENABLED = 0x08;
/**
 * Per-channel transmit power adjustment enabled.
 * @type {number}
 */
Constants.CAPABILITIES_PER_CHANNEL_TX_POWER_ENABLED = 0x10;
/**
 * Low priority search capability enabled.
 * @type {number}
 */
Constants.CAPABILITIES_LOW_PRIORITY_SEARCH_ENABLED = 0x20;
/**
 * Script feature enabled.
 * @type {number}
 */
Constants.CAPABILITIES_SCRIPT_ENABLED = 0x40;
/**
 * Search list capability enabled.
 * @type {number}
 */
Constants.CAPABILITIES_SEARCH_LIST_ENABLED = 0x80;
/**
 * LED feature enabled.
 * @type {number}
 */
Constants.CAPABILITIES_LED_ENABLED = 0x01;
/**
 * Extended messaging enabled.
 * @type {number}
 */
Constants.CAPABILITIES_EXT_MESSAGE_ENABLED = 0x02;
/**
 * Scan mode enabled.
 * @type {number}
 */
Constants.CAPABILITIES_SCAN_MODE_ENABLED = 0x04;
/**
 * Proximity search capability enabled.
 * @type {number}
 */
Constants.CAPABILITIES_PROX_SEARCH_ENABLED = 0x10;
/**
 * Extended channel assignment enabled.
 * @type {number}
 */
Constants.CAPABILITIES_EXT_ASSIGN_ENABLED = 0x20;
/**
 * File share (ANT-FS) feature enabled.
 * @type {number}
 */
Constants.CAPABILITIES_FS_ANTFS_ENABLED = 0x40;
// Miscellaneous
/**
 * Special value indicating that the timeout for an operation is set to never expire.
 * @type {number}
 */
Constants.TIMEOUT_NEVER = 0xff;
//# sourceMappingURL=constants.js.map