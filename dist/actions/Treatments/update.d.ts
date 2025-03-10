export declare const addTreatment: (name: string, hashId: string, intake: object) => Promise<void>;
export declare const hardDelete: (treatmentName: string) => Promise<void>;
export declare const enable: (treatmentName: string) => Promise<void>;
export declare const disable: (treatmentName: string) => Promise<void>;
export declare const addEncounter: (treatmentName: string, date: Date, messages?: string[]) => Promise<void>;
//# sourceMappingURL=update.d.ts.map