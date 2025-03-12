import { Core } from "../Core";
import PDOSNode from "./base/PDOSNode";

export default class TreatmentEncounterInstance extends PDOSNode {
  public static _nodeType = "N_TreatmentEncounterInstance_I";
  public static name = "TreatmentEncounterInstance";

  constructor(
    core: Core,
    treePath: string[],
    instanceType: string | undefined,
    hash?: string,
  ) {
    super(core, treePath, "N_TreatmentEncounterInstance_" + instanceType, hash);
  }
}
