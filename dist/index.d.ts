import { default as pdos, Core } from './Core';
import { DataGroup } from './actions/Data';
import { Inbox } from './actions/Inbox';
import { default as PDOSNode } from './tree/base/PDOSNode';
import { User } from './actions/User';
import { Treatment, TreatmentInstance } from './actions/Treatments/type';
export declare const actions: {
    inbox: {
        get: () => Promise<Inbox>;
        clear: () => Promise<void>;
        add: (sender: string, message: string, action: string) => Promise<void>;
    };
    treatments: {
        hardDelete: (treatmentName: string) => Promise<void>;
        addTreatment: (name: string, hashId: string, intake: object) => Promise<void>;
        addEncounter: (treatmentName: string, date: Date, messages?: string[]) => Promise<void>;
        enable: (treatmentName: string) => Promise<void>;
        disable: (treatmentName: string) => Promise<void>;
        all: () => Promise<Treatment[]>;
        getActive: () => Promise<Treatment[]>;
        getActiveTreatments: () => Promise<PDOSNode[]>;
        getTreatmentInstances: (treatment: string) => Promise<TreatmentInstance[]>;
        getTreatmentBinaryForTreatment: (treatment: PDOSNode) => Promise<PDOSNode>;
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