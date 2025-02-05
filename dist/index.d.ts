import { default as pdos, Core } from './Core';
import { default as PDFSNode } from './store/PDFSNode';
export declare const actions: {
    inbox: {
        getMessages: () => Promise<any>;
        clearMessages: () => Promise<void>;
    };
    treatments: {
        getActiveTreatments: () => any;
        getTreatmentInstances: (treatment: string) => any[];
        getTreatmentBinaryForTreatment: (treatment: PDFSNode) => Promise<any>;
        addTreatment: (name: string, hashId: string, intake: object) => Promise<void>;
    };
    data: {
        sync: () => Promise<void>;
        getAllRecords: () => any;
    };
};
export { Core, PDFSNode };
export default pdos;
//# sourceMappingURL=index.d.ts.map