import { default as pdos, Core } from './Core';
import { Inbox } from './actions/Inbox';
import { Treatment } from './actions/Treatments';
import { default as PDFSNode } from './store/PDFSNode';
import { User } from './actions/User';
export declare const actions: {
    inbox: {
        getMessages: () => Promise<any>;
        clearMessages: () => Promise<void>;
        addMessage: (sender: string, message: string) => Promise<void>;
        get: () => Promise<Inbox>;
    };
    treatments: {
        all: () => Promise<Treatment[]>;
        hardDelete: (treatmentName: string) => Promise<void>;
        getActive: () => Promise<Treatment[]>;
        getActiveTreatments: () => Promise<PDFSNode[]>;
        getTreatmentInstances: (treatment: string) => Promise<any[]>;
        getTreatmentBinaryForTreatment: (treatment: PDFSNode) => Promise<PDFSNode>;
        addTreatment: (name: string, hashId: string, intake: object) => Promise<void>;
        enable: (treatmentName: string) => Promise<void>;
        disable: (treatmentName: string) => Promise<void>;
    };
    data: {
        sync: () => Promise<void>;
        getAllRecords: () => any;
    };
    user: {
        updateInfo: (name?: string, profileImageBase64?: string) => Promise<void>;
        getInfo: () => Promise<User>;
    };
};
export type { User, Treatment, Inbox };
export { Core, PDFSNode, pdos };
//# sourceMappingURL=index.d.ts.map