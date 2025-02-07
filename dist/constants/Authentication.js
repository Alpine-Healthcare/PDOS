import Constant from "./libs/Constant";
export var AuthenticationState;
(function (AuthenticationState) {
    AuthenticationState[AuthenticationState["SUCCESS"] = 0] = "SUCCESS";
    AuthenticationState[AuthenticationState["EMAIL_CONFIRMATION"] = 1] = "EMAIL_CONFIRMATION";
    AuthenticationState[AuthenticationState["EMAIL_CONFIRMATION_FAILED"] = 2] = "EMAIL_CONFIRMATION_FAILED";
    AuthenticationState[AuthenticationState["ERROR"] = 3] = "ERROR";
    AuthenticationState[AuthenticationState["UNKNOWN"] = 4] = "UNKNOWN";
})(AuthenticationState || (AuthenticationState = {}));
export default class Authentication extends Constant {
    constructor() {
        super();
        //makeObservable(this);
    }
    state = AuthenticationState.UNKNOWN;
    update(state) {
        this.state = state;
    }
}
//# sourceMappingURL=Authentication.js.map