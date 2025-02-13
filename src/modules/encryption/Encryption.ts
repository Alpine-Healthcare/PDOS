import Module from "../Module";
import { Core } from "../../Core";

import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { LIT_NETWORK } from "@lit-protocol/constants";
import { ALPINE_HEALTHCARE } from "../auth/Auth";

import { encryptString, decryptToString } from "@lit-protocol/encryption"
import { getRandomBytesSync } from "ethereum-cryptography/random.js";
import { hexToBytes, bytesToHex, bytesToUtf8, utf8ToBytes } from "ethereum-cryptography/utils.js";


import { LIT_ABILITY } from "@lit-protocol/constants";
import {
  AuthSig,
  LitAccessControlConditionResource,
  createSiweMessage,
  createSiweMessageWithRecaps,
  generateAuthSig,
} from "@lit-protocol/auth-helpers";
import * as aes from "ethereum-cryptography/aes.js";
import PDFSNode from "../../store/PDFSNode";


const accessCondition = (address: string) => ([{
  chain: "baseSepolia",  // e.g. "ethereum", "polygon", "mumbai", etc.
  contractAddress: ALPINE_HEALTHCARE,
  functionName: "hasUserAccess",
  functionParams: [address],  // Lit will replace :userAddress with the requesting user's address
  functionAbi: {
    name: "hasUserAccess",
    inputs: [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],  // ensure output type is bool
    stateMutability: "view",
    type: "function"
  },
  returnValueTest: {
    key: "",              // empty because the function returns a single value
    comparator: "=",
    value: "true"         // expecting the function to return true for access
  }
}]);

const capacityDelegationAuthSig ={
  sig: '0x288b2e409856b40d3b49d7500c843959799cc7dfafd2ded49d74e40ddbe0a7ec26cc33618dd74e5f631f464c4e3dc02cb17c25229343856214fbeb38b007df191c',
  derivedVia: 'web3.eth.personal.sign',
  signedMessage: 'localhost wants you to sign in with your Ethereum account:\n' +
    '0xe4d172EE62f88Ba29D051D60620fEBB308B81F4E\n' +
    '\n' +
    "This is a test statement.  You can put anything you want here. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Auth': 'Auth' for 'lit-ratelimitincrease://117166'.\n" +
    '\n' +
    'URI: lit:capability:delegation\n' +
    'Version: 1\n' +
    'Chain ID: 1\n' +
    'Nonce: 0xe1fbec40e2998405cfa484773d3ce940247fa18aca32b8de21d388d4131f66c9\n' +
    'Issued At: 2025-02-11T21:06:11.768Z\n' +
    'Expiration Time: 2025-02-18T19:46:11.764Z\n' +
    'Resources:\n' +
    '- urn:recap:eyJhdHQiOnsibGl0LXJhdGVsaW1pdGluY3JlYXNlOi8vMTE3MTY2Ijp7IkF1dGgvQXV0aCI6W3siZGVsZWdhdGVfdG8iOlsiQ2JjMTFFNTM0MDc3YTE4MTQ3NmM3YTVjNTExYTVmZmI0YzE3ZEI2NSJdLCJuZnRfaWQiOlsiMTE3MTY2Il0sInVzZXMiOiIxMDAwIn1dfX0sInByZiI6W119',
  address: '0xe4d172EE62f88Ba29D051D60620fEBB308B81F4E'
}

const PDOS_ACCESS_PACKAGE = "pdos-accessPackage"

export interface AccessPackage {
  iv: string,
  datakey: string,
}

export interface AccessPackageEncrypted {
  ciphertext: string,
  dataToEncryptHash: string
}

enum Portal {
  OWNER,
  REMOTE
}

interface EncryptionConfig {
  enabled?: boolean,
  portal?: 'owner' | 'remote'
}

export default class Encryption extends Module {
  private litNodeClient: LitJsSdk.LitNodeClient | undefined
  private accessPackage: AccessPackage | undefined
  private accessPackageEncrypted: AccessPackageEncrypted | undefined

  private portalEmit: ((message: string, prop: string, data: string) => void) | undefined
  private checkPortalMessages: ((type: string) => any) | undefined


