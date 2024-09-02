
import { Core } from "../Core";
import { addNodeToNetworkMapper } from "./NetworkMapper";
import PDFSNode from "./PDFSNode";
import TreatmentBinary from "./TreatmentBinary";

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


}
