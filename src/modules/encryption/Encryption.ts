import Module from "../Module";
import { Core } from "../../Core";

import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { LIT_NETWORK } from "@lit-protocol/constants";
import { ALPINE_HEALTHCARE } from "../auth/Auth";

import { encryptString, decryptToString } from "@lit-protocol/encryption";
import { getRandomBytesSync } from "ethereum-cryptography/random.js";
import {
  hexToBytes,
  bytesToHex,
  bytesToUtf8,
  utf8ToBytes,
} from "ethereum-cryptography/utils.js";

import { LIT_ABILITY } from "@lit-protocol/constants";
import {
  AuthSig,
  LitAccessControlConditionResource,
  createSiweMessage,
  createSiweMessageWithRecaps,
  generateAuthSig,
} from "@lit-protocol/auth-helpers";
import * as aes from "ethereum-cryptography/aes.js";

const accessCondition = (address: string) => [
  {
    chain: "baseSepolia", // e.g. "ethereum", "polygon", "mumbai", etc.
    contractAddress: ALPINE_HEALTHCARE,
    functionName: "hasUserAccess",
    functionParams: [], // Lit will replace :userAddress with the requesting user's address
    functionAbi: {
      name: "hasUserAccess",
      inputs: [],
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ], // ensure output type is bool
      stateMutability: "view",
      type: "function",
    },
    returnValueTest: {
      key: "", // empty because the function returns a single value
      comparator: "=",
      value: "true", // expecting the function to return true for access
    },
  },
];

const capacityDelegationAuthSig = {
  sig: "0x38cfac37c1c6fea0ceb56a5c939255f6781c5970ce6e1c64071329021c9daf3a67056b6d0482d7d90c2fbc1ababca4dc96b021f4f663487d61d63dd4292747fa1b",
  derivedVia: "web3.eth.personal.sign",
  signedMessage:
    "localhost wants you to sign in with your Ethereum account:\n" +
    "0x114a31a299d0fb30D1F15fD77fa8c96CdAE43A6D\n" +
    "\n" +
    "This is a test statement.  You can put anything you want here. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Auth': 'Auth' for 'lit-ratelimitincrease://128716'.\n" +
    "\n" +
    "URI: lit:capability:delegation\n" +
    "Version: 1\n" +
    "Chain ID: 1\n" +
    "Nonce: 0x6838569f85ea77c476ffa536005bf959d4daef2851ccffc86035ba0316b93444\n" +
    "Issued At: 2025-02-27T06:34:45.852Z\n" +
    "Expiration Time: 2025-03-06T05:14:45.850Z\n" +
    "Resources:\n" +
    "- urn:recap:eyJhdHQiOnsibGl0LXJhdGVsaW1pdGluY3JlYXNlOi8vMTI4NzE2Ijp7IkF1dGgvQXV0aCI6W3siZGVsZWdhdGVfdG8iOlsiNjMwOUJkODM2RmQ4RkQxMDM3NDJiZjNiODdBMDlhMWEwMTZlQTk1OSJdLCJuZnRfaWQiOlsiMTI4NzE2Il0sInVzZXMiOiIxMDAwIn1dfX0sInByZiI6W119",
  address: "0x114a31a299d0fb30D1F15fD77fa8c96CdAE43A6D",
};

const PDOS_ACCESS_PACKAGE = "pdos-accessPackage";

export interface AccessPackage {
  iv: string;
  datakey: string;
}

export interface AccessPackageEncrypted {
  ciphertext: string;
  dataToEncryptHash: string;
}

enum Portal {
  OWNER,
  REMOTE,
}

interface EncryptionConfig {
  enabled?: boolean;
  portal?: "owner" | "remote";
}

export default class Encryption extends Module {
  private litNodeClient: LitJsSdk.LitNodeClient | undefined;
  public accessPackage: AccessPackage | undefined;
  private accessPackageEncrypted: AccessPackageEncrypted | undefined;

