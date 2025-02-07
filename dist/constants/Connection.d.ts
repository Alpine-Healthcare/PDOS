import { default as Constant } from './libs/Constant';
export declare enum ConnectionState {
    ERROR = 0,
    CONNECTED = 1,
    DISCONNECTED = 2,
    UNKNOWN = 3
}
export default class Connection extends Constant<ConnectionState> {
    state: ConnectionState;
    update(state: ConnectionState): void;
}
//# sourceMappingURL=Connection.d.ts.map