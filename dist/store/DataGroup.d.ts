import { Core } from '../Core';
import { default as PDFSNode } from './PDFSNode';
export default class DataGroup extends PDFSNode {
    static _nodeType: string;
    constructor(core: Core, treePath: string[], instanceType: string | undefined, hash?: string);
    updateData(): Promise<void>;
}
//# sourceMappingURL=DataGroup.d.ts.map