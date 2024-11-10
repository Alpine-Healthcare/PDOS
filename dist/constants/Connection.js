import Constant from "./libs/Constant";
export var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["ERROR"] = 0] = "ERROR";
    ConnectionState[ConnectionState["CONNECTED"] = 1] = "CONNECTED";
    ConnectionState[ConnectionState["DISCONNECTED"] = 2] = "DISCONNECTED";
    ConnectionState[ConnectionState["UNKNOWN"] = 3] = "UNKNOWN";
})(ConnectionState || (ConnectionState = {}));
export default class Connection extends Constant {
    state = ConnectionState.UNKNOWN;
    update(state) {
        this.state = state;
    }
}
//# sourceMappingURL=Connection.js.map