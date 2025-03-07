import { Core } from "../Core";
import PDOSNode from "./base/PDOSNode";

export default class TreatmentInstance extends PDOSNode {
  public static _nodeType = "N_TreatmentInstance_I";
  public static name = "TreatmentInstance";

  constructor(
    core: Core,
    treePath: string[],
    instanceType: string | undefined,
    hash?: string,
  ) {
    super(core, treePath, "N_TreatmentInstance_" + instanceType, hash);
  }
}