  constructor(core : Core, private config : EncryptionConfig) {
    super(core);
  }

  protected async start() {
    if (!this.config.enabled) {
      return
    }

    if (this.config.portal === 'owner') {
      return
    }

    this.litNodeClient = new LitJsSdk.LitNodeClient({
        litNetwork: LIT_NETWORK.DatilTest,
      });
      
    await this.litNodeClient.connect();
  }

  public setPortalSend(emit: (message: string, prop: string, data: string) => void) {
    this.portalEmit = emit
  }

  public setPortalReceive(checkReceivedMessages: (type: string) => any) {
    this.checkPortalMessages = checkReceivedMessages
  }

  public async portal<t>(type: string, prop?: string, data?: any) {
    console.log("emitting with: ", type, prop, data)
    console.log("this.portalEmit: ", this.portalEmit)
    if (!this.portalEmit) {
      throw new Error("Portal emit not set")
    }
    this.portalEmit(type, prop ?? '', data ?? '')
    const portalResponse = await this.checkPortalMessages?.(type)
    return portalResponse as t
  }

  public async generateAccessPackage(): Promise<AccessPackageEncrypted | undefined> {
    if (!this.config.enabled) {
      return { ciphertext: "", dataToEncryptHash: "" }
    }

    if (this.config.portal === 'owner') {
      return await this.portal("generateAccessPackage")
    }

    const iv = getRandomBytesSync(16);
    const datakey = getRandomBytesSync(32);

    const accessPackage: AccessPackage = {
      iv: bytesToHex(iv),
      datakey: bytesToHex(datakey),
    }


    const accessPackageEncrypted = await this.encryptWithLit(JSON.stringify(accessPackage));

    if (!accessPackageEncrypted) {
      throw new Error("Failed to encrypt access package with Lit")
    }


    this.accessPackage = accessPackage;
    await this.core.modules.storage?.addItem(PDOS_ACCESS_PACKAGE, JSON.stringify(accessPackage))

    return accessPackageEncrypted
  }

  public async setAccessPackage(accessPackageEncrypted: AccessPackageEncrypted) {
    if (!this.config.enabled) {
      return
    }

    this.accessPackageEncrypted = accessPackageEncrypted 

    if (!this.accessPackageEncrypted) {
      throw new Error("Access package not found, abandoning!")
    }

    const savedAccessPackage = await this.core.modules.storage?.getItem(PDOS_ACCESS_PACKAGE)

    if (savedAccessPackage) {
      this.accessPackage = JSON.parse(savedAccessPackage)
      return
    }

    if (this.config.portal === 'owner') {
      console.log("tihs.acess package: ", this.accessPackageEncrypted)
      const portalResponse = await this.portal("setAccessPackage", "accessPackageEncrypted", JSON.stringify(this.accessPackageEncrypted))
      console.log("portalREsponse: ", portalResponse)
    } else {
      console.log("decrypting with lit")
      const decryptedAccessPackage = await this.decryptWithLit(this.accessPackageEncrypted?.ciphertext, this.accessPackageEncrypted?.dataToEncryptHash)

      if (!decryptedAccessPackage) {
        throw new Error("Failed to decrypt access package with Lit")
      }

      this.accessPackage = JSON.parse(decryptedAccessPackage)

    }

  }

  public async encryptNode(data: string | object) {
    const dataParsed = typeof data === "string" ? data : JSON.stringify(data)

    if (!this.accessPackage) {
      return dataParsed
    }

    if (!this.accessPackage) {
      throw new Error("Access package not found, abandoning!")
    }

    return bytesToHex(aes.encrypt(
      utf8ToBytes(dataParsed),
      hexToBytes(this.accessPackage.datakey),
      hexToBytes(this.accessPackage.iv),
      "aes-256-ctr"
    ))
  }
  
  public async decryptNode(encryptedData: string) {
    if (!this.accessPackage) {
      return JSON.parse(encryptedData)
    }
    if (!this.accessPackage) {
      return
    }

    return JSON.parse(bytesToUtf8(aes.decrypt(
      hexToBytes(encryptedData),
      hexToBytes(this.accessPackage.datakey),
      hexToBytes(this.accessPackage.iv),
      "aes-256-ctr"
    )))
  }

