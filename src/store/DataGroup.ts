import { Core } from "../Core";
import PDFSNode from "./PDFSNode";

export default class DataGroup extends PDFSNode {
  public static _nodeType = "N_DataGroup_I"

  constructor(
    core : Core,
    treePath: string[],
    instanceType: string | undefined,
    hash?: string,
  ){
    super(core, treePath, "N_DataGroup_" + instanceType, hash )
  }

  public async updateData() {
    console.log("updating data!!", this._rawNode.metric)
    const updateValue = await this.core?.modules?.dataRequest?.getTodaysValue(this._rawNode.metric)

    console.log("updateValue: ", updateValue)
    console.log("updateValue: ", typeof updateValue)

    if (updateValue) {
      await this.update({
        value: updateValue
      })
    }
  }

}

