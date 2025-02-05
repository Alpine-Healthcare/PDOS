import PDFSNode from "./PDFSNode";
export default class TreatmentInstance extends PDFSNode {
    static _nodeType = "N_TreatmentInstance_I";
    constructor(core, treePath, instanceType, hash) {
        super(core, treePath, "N_TreatmentInstance_" + instanceType, hash);
    }
}
//# sourceMappingURL=TreatmentInstance.js.map