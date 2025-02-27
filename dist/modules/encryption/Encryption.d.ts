import { default as Module } from '../Module';
import { Core } from '../../Core';
export interface AccessPackage {
    iv: string;
    datakey: string;
}
export interface AccessPackageEncrypted {
    ciphertext: string;
    dataToEncryptHash: string;
}
interface EncryptionConfig {
    enabled?: boolean;
    portal?: "owner" | "remote";
}
export default class Encryption extends Module {
    private config;
    private litNodeClient;
    accessPackage: AccessPackage | undefined;
    private accessPackageEncrypted;
    constructor(core: Core, config: EncryptionConfig);
    protected start(): Promise<void>;
    generateAccessPackage(): Promise<AccessPackageEncrypted | undefined>;
    setAccessPackage(accessPackageEncrypted: AccessPackageEncrypted): Promise<void>;
    encryptNode(data: string | object): Promise<string>;
    decryptNode(encryptedData: string): Promise<any>;
    encryptWithLit(data: string): Promise<AccessPackageEncrypted | undefined>;
    decryptWithLit(ciphertext: string, dataToEncryptHash: string): Promise<string>;
    getAuthSig(toSign: string): Promise<import('@lit-protocol/types').AuthSig>;
    getSessionSignatures(): Promise<import('@lit-protocol/types').SessionSigsMap | undefined>;
}
export {};
//# sourceMappingURL=Encryption.d.ts.map