import { Core } from '../Core';
import { default as PDOSNode } from './base/PDOSNode';
export default class TreatmentInstance extends PDOSNode {
    static _nodeType: string;
    static name: string;
    constructor(core: Core, treePath: string[], instanceType: string | undefined, hash?: string);
}
//# sourceMappingURL=TreatmentInstance.d.ts.map