import Module from "../Module";
import axios from "axios";
export default class Auth extends Module {
    config;
    credentialId = null;
    constructor(core, config) {
        super(core);
        this.config = config;
    }
    async initializeUser(credentialId) {
        this.setCredentialId(credentialId);
    }
    async setCredentialId(credentialId) {
        this.credentialId = credentialId;
        if (this.credentialId === "test") {
            const initCredentialId = this.core.test?.initCredentialId;
            const userRes = await axios.get(this.core.gatewayURL + "/pdos/users/" + initCredentialId);
            const user = userRes.data;
            console.log("user: ", user);
            this.core.stores.userAccount.initUser(user[1].hash_id);
        }
        else {
            const userRes = await axios.get(this.core.gatewayURL + "/pdos/users/" + this.credentialId);
            const user = userRes.data;
            this.core.stores.userAccount.initUser(user[1].hash_id);
        }
    }
}
//# sourceMappingURL=Auth.js.map