import { default as pdos, Core } from './Core';
import { DataGroup } from './actions/Data';
import { Inbox } from './actions/Inbox';
import { Treatment, TreatmentInstance } from './actions/Treatments';
import { default as PDOSNode } from './tree/base/PDOSNode';
import { User } from './actions/User';
export declare const actions: {
    inbox: {
        get: () => Promise<Inbox>;
        clear: () => Promise<void>;
        add: (sender: string, message: string, action: string) => Promise<void>;
    };
    treatments: {
        all: () => Promise<Treatment[]>;
        hardDelete: (treatmentName: string) => Promise<void>;
        getActive: () => Promise<Treatment[]>;
        getActiveTreatments: () => Promise<PDOSNode[]>;
        getTreatmentInstances: (treatment: string) => Promise<TreatmentInstance[]>;
        getTreatmentBinaryForTreatment: (treatment: PDOSNode) => Promise<PDOSNode>;
        addTreatment: (name: string, hashId: string, intake: object) => Promise<void>;
        enable: (treatmentName: string) => Promise<void>;
        disable: (treatmentName: string) => Promise<void>;
    };
    data: {
        sync: () => Promise<void>;
        getAllRecords: () => Promise<Record<string, DataGroup>>;
        getGroup: (metric: string) => Promise<DataGroup | undefined>;
    };
    user: {
        updateInfo: (name?: string, profileImageHash?: string) => Promise<void>;
        getInfo: () => Promise<User>;
        updatePushToken: (expoPushToken: string) => Promise<void>;
    };
};
export type { User, Treatment, Inbox, TreatmentInstance, DataGroup };
export { Core, PDOSNode, pdos };
//# sourceMappingURL=index.d.ts.map