
import Module from "../Module";
import { Core } from "../..";

interface Config {}
//const hash = "Qmc6qiGGKVAnPUVZJ4XKZLKJe4ZUGX9SrptwzuPphNvCU6"
//const hash = "QmWEXExboWzfGsWrDcZo4tsncvNhLmkCUA26hgWR4JTDmS"


//const hash = "Qme8UavwerXnvCe1tiQRVdEZApkzadh1AtsjfmeeBSV8rY"
//const hash = "QmczbczVzjqz67Y2ciQ5N8SM8VGptLCruCJDVPEgknVTPd"
const hash = "QmaJtBdUUXDm4Z57zM3jSF99erid3MB84TxH7Z8ypyVpqp"

export default class Auth extends Module {
  public accessPackage : any;
  public userAccountRaw : any

  constructor(core : Core, private config : Config){
    super(core);
  }

  public async initializeUser(accessPackage: any) {
    this.setAccessPackage(accessPackage)
  }

  public async setAccessPackage(accessPackage: any) {
    this.accessPackage = accessPackage
    if (this.accessPackage === "test") {
      this.core.stores.userAccount.initUser(hash)
    } else {
      this.core.stores.userAccount.initUser(this.accessPackage)
    }
  }

}