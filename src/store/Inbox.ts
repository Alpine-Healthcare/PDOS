import { Core } from "../Core";
import PDFSNode from "./PDFSNode";

export default class Inbox extends PDFSNode {
  public static _nodeType = "N_Inbox"

  constructor(
    core : Core,
    treePath: string[],
    _: string | undefined,
    hash?: string,
  ){
    super(core, treePath, "N_Inbox", hash )
  }

  public async addMessage(sender: string){
    console.log("adding message!")
    const newMessages = [ ...this._rawNode.unread_messages]
    newMessages.push({
      message: sender,
      sender: "system"
    })
    try {
      console.log("runnign update")
    await this.update({
      ...this._rawNode,
      "unread_messages": newMessages 
    })
    } catch (e) {
      console.log("error: ", e)
    }
  }

  public async clearMessages(){
    await this.update({
      ...this._rawNode,
      "unread_messages": [] 
    })
  }

}

