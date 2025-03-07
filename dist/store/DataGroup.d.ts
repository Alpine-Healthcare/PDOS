import { Core } from '../Core';
import { default as PDOSNode } from './PDOSNode';
export default class DataGroup extends PDOSNode {
    static _nodeType: string;
    constructor(core: Core, treePath: string[], instanceType: string | undefined, hash?: string);
    updateData(): Promise<void>;
}
//# sourceMappingURL=DataGroup.d.ts.map