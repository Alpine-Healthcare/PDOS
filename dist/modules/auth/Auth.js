import Module from "../Module";
//const hash = "Qmc6qiGGKVAnPUVZJ4XKZLKJe4ZUGX9SrptwzuPphNvCU6"
//const hash = "QmWEXExboWzfGsWrDcZo4tsncvNhLmkCUA26hgWR4JTDmS"
//const hash = "Qme8UavwerXnvCe1tiQRVdEZApkzadh1AtsjfmeeBSV8rY"
//const hash = "QmczbczVzjqz67Y2ciQ5N8SM8VGptLCruCJDVPEgknVTPd"
const hash = "QmaJtBdUUXDm4Z57zM3jSF99erid3MB84TxH7Z8ypyVpqp";
export default class Auth extends Module {
    config;
    accessPackage;
    userAccountRaw;
    constructor(core, config) {
        super(core);
        this.config = config;
    }
    async initializeUser(accessPackage) {
        this.setAccessPackage(accessPackage);
    }
    async setAccessPackage(accessPackage) {
        this.accessPackage = accessPackage;
        if (this.accessPackage === "test") {
            this.core.stores.userAccount.initUser(hash);
        }
        else {
            this.core.stores.userAccount.initUser(this.accessPackage);
        }
    }
}
//# sourceMappingURL=Auth.js.map