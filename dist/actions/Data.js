import pdos from "../Core";
import { traverseTree } from "../store/NetworkMapper";
export const sync = async () => {
    if (pdos().root === undefined) {
        return;
    }
    const treatmentBinaries = [];
    const metricsFound = {};
    traverseTree(pdos().root, (node) => {
        if (node._nodeType.toLowerCase().includes("treatmentbinary")) {
            if (!metricsFound[node._rawNode.metric]) {
                treatmentBinaries.push(node);
                metricsFound[node._rawNode.metric] = true;
            }
        }
    });
    for (let i = 0; i < treatmentBinaries.length; i++) {
        const treatmentBinary = treatmentBinaries[i];
        await treatmentBinary.syncData();
        break;
    }
    await pdos().tree.root.syncLocalRootHash();
};
export const getAllRecords = () => {
    const dataManifest = pdos().stores.userAccount.edges.e_out_DataManifest;
    const metrics = {};
    if (!dataManifest) {
        return {};
    }
    Object.values(dataManifest.edges).forEach((node) => {
        metrics[node._rawNode.metric] = node._rawNode.records;
    });
    return metrics;
};
//# sourceMappingURL=Data.js.map