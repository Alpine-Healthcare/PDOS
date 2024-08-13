import { doesPDFSNodeExist } from "./NetworkMapper";
import PDFSNode from "./PDFSNode";
export default class TreatmentBinary extends PDFSNode {
    static _nodeType = "N_TreatmentBinary";
    constructor(core, treePath, instanceType, hash) {
        super(core, treePath, "N_TreatmentBinary", hash);
    }
    onNodeLoad() {
        this.checkDataAccess();
        //TODO: need a way to not check the pdos tree only 
        // when its done computing
        //setTimeout(() => this.checkPDOSNodeExistsAndCreateIfNot(), 3000)
    }
    get dataMetrics() {
        return Object.keys(this._rawNode.data_manifest);
    }
    checkDataAccess() {
        this.core?.modules?.dataRequest?.checkAccess(this.dataMetrics);
    }
    async checkPDOSNodeExistsAndCreateIfNot() {
        console.log("\n\n\n\nchecking pdfs node data metrics");
        const rootNode = this.core.stores.userAccount;
        for (let i = 0; i < this.dataMetrics.length; i++) {
            const metric = this.dataMetrics[i];
            if (!doesPDFSNodeExist(metric, rootNode)) {
                console.log(`${metric} data group does not exist`);
                await rootNode.edges.e_out_DataManifest.addDataGroup(metric);
            }
        }
    }
    async syncData() {
        for (let i = 0; i < this.dataMetrics.length; i++) {
            const metric = this.dataMetrics[i];
            const dataGroups = this.core.stores.userAccount.edges.e_out_DataManifest.edges;
            const dataGroup = Object.values(dataGroups).find((node) => node._nodeType.toLowerCase().includes(metric.toLowerCase()));
            await dataGroup.updateData();
        }
    }
}
//# sourceMappingURL=TreatmentBinary.js.map