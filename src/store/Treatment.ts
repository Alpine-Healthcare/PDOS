
import { Core } from "../Core";
import { addNodeToNetworkMapper } from "./NetworkMapper";
import PDFSNode from "./PDFSNode";
import TreatmentBinary from "./TreatmentBinary";
import TreatmentInstance from "./TreatmentInstance";

export default class Treatment extends PDFSNode {
  public static _nodeType = "N_Treatment_I"

  constructor(
    core : Core,
    treePath: string[],
    instanceType: string,
    hash?: string,
  ){
    super(core, treePath, "N_Treatment_" + instanceType, hash )
    addNodeToNetworkMapper("TreatmentBinary", TreatmentBinary)
    addNodeToNetworkMapper('TreatmentInstance', TreatmentInstance)
  }

  public async disable(){
    this.update({
      "is_active": false
    })
  }

  public async enable(){
    this.update({
      "is_active": true
    })
  }

  public async addInstance(
    messages: string[] = []
  ) {

    const treatmentInstanceName = new Date().toISOString()

    await this.addChild(
      TreatmentInstance,
      treatmentInstanceName,
      {
        "messages": messages,
        "date": treatmentInstanceName
      }
    )
  }



}
