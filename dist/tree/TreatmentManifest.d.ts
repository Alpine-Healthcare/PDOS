import { Core } from '../Core';
import { default as PDOSNode } from './base/PDOSNode';
export default class TreatmentManifest extends PDOSNode {
    static _nodeType: string;
    constructor(core: Core, treePath: string[], instanceType?: string, hash?: string);
    addTreatment(treatmentName?: string, treatmentBinaryHash?: string, intakeObject?: object): Promise<void>;
}
//# sourceMappingURL=TreatmentManifest.d.ts.map