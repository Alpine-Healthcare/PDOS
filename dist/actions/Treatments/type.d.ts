export interface Treatment {
    name: string;
    treatmentName: string;
    treatmentBinaryHash: string;
    is_active: boolean;
    hashId: string;
    intake: object;
    active_on: string;
}
export interface TreatmentInstance {
    messages: {
        message: string;
        sender: string;
        sentOn: string;
    }[];
    date: string;
}
export declare const mapRawToTreatment: (raw: any) => Treatment;
export declare const mapRawToTreatmentInstance: (raw: any) => TreatmentInstance;
//# sourceMappingURL=type.d.ts.map