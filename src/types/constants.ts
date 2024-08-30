export class Constants {
    // Nachrichtentypen
    static readonly MESSAGE_RF = 0x01;
    static readonly MESSAGE_TX_SYNC = 0xa4;
    static readonly DEFAULT_NETWORK_NUMBER = 0x00;

    // Konfigurationsnachrichten
    static readonly MESSAGE_CHANNEL_UNASSIGN = 0x41;
    static readonly MESSAGE_CHANNEL_ASSIGN = 0x42;
    static readonly MESSAGE_CHANNEL_ID = 0x51;
    static readonly MESSAGE_CHANNEL_PERIOD = 0x43;
    static readonly MESSAGE_CHANNEL_SEARCH_TIMEOUT = 0x44;
    static readonly MESSAGE_CHANNEL_FREQUENCY = 0x45;
    static readonly MESSAGE_CHANNEL_TX_POWER = 0x60;
    static readonly MESSAGE_NETWORK_KEY = 0x46;
    static readonly MESSAGE_TX_POWER = 0x47;
    static readonly MESSAGE_PROXIMITY_SEARCH = 0x71;
    static readonly MESSAGE_ENABLE_RX_EXT = 0x66;
    static readonly MESSAGE_LIB_CONFIG = 0x6e;
    static readonly MESSAGE_CHANNEL_OPEN_RX_SCAN = 0x5b;

    // Benachrichtigungen
    static readonly MESSAGE_STARTUP = 0x6f;

    // Steuerungsnachrichten
    static readonly MESSAGE_SYSTEM_RESET = 0x4a;
    static readonly MESSAGE_CHANNEL_OPEN = 0x4b;
    static readonly MESSAGE_CHANNEL_CLOSE = 0x4c;
    static readonly MESSAGE_CHANNEL_REQUEST = 0x4d;

    // Daten-Nachrichten
    static readonly MESSAGE_CHANNEL_BROADCAST_DATA = 0x4e;
    static readonly MESSAGE_CHANNEL_ACKNOWLEDGED_DATA = 0x4f;
    static readonly MESSAGE_CHANNEL_BURST_DATA = 0x50;

    // Kanalereignis-Nachrichten
    static readonly MESSAGE_CHANNEL_EVENT = 0x40;

    // Angeforderte Antwort-Nachrichten
    static readonly MESSAGE_CHANNEL_STATUS = 0x52;
    static readonly MESSAGE_VERSION = 0x3e;
    static readonly MESSAGE_CAPABILITIES = 0x54;
    static readonly MESSAGE_SERIAL_NUMBER = 0x61;

    // Nachrichten-Parameter
    static readonly CHANNEL_TYPE_TWOWAY_RECEIVE = 0x00;
    static readonly CHANNEL_TYPE_TWOWAY_TRANSMIT = 0x10;
    static readonly CHANNEL_TYPE_SHARED_RECEIVE = 0x20;
    static readonly CHANNEL_TYPE_SHARED_TRANSMIT = 0x30;
    static readonly CHANNEL_TYPE_ONEWAY_RECEIVE = 0x40;
    static readonly CHANNEL_TYPE_ONEWAY_TRANSMIT = 0x50;
    static readonly RADIO_TX_POWER_MINUS20DB = 0x00;
    static readonly RADIO_TX_POWER_MINUS10DB = 0x01;
    static readonly RADIO_TX_POWER_0DB = 0x02;
    static readonly RADIO_TX_POWER_PLUS4DB = 0x03;
    static readonly RESPONSE_NO_ERROR = 0x00;
    static readonly EVENT_RX_SEARCH_TIMEOUT = 0x01;
    static readonly EVENT_RX_FAIL = 0x02;
    static readonly EVENT_TX = 0x03;
    static readonly EVENT_TRANSFER_RX_FAILED = 0x04;
    static readonly EVENT_TRANSFER_TX_COMPLETED = 0x05;
    static readonly EVENT_TRANSFER_TX_FAILED = 0x06;
    static readonly EVENT_CHANNEL_CLOSED = 0x07;
    static readonly EVENT_RX_FAIL_GO_TO_SEARCH = 0x08;
    static readonly EVENT_CHANNEL_COLLISION = 0x09;
    static readonly EVENT_TRANSFER_TX_START = 0x0a;
    static readonly CHANNEL_IN_WRONG_STATE = 0x15;
    static readonly CHANNEL_NOT_OPENED = 0x16;
    static readonly CHANNEL_ID_NOT_SET = 0x18;
    static readonly CLOSE_ALL_CHANNELS = 0x19;
    static readonly TRANSFER_IN_PROGRESS = 0x1f;
    static readonly TRANSFER_SEQUENCE_NUMBER_ERROR = 0x20;
    static readonly TRANSFER_IN_ERROR = 0x21;
    static readonly MESSAGE_SIZE_EXCEEDS_LIMIT = 0x27;
    static readonly INVALID_MESSAGE = 0x28;
    static readonly INVALID_NETWORK_NUMBER = 0x29;
    static readonly INVALID_LIST_ID = 0x30;
    static readonly INVALID_SCAN_TX_CHANNEL = 0x31;
    static readonly INVALID_PARAMETER_PROVIDED = 0x33;
    static readonly EVENT_QUEUE_OVERFLOW = 0x35;
    static readonly USB_STRING_WRITE_FAIL = 0x70;
    static readonly CHANNEL_STATE_UNASSIGNED = 0x00;
    static readonly CHANNEL_STATE_ASSIGNED = 0x01;
    static readonly CHANNEL_STATE_SEARCHING = 0x02;
    static readonly CHANNEL_STATE_TRACKING = 0x03;
    static readonly CAPABILITIES_NO_RECEIVE_CHANNELS = 0x01;
    static readonly CAPABILITIES_NO_TRANSMIT_CHANNELS = 0x02;
    static readonly CAPABILITIES_NO_RECEIVE_MESSAGES = 0x04;
    static readonly CAPABILITIES_NO_TRANSMIT_MESSAGES = 0x08;
    static readonly CAPABILITIES_NO_ACKNOWLEDGED_MESSAGES = 0x10;
    static readonly CAPABILITIES_NO_BURST_MESSAGES = 0x20;
    static readonly CAPABILITIES_NETWORK_ENABLED = 0x02;
    static readonly CAPABILITIES_SERIAL_NUMBER_ENABLED = 0x08;
    static readonly CAPABILITIES_PER_CHANNEL_TX_POWER_ENABLED = 0x10;
    static readonly CAPABILITIES_LOW_PRIORITY_SEARCH_ENABLED = 0x20;
    static readonly CAPABILITIES_SCRIPT_ENABLED = 0x40;
    static readonly CAPABILITIES_SEARCH_LIST_ENABLED = 0x80;
    static readonly CAPABILITIES_LED_ENABLED = 0x01;
    static readonly CAPABILITIES_EXT_MESSAGE_ENABLED = 0x02;
    static readonly CAPABILITIES_SCAN_MODE_ENABLED = 0x04;
    static readonly CAPABILITIES_PROX_SEARCH_ENABLED = 0x10;
    static readonly CAPABILITIES_EXT_ASSIGN_ENABLED = 0x20;
    static readonly CAPABILITIES_FS_ANTFS_ENABLED = 0x40;
    static readonly TIMEOUT_NEVER = 0xff;
}
