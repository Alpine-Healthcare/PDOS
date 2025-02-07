import { default as Module } from '../Module';
import { Core } from '../..';
import { ethers } from 'ethers';
export declare enum AuthType {
    WALLET = 0,
    PASSKEY = 1
}
export declare enum InitSteps {
    ADDING_TO_ALPINE = "Adding to alpine",
    GENERATING_ENCRYPTION_KEYS = "Generating encryption keys",
    INITIALIZING_PDOS = "Initializing PDOS",
    ONBOARDING = "Onboarding",
    COMPLETED = "Completed"
}
interface AuthInfo {
    isAuthenticated: boolean;
    isActive: boolean;
    pdosRoot: string | undefined;
    computeNodeAddress: string | undefined;
}
interface Config {
    eip1193Provider: any;
    jsonRpcProvider: ethers.JsonRpcProvider;
    privateKey: string;
}
export declare const ALPINE_HEALTHCARE = "0xA690F14afBe9b9C9366088Ab32dC49451C4CBE50";
export declare const ALPINE_HEALTHCARE_ABI: ({
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    outputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: string;
    type: string;
} | {
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    outputs: {
        components: {
            internalType: string;
            name: string;
            type: string;
        }[];
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: string;
    type: string;
})[];
export default class Auth extends Module {
    private config;
    authType: AuthType | undefined;
    info: AuthInfo;
    initStep: InitSteps | undefined;
    credentialId: string | undefined;
    publicKey: string | undefined;
    private ethersProvider;
    private eip1193Provider;
    private wallet;
    private initStarted;
    constructor(core: Core, config: Config);
    initializeWalletUserWithPrivateKey(): Promise<void>;
    initializeWalletUser(eip1193Provider?: ethers.Eip1193Provider): Promise<void>;
    disconnectWalletUser(): Promise<void>;
    /** Wallet Support */
    initInfoForWalletUser(): Promise<void>;
    getSigner(): Promise<ethers.Wallet | ethers.JsonRpcSigner>;
    checkIsActive(): Promise<any>;
    onboard(pdosHashId: string, encryptedDataKey: string): Promise<void>;
    offboard(): Promise<void>;
    getPDOSRoot(address?: string): Promise<any>;
    updatePDOSRoot(newHash: string, address?: string): Promise<void>;
    addComputeNodeAccessForUser(computeAddress: string): Promise<void>;
    getUsersForComputeNode(computeAddress: string): Promise<any>;
    getUserComputeNode(): Promise<any>;
}
export {};
//# sourceMappingURL=Auth.d.ts.map