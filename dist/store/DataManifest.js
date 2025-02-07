import DataGroup from "./DataGroup";
import { addNodeToNetworkMapper } from "./NetworkMapper";
import PDFSNode from "./PDFSNode";
export const toCamel = (s) => {
    const camelCase = s.replace(/([-_][a-z])/ig, ($1) => {
        return $1.toUpperCase()
            .replace('-', '')
            .replace('_', '');
    });
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
export default class DataManifest extends PDFSNode {
    static _nodeType = "N_DataManifest";
    constructor(core, treePath, instanceType, hash) {
        super(core, treePath, "N_DataManifest", hash);
        addNodeToNetworkMapper('DataGroup', DataGroup);
    }
    async getDataGroup(metric) {
        return Object.values(this.edges).find((edge) => edge._rawNode.metric === metric);
    }
    async addDataGroup(dataMetric = '') {
        await this.addChild(DataGroup, toCamel(dataMetric), {
            "metric": dataMetric,
            "records": {},
        });
    }
}
//# sourceMappingURL=DataManifest.js.map