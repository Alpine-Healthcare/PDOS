import { Core } from "../Core";
import DataGroup from "./DataGroup";
import { addNodeToNetworkMapper } from "./NetworkMapper";
import PDFSNode from "./PDFSNode";

export default class DataManifest extends PDFSNode {
  public static _nodeType = "N_DataManifest"

  constructor(
    core : Core,
    treePath: string[],
    instanceType: string | undefined,
    hash?: string,
  ){
    super(core, treePath, "N_DataManifest", hash )
    addNodeToNetworkMapper('DataGroup', DataGroup)
  }

  public async addDataGroup(
    dataMetric: string = '',
  ) {
    await this.addChild(
      DataGroup,
      dataMetric,
      {
        "metric": dataMetric,
      }
    )
  }

}

