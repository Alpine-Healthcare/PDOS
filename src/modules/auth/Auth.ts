
import Module from "../Module";
import { Core } from "../..";
import axios from "axios";

interface Config {}

export default class Auth extends Module {
  public credentialId : string | null = null;

  constructor(core : Core, private config : Config){
    super(core);
  }

  public async initializeUser(credentialId: string) {
    this.setCredentialId(credentialId)
  }

  public async setCredentialId(credentialId: string) {
    this.credentialId = credentialId 
    if (this.credentialId === "test") {
      const initCredentialId = this.core.test?.initCredentialId
      const userRes = await axios.get(this.core.gatewayURL +"/pdos/users/" + initCredentialId)
      const user = userRes.data
      console.log("user: ", user)
      this.core.stores.userAccount.initUser(user[1].hash_id)
    } else {
      const userRes = await axios.get(this.core.gatewayURL +"/pdos/users/" + this.credentialId)
      const user = userRes.data
      this.core.stores.userAccount.initUser(user[1].hash_id)
    }
  }

}