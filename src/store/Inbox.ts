import { Core } from "../Core";
import PDFSNode from "./PDFSNode";

export default class Inbox extends PDFSNode {
  public static _nodeType = "N_Inbox"

  constructor(
    core : Core,
    treePath: string[],
    instanceType: string | undefined,
    hash?: string,
  ){
    super(core, treePath, "N_Inbox", hash )
  }

  public async addMessage(){
    this.update({
      "unread_messages": ["Please take a look at something!!"]
    })
  }

}

