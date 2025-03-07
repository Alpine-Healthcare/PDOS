import { action, computed, makeObservable, observable } from "mobx";
import { Core } from "../Core";
import PDOSNode from "./base/PDOSNode";
import Treatment from "./Treatment";
import { addNode } from "./NetworkMapper";

export default class TreatmentManifest extends PDOSNode {
  public static _nodeType = "N_TreatmentManifest";

  constructor(
    core: Core,
    treePath: string[],
    instanceType?: string,
    hash?: string,
  ) {
    super(core, treePath, "N_TreatmentManifest", hash);
    makeObservable(this, {
      addTreatment: action,
    });
    addNode("Treatment", Treatment);
  }

  public async addTreatment(
    treatmentName: string = "",
    treatmentBinaryHash: string = "",
    intakeObject: object = {},
  ) {
    await this.addChild(
      Treatment,
      crypto.randomUUID(),
      {
        is_active: true,
        active_on: new Date().toISOString(),
        intake: intakeObject,
        treatmentName: treatmentName,
        treatmentBinaryHash: treatmentBinaryHash,
      },
      {
        TreatmentBinary: treatmentBinaryHash,
      },
    );
  }
}
