import pdos from "../Core";
import { traverseTree } from "../store/NetworkMapper";
import TreatmentBinary from "../store/TreatmentBinary";

export interface DataGroup {
  metric: string;
  records: Record<string, Record<string, any>>;
}

export const sync = async () => {
  const treatmentBinaries: TreatmentBinary[] = [];

  traverseTree(pdos().tree.root!, (node: any) => {
    if (node._nodeType.toLowerCase().includes("treatmentbinary")) {
      if (node.dataMetrics) {
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

export const getAllRecords = async (): Promise<Record<string, DataGroup>> => {
  const dataManifest = pdos().tree.root.edges.e_out_DataManifest;

  const metrics: Record<string, DataGroup> = {};
  if (!dataManifest) {
    return {};
  }

  Object.values(dataManifest.edges).forEach((node: any) => {
    metrics[node._rawNode.data.metric] = {
      metric: node._rawNode.data.metric,
      records: node._rawNode.data.records,
    };
  });

  return metrics;
};

export const getGroup = async (
  metric: string,
): Promise<DataGroup | undefined> => {
  const dataManifest = pdos().tree.root.edges.e_out_DataManifest;
  if (!dataManifest) {
    return undefined;
  }

  const convertSnakeCaseToCamelCase = (str: string) =>
    str
      .toLowerCase()
      .replace(/([-_][a-z])/g, (group: string) =>
        group.toUpperCase().replace("-", "").replace("_", ""),
      )
      .replace(/^./, (firstChar) => firstChar.toUpperCase());

  const dataGroup =
    dataManifest.edges[
      "e_out_DataGroup_" + convertSnakeCaseToCamelCase(metric)
    ];
  if (!dataGroup) {
    return undefined;
  }

  return {
    metric: dataGroup._rawNode.data.metric,
    records: dataGroup._rawNode.data.records,
  };
};
