import { Core } from '../Core';
import { default as PDOSNode } from './base/PDOSNode';
export declare const toCamel: (s: string) => string;
export default class DataManifest extends PDOSNode {
    static _nodeType: string;
    constructor(core: Core, treePath: string[], instanceType: string | undefined, hash?: string);
    getDataGroup(metric: string): Promise<PDOSNode | undefined>;
    addDataGroup(dataMetric?: string): Promise<void>;
}
//# sourceMappingURL=DataManifest.d.ts.map