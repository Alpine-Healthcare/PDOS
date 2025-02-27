import pdos from "../Core";
import { traverseTree } from "../store/NetworkMapper";
import PDFSNode from "../store/PDFSNode";
import TreatmentBinary from "../store/TreatmentBinary";

export const sync = async () => {
  const treatmentBinaries: TreatmentBinary[] = [];

  console.log("finding binaries");

  traverseTree(pdos().tree.root!, (node: any) => {
    console.log("node: ", node);
    if (node._nodeType.toLowerCase().includes("treatmentbinary")) {
      if (node.dataMetrics) {
        console.log("has data we need syncing");
        treatmentBinaries.push(node);
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
  const dataManifest = pdos().tree.root.edges.e_out_DataManifest;

  const metrics: any = {};
  if (!dataManifest) {
    return {};
  }

  Object.values(dataManifest.edges).forEach((node: any) => {
    metrics[node._rawNode.data.metric] = node._rawNode.data.records;
  });

  return metrics;
};
