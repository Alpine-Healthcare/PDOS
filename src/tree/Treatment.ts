import pdos, { Core } from "../Core";
import { addNode } from "./NetworkMapper";
import PDOSNode from "./base/PDOSNode";
import TreatmentBinary from "./TreatmentBinary";
import TreatmentInstance from "./TreatmentInstance";

export default class Treatment extends PDOSNode {
  public static _nodeType = "N_Treatment_I";
  public static name = "Treatment";

  constructor(
    core: Core,
    treePath: string[],
    instanceType: string,
    hash?: string,
  ) {
    super(core, treePath, "N_Treatment_" + instanceType, hash);
    addNode("TreatmentBinary", TreatmentBinary);
    addNode("TreatmentInstance", TreatmentInstance);
  }

  public async disable() {
    await this.update({
      is_active: false,
    });
  }

  public async enable() {
    await this.update({
      is_active: true,
    });
  }

  public async addInstance(messages: string[] = []) {
    const treatmentInstanceName = new Date().toISOString();

    await this.addChild(TreatmentInstance, treatmentInstanceName, {
      messages: messages.map((message) => ({
        message,
        sender: this._nodeType,
        sentOn: new Date().toISOString(),
      })),
      date: treatmentInstanceName,
    });

    await pdos().tree.root.push();
  }
}
