import { default as PDOSNode } from '../../tree/base/PDOSNode';
import { Treatment, TreatmentInstance } from './type';
export declare const getAll: () => Promise<PDOSNode[]>;
export declare const getActiveTreatments: () => Promise<PDOSNode[]>;
export declare const getTreatmentBinaryForTreatment: (treatment: PDOSNode) => Promise<PDOSNode>;
export declare const getTreatmentRaw: (treatment: string) => Promise<PDOSNode | undefined>;
export declare const getTreatment: (treatment: string) => Promise<PDOSNode | undefined>;
/**
 *
 * External API
 *
 */
export declare const getTreatmentInstancesRaw: (treatment: string) => Promise<any[]>;
export declare const all: () => Promise<Treatment[]>;
export declare const getActive: () => Promise<Treatment[]>;
export declare const getTreatmentInstances: (treatment: string) => Promise<TreatmentInstance[]>;
//# sourceMappingURL=get.d.ts.map