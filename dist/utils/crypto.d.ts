export declare const publicKeyToHex: (publicKey: string) => string;
export declare const uint8ArrayToBase64: (uint8Array: Uint8Array) => string;
export declare const base64ToUint8Array: (base64: string) => Uint8Array;
export declare const importAddressAsHmacKey: (keyBytes: Uint8Array) => Promise<CryptoKey>;
export declare const importIvAsKey: (iv: Uint8Array) => Promise<CryptoKey>;
export declare const wrapIv: (iv: Uint8Array, publicKey: CryptoKey) => Promise<ArrayBuffer>;
//# sourceMappingURL=crypto.d.ts.map