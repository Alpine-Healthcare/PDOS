export interface User {
    name?: string;
    profileImageHash?: string;
    expoPushToken?: string;
}
export declare const updateInfo: (name?: string, profileImageHash?: string) => Promise<void>;
export declare const updatePushToken: (expoPushToken: string) => Promise<void>;
export declare const getInfo: () => Promise<User>;
//# sourceMappingURL=User.d.ts.map