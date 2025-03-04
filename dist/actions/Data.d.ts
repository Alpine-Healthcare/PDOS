export interface DataGroup {
    metric: string;
    records: Record<string, Record<string, any>>;
}
export declare const sync: () => Promise<void>;
export declare const getAllRecords: () => Promise<Record<string, DataGroup>>;
export declare const getGroup: (metric: string) => Promise<DataGroup | undefined>;
//# sourceMappingURL=Data.d.ts.map