import { Core } from "../Core";
import PDOSNode from "./base/PDOSNode";
import PDOSStorageNode from "./base/PDOSStorageNode";

export default class TreatmentEncounter extends PDOSNode {
  public static _nodeType = "N_TreatmentEncounter";
  public static name = "TreatmentEncounter";

  constructor(
    core: Core,
    treePath: string[],
    _: string | undefined,
    hash?: string,
  ) {
    super(core, treePath, "N_TreatmentEncounter", hash);
  }

  public async addStorageChild(date: Date, data: any) {
    await super.addStorageChild(PDOSStorageNode, date, data);
  }
}
