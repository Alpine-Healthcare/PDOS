import Module from "../Module";
import { Core } from "../../Core";
import PDFSNode from "../../store/PDFSNode";
export interface AccessPackage {
    iv: string;
    datakey: string;
}
export interface AccessPackageEncrypted {
    ciphertext: string;
    dataToEncryptHash: string;
}
export default class Encryption extends Module {
    private config;
    private litNodeClient;
    private accessPackage;
    private accessPackageEncrypted;
    constructor(core: Core, config: null);
    protected start(): Promise<void>;
    generateAccessPackage(): Promise<AccessPackageEncrypted | undefined>;
    setAccessPackage(root: PDFSNode): Promise<void>;
    encryptNode(data: string | object): Promise<string>;
    decryptNode(encryptedData: string): Promise<any>;
    encryptWithLit(data: string): Promise<AccessPackageEncrypted | undefined>;
    decryptWithLit(ciphertext: string, dataToEncryptHash: string): Promise<string>;
    getSessionSignatures(): Promise<import("@lit-protocol/types").SessionSigsMap>;
}
//# sourceMappingURL=Encryption.d.ts.map