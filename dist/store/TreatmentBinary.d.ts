import { Core } from "../Core";
import PDFSNode from "./PDFSNode";
export default class TreatmentBinary extends PDFSNode {
    static _nodeType: string;
    constructor(core: Core, treePath: string[], instanceType: string | undefined, hash?: string);
    protected onNodeLoad(): void;
    private get dataMetrics();
    private checkDataAccess;
    private checkPDOSNodeExistsAndCreateIfNot;
    syncData(): Promise<void>;
}
//# sourceMappingURL=TreatmentBinary.d.ts.map