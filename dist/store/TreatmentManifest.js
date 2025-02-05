import { action, computed, makeObservable } from "mobx";
import PDFSNode from "./PDFSNode";
import Treatment from "./Treatment";
import { addNodeToNetworkMapper } from "./NetworkMapper";
export default class TreatmentManifest extends PDFSNode {
    static _nodeType = "N_TreatmentManifest";
    constructor(core, treePath, instanceType, hash) {
        super(core, treePath, "N_TreatmentManifest", hash);
        makeObservable(this, {
            addTreatment: action,
            treatments: computed
        });
        addNodeToNetworkMapper("Treatment", Treatment);
    }
    get treatments() {
        return Object.entries(this.edges).filter(([edgeType, edge]) => {
            if (edgeType.includes("Treatment")) {
                return true;
            }
            return false;
        }).map(([edgeType, edge]) => edge);
    }
    async addTreatment(treatmentName = '', treatmentBinaryHash = '', intakeObject = {}) {
        await this.addChild(Treatment, crypto.randomUUID(), {
            "is_active": true,
            "active_on": new Date().toISOString(),
            "intake": intakeObject,
            "treatmentName": treatmentName,
            "treatmentBinaryHash": treatmentBinaryHash
        }, {
            "e_out_TreatmentBinary": treatmentBinaryHash
        });
    }
}
//# sourceMappingURL=TreatmentManifest.js.map