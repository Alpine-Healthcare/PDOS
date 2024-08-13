import { Core } from "../Core";
import PDFSNode from "./PDFSNode";
export default class DataManifest extends PDFSNode {
    static _nodeType: string;
    constructor(core: Core, treePath: string[], instanceType: string | undefined, hash?: string);
    addDataGroup(dataMetric?: string): Promise<void>;
}
//# sourceMappingURL=DataManifest.d.ts.map