  public async encryptWithLit(data: string): Promise<AccessPackageEncrypted | undefined> {
    if (!this.core.modules.auth?.publicKey || !this.litNodeClient) {
      throw new Error("Missing publickey or litNodeClient")
    }

    const { ciphertext, dataToEncryptHash } = await encryptString(
      {
        evmContractConditions: accessCondition(this.core.modules.auth?.publicKey) as any,
        dataToEncrypt: data,
      },
      this.litNodeClient,
    );

    return {
      ciphertext,
      dataToEncryptHash,
    };
  }

  public async decryptWithLit(ciphertext: string, dataToEncryptHash: string) {
    const sessionSigs = await this.getSessionSignatures();
    if (!this.core.modules.auth?.publicKey || !this.litNodeClient || !sessionSigs) {
      throw new Error("Missing publickey, litNodeClient, or sessionSigs")
    }

    console.log("publickye: ", this.core.modules.auth?.publicKey)
    if (this.portalEmit) {
      this.portalEmit("random", "calling decrypt in lit", "")

    }
    // Decrypt the message
    const decryptedString = await decryptToString(
      {
        evmContractConditions: accessCondition(this.core.modules.auth?.publicKey) as any,
        chain: "ethereum",
        ciphertext,
        dataToEncryptHash,
        sessionSigs,
      },
      this.litNodeClient,
    );


    // Return the decrypted string
    return decryptedString;

  }

  public async getAuthSig(toSign: string) {
    const signer = await this.core.modules.auth?.getSigner()
    if (!signer) {
      throw new Error("Missing signer")
    }
    // Generate the authSig
    const authSig = await generateAuthSig({
      signer: signer,
      toSign,
    });

    return authSig

  }

  public async getSessionSignatures(){

    console.log("gettin session sigs")


    if (!this.litNodeClient || !this.core.modules.auth?.publicKey) {
      throw new Error("Missing litNodeClient, publickey, or signer")
    }
 
    // Get the latest blockhash
    const latestBlockhash = await this.litNodeClient.getLatestBlockhash();
 
    // Define the authNeededCallback function
    const authNeededCallback = async(params: any) => {
      if (!params.uri) {
        throw new Error("uri is required");
      }
      if (!params.expiration) {
        throw new Error("expiration is required");
      }
 
      if (!params.resourceAbilityRequests) {
        throw new Error("resourceAbilityRequests is required");
      }

      if (!this.core.modules.auth?.publicKey) {
        throw new Error("publicKey is required");
      }

      // Create the SIWE message
      const toSign = await createSiweMessageWithRecaps({
        uri: params.uri,
        expiration: params.expiration,
        resources: params.resourceAbilityRequests,
        walletAddress: this.core.modules.auth?.publicKey,
        nonce: latestBlockhash,
        litNodeClient: this.litNodeClient,
      });

      if (this.config.portal === 'remote') {
        if (this.portalEmit) {
          this.portalEmit("random", "want a sign", "")
        }
        const authSig: unknown = await this.portal("signRequest", "toSign", JSON.stringify(toSign))
        if (this.portalEmit) {

        this.portalEmit("random", "got authSig", JSON.stringify(authSig))
        }
        return authSig as AuthSig
      } else {
        return await this.getAuthSig(toSign);
      }


    }
 
    // Define the Lit resource
    const litResource = new LitAccessControlConditionResource('*');

    try {
       // Get the session signatures
    const sessionSigs = await this.litNodeClient.getSessionSigs({
      expiration: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
        chain: "ethereum",
        resourceAbilityRequests: [
            {
                resource: litResource,
                ability: LIT_ABILITY.AccessControlConditionDecryption,
            },
        ],
        authNeededCallback: authNeededCallback as any,
        capacityDelegationAuthSig, 
    });
    console.log("returning session sigs")
    if (this.portalEmit) {
     this.portalEmit("random", "returnign session sigs", "")
    }
    return sessionSigs;

    } catch (error) {

      if (this.portalEmit) {
        this.portalEmit("error", "error", JSON.stringify(error))
      }

    }
   
 }


}