  constructor(
    core: Core,
    private config: EncryptionConfig,
  ) {
    super(core);
  }

  protected async start() {
    if (!this.config.enabled) {
      return;
    }

    if (this.config.portal === "owner") {
      return;
    }

    this.litNodeClient = new LitJsSdk.LitNodeClient({
      litNetwork: LIT_NETWORK.DatilTest,
    });

    await this.litNodeClient.connect();
  }

  public async generateAccessPackage(): Promise<
    AccessPackageEncrypted | undefined
  > {
    if (!this.config.enabled) {
      return { ciphertext: "", dataToEncryptHash: "" };
    }

    if (this.config.portal === "owner") {
      return await this.portal("generateAccessPackage");
    }

    const iv = getRandomBytesSync(16);
    const datakey = getRandomBytesSync(32);

    const accessPackage: AccessPackage = {
      iv: bytesToHex(iv),
      datakey: bytesToHex(datakey),
    };

    const accessPackageEncrypted = await this.encryptWithLit(
      JSON.stringify(accessPackage),
    );

    if (!accessPackageEncrypted) {
      throw new Error("Failed to encrypt access package with Lit");
    }

    this.accessPackage = accessPackage;
    await this.core.modules.storage?.addItem(
      PDOS_ACCESS_PACKAGE,
      JSON.stringify(accessPackage),
    );

    return accessPackageEncrypted;
  }

  public async setAccessPackage(
    accessPackageEncrypted: AccessPackageEncrypted,
  ) {
    if (!this.config.enabled) {
      return;
    }

    this.accessPackageEncrypted = accessPackageEncrypted;

    if (!this.accessPackageEncrypted) {
      throw new Error("Access package not found, abandoning!");
    }

    const savedAccessPackage =
      await this.core.modules.storage?.getItem(PDOS_ACCESS_PACKAGE);

    if (savedAccessPackage) {
      console.log("saved access package", savedAccessPackage);
      this.accessPackage = JSON.parse(savedAccessPackage);
      return;
    }

    if (this.config.portal === "owner") {
      const portalResponse = await this.portal(
        "setAccessPackage",
        "accessPackageEncrypted",
        JSON.stringify(this.accessPackageEncrypted),
      );
      if (portalResponse) {
        this.accessPackage = portalResponse as AccessPackage;
      }
    } else {
      const decryptedAccessPackage = await this.decryptWithLit(
        this.accessPackageEncrypted?.ciphertext,
        this.accessPackageEncrypted?.dataToEncryptHash,
      );

      if (!decryptedAccessPackage) {
        throw new Error("Failed to decrypt access package with Lit");
      }

      if (this.config.portal === "remote") {
        this.portalEmit?.(
          "setAccessPackage",
          "accessPackage",
          decryptedAccessPackage,
        );
      }

      this.accessPackage = JSON.parse(decryptedAccessPackage);
    }

    await this.core.modules.storage?.addItem(
      PDOS_ACCESS_PACKAGE,
      JSON.stringify(this.accessPackage),
    );
  }

  public async encryptNode(data: string | object) {
    const dataParsed = typeof data === "string" ? data : JSON.stringify(data);

    if (!this.accessPackage) {
      return dataParsed;
    }

    if (!this.accessPackage) {
      throw new Error("Access package not found, abandoning!");
    }

    return bytesToHex(
      aes.encrypt(
        utf8ToBytes(dataParsed),
        hexToBytes(this.accessPackage.datakey),
        hexToBytes(this.accessPackage.iv),
        "aes-256-ctr",
      ),
    );
  }

  public async decryptNode(encryptedData: string) {
    if (!this.accessPackage) {
      return JSON.parse(encryptedData);
    }
    if (!this.accessPackage) {
      return;
    }

    return JSON.parse(
      bytesToUtf8(
        aes.decrypt(
          hexToBytes(encryptedData),
          hexToBytes(this.accessPackage.datakey),
          hexToBytes(this.accessPackage.iv),
          "aes-256-ctr",
        ),
      ),
    );
  }

