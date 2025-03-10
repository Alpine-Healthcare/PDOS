import { Core } from "../Core";
import DataGroup from "./DataGroup";
import { toCamel } from "./DataManifest";
import { doesPDOSNodeExist } from "./NetworkMapper";
import PDOSNode from "./base/PDOSNode";

export default class TreatmentBinary extends PDOSNode {
  public static _nodeType = "N_TreatmentBinary";

  constructor(
    core: Core,
    treePath: string[],
    instanceType: string | undefined,
    hash?: string,
  ) {
    super(core, treePath, "N_TreatmentBinary", hash);
  }

  protected onNodeLoad() {
    this.checkDataAccess();
  }

  private get dataMetrics() {
    return Object.keys(this._rawNode.data_manifest);
  }

  private checkDataAccess() {
    this.core?.modules?.dataRequest?.checkAccess(this.dataMetrics as any);
  }

  private async createDataGroup(metric: string) {
    const rootNode = this.core.tree.root;
    if (!doesPDOSNodeExist(toCamel(metric), rootNode)) {
      await rootNode.edges.e_out_DataManifest.addDataGroup(metric);
    }
  }

  public async syncData() {
    for (let i = 0; i < this.dataMetrics.length; i++) {
      const metric = this.dataMetrics[i];
      const dataGroups = this.core.tree.root.edges.e_out_DataManifest.edges;
      const getDataGroup = (metric: string) =>
        Object.values(dataGroups).find((node: any) =>
          node._nodeType.toLowerCase().includes(toCamel(metric).toLowerCase()),
        ) as DataGroup;

      if (!getDataGroup(metric)) {
        await this.createDataGroup(metric);
      }

      const dataGroup = getDataGroup(metric);

      await dataGroup.updateData();
    }
  }
}
