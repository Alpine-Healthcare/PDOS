
import Module from "../Module";
import { Core } from "../..";
import axios from "axios";
import { ethers } from "ethers";
import { makeObservable, observable } from "mobx";

enum AuthType {
  WALLET,
  PASSKEY
}

interface AuthInfo {
  isAuthenticated: boolean
  isActive: boolean
  pdosRoot: string | undefined
}

interface Config {}

const ALPINE_HEALTHCARE = "0x20a8d2B24927166cCfb2c22848cD519A7E91Cea5" 
const ALPINE_HEALTHCARE_ABI = [{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"checkActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getAccessPackage","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getPDOSRoot","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_key1","type":"string"},{"internalType":"string","name":"_key2","type":"string"},{"internalType":"string","name":"_key3","type":"string"},{"internalType":"string","name":"_key4","type":"string"}],"name":"onboard","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newHash","type":"string"}],"name":"updatePDOSRoot","outputs":[],"stateMutability":"nonpayable","type":"function"}] 

export default class Auth extends Module {

  private authType : AuthType | undefined;
  public info: AuthInfo = {
    isAuthenticated: false,
    isActive: false,
    pdosRoot: undefined
  }

  public credentialId : string | undefined = undefined;
  public publicKey: string | undefined;
  private ethersProvider: ethers.BrowserProvider | undefined;
  private eip1193Provider: any;

  constructor(core : Core, private config : Config){
    super(core);
    makeObservable(this, {
      info: observable,
      publicKey: observable,
    });
  }

  public async initializePasskeyUser(
    credentialId: string,
  ) {
    console.log("initing credid: ", credentialId)
    await this.setCredentialId(credentialId)
    this.authType = AuthType.PASSKEY
    this.info.isAuthenticated = true
    this.info.isActive = true
    return
  }

  public async initializeWalletUser() {
    const addresses = await this.eip1193Provider.request({ method: 'eth_requestAccounts' });
    if (addresses.length > 0) {
      this.publicKey = addresses[0]
      await this.initInfoForWalletUser()
      console.log("pdosRoot", this.info.pdosRoot)
      this.authType = AuthType.WALLET
    }
    return
  }

  public async disconnectWalletUser() {
    this.eip1193Provider.disconnect()
    this.info = {
      isActive: false,
      isAuthenticated: false,
      pdosRoot: undefined
    }
    this.publicKey = undefined
    this.ethersProvider = undefined
    this.eip1193Provider = undefined
  }

  /** Passkey Support */
  
  public async setCredentialId(credentialId: string) {
    this.credentialId = credentialId 
    if (this.credentialId === "test") {
      const initCredentialId = this.core.test?.initCredentialId
      const userRes = await axios.get(this.core.gatewayURL +"/pdos/users/" + initCredentialId)
      const user = userRes.data
      await this.core.stores.userAccount.initUser(user[1].hash_id)
    } else {
      const userRes = await axios.get(this.core.gatewayURL +"/pdos/users/" + this.credentialId)
      const user = userRes.data
      await this.core.stores.userAccount.initUser(user[1].hash_id)
    }
  }

  /** Wallet Support */

  public async initInfoForWalletUser() {
    const isActive = await this.checkIsActive()
    const pdosRoot = await this.getPDOSRoot()
    const accessPackage = await this.getAccessPackage()
    
    await this.core.stores.userAccount.initUser(pdosRoot)

    this.info.isActive = isActive
    this.info.pdosRoot = pdosRoot
    this.info.isAuthenticated = true
  }

  public async getAccessPackage() {
    return {
      key1: "key1",
      key2: "key2",
      key3: "key3",
      key4: "key4"
    }
  }

  public async checkIsActive() {
    if (!this.ethersProvider) {
      return
    }

    const signer = await this.ethersProvider.getSigner();
    const contract = new ethers.Contract(ALPINE_HEALTHCARE, ALPINE_HEALTHCARE_ABI, signer);
    const isActiveReturnValue = await contract.checkActive(this.publicKey);
    return isActiveReturnValue
  }

  public async onboard(){
    if (!this.ethersProvider) {
      return
    }

    const signer = await this.ethersProvider.getSigner();
    const contract = new ethers.Contract(ALPINE_HEALTHCARE, ALPINE_HEALTHCARE_ABI, signer);
    const tx = await contract.onboard(
      "key1",
      "key2",
      "key3",
      "key4"
    );

    const receipt = await tx.wait();
    console.log("receipt", receipt)
    console.log("hash", receipt.hash)
  }

  public async getPDOSRoot() {
    if (!this.ethersProvider) {
      return
    }

    const signer = await this.ethersProvider.getSigner();
    const contract = new ethers.Contract(ALPINE_HEALTHCARE, ALPINE_HEALTHCARE_ABI, signer);
    const pdosRoot = await contract.getPDOSRoot(this.publicKey);
    return pdosRoot 
  }

  public async updatePDOSRoot(newHash: string){ 
    if (!this.ethersProvider) {
      return
    }

    const signer = await this.ethersProvider.getSigner();
    const contract = new ethers.Contract(ALPINE_HEALTHCARE, ALPINE_HEALTHCARE_ABI, signer);
    const tx = await contract.updatePDOSRoot(newHash);

    const receipt = await tx.wait();
    console.log("receipt", receipt)
    console.log("hash", receipt.hash)
    this.info.pdosRoot = newHash 
  }

  public async setProviders(eip1193Provider: any){
    this.eip1193Provider = eip1193Provider
    this.ethersProvider = new ethers.BrowserProvider(eip1193Provider)
  }

  public async setEip1193Provider(provider: any) {
    this.eip1193Provider = provider
  }

  public async setEthersProvider(provider: ethers.BrowserProvider) {
    this.ethersProvider = provider
  }

  public async setPublicKey(publicKey: string) {
    this.publicKey = publicKey
  }


}