  public async encryptWithLit(
    data: string,
  ): Promise<AccessPackageEncrypted | undefined> {
    if (!this.core.modules.auth?.publicKey || !this.litNodeClient) {
      throw new Error("Missing publickey or litNodeClient");
    }

    const { ciphertext, dataToEncryptHash } = await encryptString(
      {
        evmContractConditions: accessCondition(
          this.core.modules.auth?.publicKey,
        ) as any,
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
    this.portalEmit?.("random", "getting session sigs", "");
    const sessionSigs = await this.getSessionSignatures();
    this.portalEmit?.("random", "got session sigs", "");
    if (
      !this.core.modules.auth?.publicKey ||
      !this.litNodeClient ||
      !sessionSigs
    ) {
      this.portalEmit?.(
        "error",
        "error",
        "Missing publickey, litNodeClient, or sessionSigs",
      );
      throw new Error("Missing publickey, litNodeClient, or sessionSigs");
    }
    this.portalEmit?.("random", "cipherText", ciphertext);
    this.portalEmit?.("random", "publckey", this.core.modules.auth.publicKey);
    this.portalEmit?.("random", "dataToEncryptHash", dataToEncryptHash);
    this.portalEmit?.("random", "sessionSigs", JSON.stringify(sessionSigs));

    // Decrypt the message
    try {
      const decryptedString = await decryptToString(
        {
          evmContractConditions: accessCondition(
            this.core.modules.auth?.publicKey,
          ) as any,
          chain: "ethereum",
          ciphertext,
          dataToEncryptHash,
          sessionSigs,
        },
        this.litNodeClient,
      );
      return decryptedString;
    } catch (error) {
      this.portalEmit?.(
        "random",
        "failed decryptring",
        JSON.stringify((error as any).message),
      );
      throw new Error("Failed to decrypt with Lit");
    }

    // Return the decrypted string
  }

  public async getAuthSig(toSign: string) {
    const signer = await this.core.modules.auth?.getSigner();
    if (!signer) {
      throw new Error("Missing signer");
    }
    // Generate the authSig
    const authSig = await generateAuthSig({
      signer: signer,
      toSign,
    });

    return authSig;
  }

  public async getSessionSignatures() {
    if (!this.litNodeClient || !this.core.modules.auth?.publicKey) {
      this.portalEmit?.(
        "random",
        "error",
        this.core.modules.auth?.publicKey ?? "missing publickey",
      );
      throw new Error("Missing litNodeClient, publickey, or signer");
    }

    this.portalEmit?.(
      "random",
      "getting latest blockhash",
      this.core.modules.auth?.publicKey,
    );

    // Get the latest blockhash
    const latestBlockhash = await this.litNodeClient.getLatestBlockhash();

    // Define the authNeededCallback function
    const authNeededCallback = async (params: any) => {
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

      this.portalEmit?.("random", "params", JSON.stringify(params.uri));

      // Create the SIWE message
      const toSign = await createSiweMessageWithRecaps({
        uri: params.uri,
        expiration: params.expiration,
        resources: params.resourceAbilityRequests,
        walletAddress: this.core.modules.auth?.publicKey,
        nonce: latestBlockhash,
        litNodeClient: this.litNodeClient,
      });

      if (this.config.portal === "remote") {
        const authSig: unknown = await this.portal(
          "signRequest",
          "toSign",
          JSON.stringify(toSign),
        );
        return authSig as AuthSig;
      } else {
        return await this.getAuthSig(toSign);
      }
    };

    // Define the Lit resource
    const litResource = new LitAccessControlConditionResource("*");

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
      return sessionSigs;
    } catch (error) {
      this.portalEmit?.("error", "error", JSON.stringify(error));
    }
  }
}
