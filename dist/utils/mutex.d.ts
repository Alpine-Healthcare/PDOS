interface MutexInfo {
    acquired: boolean;
    timestamp: string;
}
export declare const getUserHashId: (credential_id: string) => Promise<any>;
export declare const getUserMutex: (credential_id: string) => Promise<MutexInfo>;
export declare const releaseMutex: (credential_id: string) => Promise<boolean>;
export declare const acquireMutexForUser: (credential_id: string) => Promise<boolean>;
export declare const cleanupMutexForUser: (credential_id: string) => Promise<boolean>;
export {};
//# sourceMappingURL=mutex.d.ts.map