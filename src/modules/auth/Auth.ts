
import Module from "../Module";
import { Core } from "../..";
import axios from "axios";

interface Config {}
//const hash = "Qmc6qiGGKVAnPUVZJ4XKZLKJe4ZUGX9SrptwzuPphNvCU6"
//const hash = "QmWEXExboWzfGsWrDcZo4tsncvNhLmkCUA26hgWR4JTDmS"


//const hash = "Qme8UavwerXnvCe1tiQRVdEZApkzadh1AtsjfmeeBSV8rY"
//const hash = "QmczbczVzjqz67Y2ciQ5N8SM8VGptLCruCJDVPEgknVTPd"
const gateway = "http://localhost:8000"
const hash = "QmREYTDEipWA4A8WvMsF6nhVQUkSku2wdDQjFt13m3sRDK"
//const credential_id = "7ngYHZVmgQWXnSY3WF-Bbg"
const credential_id = "IeBEjYKgjHjd2PDgC84K_Q"

// starting hash_id: QmREYTDEipWA4A8WvMsF6nhVQUkSku2wdDQjFt13m3sRDK

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
    console.log("this.accessPackage: ", this.accessPackage)
    if (this.accessPackage === "test") {
      const userRes = await axios.get(gateway +"/pdos/users/" + credential_id)
      const user = userRes.data
      this.core.stores.userAccount.initUser(user[1].hash_id)
    } else {
      const userRes = await axios.get(gateway +"/pdos/users/" + this.accessPackage)
      const user = userRes.data
      this.core.stores.userAccount.initUser(user[1].hash_id)
    }
  }

}