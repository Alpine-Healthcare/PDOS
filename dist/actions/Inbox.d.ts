export interface Inbox {
    unread_messages: {
        message: string;
        sender: string;
        sentOn: string;
    }[];
}
export declare const clearMessages: () => Promise<void>;
export declare const get: () => Promise<Inbox>;
export declare const getMessages: () => Promise<any>;
export declare const addMessage: (sender: string, message: string) => Promise<void>;
//# sourceMappingURL=Inbox.d.ts.map