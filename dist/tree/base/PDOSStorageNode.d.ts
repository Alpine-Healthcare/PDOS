import { Core } from '../../Core';
import { default as PDOSNode } from './PDOSNode';
export default class PDOSStorageNode extends PDOSNode {
    protected core: Core;
    static _nodeType: string;
    static name: string;
    constructor(core: Core, treePath: string[], nodeType: string, hash?: string);
}
//# sourceMappingURL=PDOSStorageNode.d.ts.map