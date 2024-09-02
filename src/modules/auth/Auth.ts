
import Module from "../Module";
import { Core } from "../..";
import axios from "axios";

interface Config {}

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
      const initCredentialId = this.core.test?.initCredentialId
      const userRes = await axios.get(this.core.gatewayURL +"/pdos/users/" + initCredentialId)
      const user = userRes.data
      this.core.stores.userAccount.initUser(user[1].hash_id)
    } else {
      const userRes = await axios.get(this.core.gatewayURL +"/pdos/users/" + this.accessPackage)
      const user = userRes.data
      this.core.stores.userAccount.initUser(user[1].hash_id)
    }
  }

}