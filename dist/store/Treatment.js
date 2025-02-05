import { addNodeToNetworkMapper } from "./NetworkMapper";
import PDFSNode from "./PDFSNode";
import TreatmentBinary from "./TreatmentBinary";
import TreatmentInstance from "./TreatmentInstance";
export default class Treatment extends PDFSNode {
    static _nodeType = "N_Treatment_I";
    constructor(core, treePath, instanceType, hash) {
        super(core, treePath, "N_Treatment_" + instanceType, hash);
        addNodeToNetworkMapper("TreatmentBinary", TreatmentBinary);
        addNodeToNetworkMapper('TreatmentInstance', TreatmentInstance);
    }
    async disable() {
        await this.update({
            "is_active": false
        });
    }
    async enable() {
        await this.update({
            "is_active": true
        });
    }
    async addInstance(messages = []) {
        const treatmentInstanceName = new Date().toISOString();
        await this.addChild(TreatmentInstance, treatmentInstanceName, {
            "messages": messages.map((message => ({ message, sender: this._nodeType, sentOn: new Date().toISOString() }))),
            "date": treatmentInstanceName
        });
    }
}
//# sourceMappingURL=Treatment.js.map