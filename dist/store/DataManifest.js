import DataGroup from "./DataGroup";
import { addNodeToNetworkMapper } from "./NetworkMapper";
import PDFSNode from "./PDFSNode";
export default class DataManifest extends PDFSNode {
    static _nodeType = "N_DataManifest";
    constructor(core, treePath, instanceType, hash) {
        super(core, treePath, "N_DataManifest", hash);
        addNodeToNetworkMapper('DataGroup', DataGroup);
    }
    async addDataGroup(dataMetric = '') {
        await this.addChild(DataGroup, dataMetric, {
            "metric": dataMetric,
        });
    }
}
//# sourceMappingURL=DataManifest.js.map