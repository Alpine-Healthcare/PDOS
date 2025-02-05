import { toCamel } from "./DataManifest";
import { doesPDFSNodeExist } from "./NetworkMapper";
import PDFSNode from "./PDFSNode";
export default class TreatmentBinary extends PDFSNode {
    static _nodeType = "N_TreatmentBinary";
    constructor(core, treePath, instanceType, hash) {
        super(core, treePath, "N_TreatmentBinary", hash);
    }
    onNodeLoad() {
        this.checkDataAccess();
    }
    get dataMetrics() {
        return Object.keys(this._rawNode.data_manifest);
    }
    checkDataAccess() {
        this.core?.modules?.dataRequest?.checkAccess(this.dataMetrics);
    }
    ;
    async createDataGroup(metric) {
        const rootNode = this.core.tree.root;
        if (!doesPDFSNodeExist(toCamel(metric), rootNode)) {
            await rootNode.edges.e_out_DataManifest.addDataGroup(metric);
        }
    }
    async syncData() {
        for (let i = 0; i < this.dataMetrics.length; i++) {
            const metric = this.dataMetrics[i];
            const dataGroups = this.core.tree.root.edges.e_out_DataManifest.edges;
            const getDataGroup = (metric) => Object.values(dataGroups).find((node) => node._nodeType.toLowerCase().includes(toCamel(metric).toLowerCase()));
            if (!getDataGroup(metric)) {
                console.log('Creating data group for metric', metric);
                await this.createDataGroup(metric);
                console.log("finished creating data group", this.core.tree.root._hash);
            }
            const dataGroup = getDataGroup(metric);
            await dataGroup.updateData();
        }
    }
}
//# sourceMappingURL=TreatmentBinary.js.map