export interface Inbox {
    messages: {
        message: string;
        sender: string;
        sentOn: string;
    }[];
    unread_messages: {
        message: string;
        sender: string;
        sentOn: string;
    }[];
}
export declare const clear: () => Promise<void>;
export declare const get: () => Promise<Inbox>;
export declare const getRaw: () => Promise<any>;
export declare const add: (sender: string, message: string) => Promise<void>;
//# sourceMappingURL=Inbox.d.ts.map