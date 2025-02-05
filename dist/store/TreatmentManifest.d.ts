import { Core } from "../Core";
import PDFSNode from "./PDFSNode";
import Treatment from "./Treatment";
export default class TreatmentManifest extends PDFSNode {
    static _nodeType: string;
    constructor(core: Core, treePath: string[], instanceType?: string, hash?: string);
    get treatments(): Treatment[];
    addTreatment(treatmentName?: string, treatmentBinaryHash?: string, intakeObject?: object): Promise<void>;
}
//# sourceMappingURL=TreatmentManifest.d.ts.map