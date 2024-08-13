import { addNodeToNetworkMapper } from "./NetworkMapper";
import PDFSNode from "./PDFSNode";
import TreatmentBinary from "./TreatmentBinary";
export default class Treatment extends PDFSNode {
    static _nodeType = "N_Treatment_I";
    constructor(core, treePath, instanceType, hash) {
        super(core, treePath, "N_Treatment_" + instanceType, hash);
        addNodeToNetworkMapper("TreatmentBinary", TreatmentBinary);
    }
    async disable() {
        this.update({
            "is_active": false
        });
    }
    async enable() {
        this.update({
            "is_active": true
        });
    }
}
//# sourceMappingURL=Treatment.js.map