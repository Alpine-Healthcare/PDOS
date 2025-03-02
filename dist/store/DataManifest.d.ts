import { Core } from '../Core';
import { default as PDFSNode } from './PDFSNode';
export declare const toCamel: (s: string) => string;
export default class DataManifest extends PDFSNode {
    static _nodeType: string;
    constructor(core: Core, treePath: string[], instanceType: string | undefined, hash?: string);
    getDataGroup(metric: string): Promise<PDFSNode | undefined>;
    addDataGroup(dataMetric?: string): Promise<void>;
}
//# sourceMappingURL=DataManifest.d.ts.map