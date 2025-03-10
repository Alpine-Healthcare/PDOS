import { Core } from '../Core';
import { default as PDOSNode } from './base/PDOSNode';
export default class TreatmentEncounter extends PDOSNode {
    static _nodeType: string;
    static name: string;
    constructor(core: Core, treePath: string[], _: string | undefined, hash?: string);
    addStorageChild(date: Date, data: any): Promise<void>;
}
//# sourceMappingURL=TreatmentEncounter.d.ts.map