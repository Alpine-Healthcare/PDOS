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

  public async addMessage(message: string){
    console.log("message: ", message)
    const newMessages = [ ...this._rawNode.unread_messages]
    newMessages.push(message)
    console.log("newMEssages: ", newMessages)
    this.update({
      ...this._rawNode,
      "unread_messages": newMessages 
    })
  }

  public async clearMessages(){
    this.update({
      ...this._rawNode,
      "unread_messages": [] 
    })
  }

}

