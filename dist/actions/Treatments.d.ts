import { default as PDFSNode } from '../store/PDFSNode';
export interface Treatment {
    name: string;
    treatmentName: string;
    treatmentBinaryHash: string;
    is_active: boolean;
    hashId: string;
    intake: object;
    active_on: string;
}
export declare const addTreatment: (name: string, hashId: string, intake: object) => Promise<void>;
export declare const getAll: () => Promise<PDFSNode[]>;
export declare const all: () => Promise<Treatment[]>;
export declare const getActiveTreatments: () => Promise<PDFSNode[]>;
export declare const hardDelete: (treatmentName: string) => Promise<void>;
export declare const getActive: () => Promise<Treatment[]>;
export declare const enable: (treatmentName: string) => Promise<void>;
export declare const disable: (treatmentName: string) => Promise<void>;
export declare const getTreatmentBinaryForTreatment: (treatment: PDFSNode) => Promise<PDFSNode>;
export declare const getTreatmentRaw: (treatment: string) => Promise<PDFSNode | undefined>;
export declare const getTreatment: (treatment: string) => Promise<PDFSNode | undefined>;
export declare const getTreatmentInstances: (treatment: string) => Promise<any[]>;
//# sourceMappingURL=Treatments.d.ts.map