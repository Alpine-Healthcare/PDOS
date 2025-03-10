import { Core } from "../../Core";
import PDOSNode from "./PDOSNode";

export default class PDOSStorageNode extends PDOSNode {
  public static _nodeType = "N_PDOSStorageNode_I";
  public static name = "PDOSStorageNode";

  constructor(
    protected core: Core,
    treePath: string[],
    nodeType: string,
    hash?: string,
  ) {
    super(core, treePath, "N_PDOSStorageNode_" + nodeType, hash);
  }
}
