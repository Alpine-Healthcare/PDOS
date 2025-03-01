import { Core } from "../Core";
import PDFSNode from "./PDFSNode";

export default class Inbox extends PDFSNode {
  public static _nodeType = "N_Inbox";

  constructor(
    core: Core,
    treePath: string[],
    _: string | undefined,
    hash?: string,
  ) {
    super(core, treePath, "N_Inbox", hash);
  }

  public async addMessage(sender: string, message: string) {
    let existingMessages = [];
    if (this._rawNode.data.unread_messages) {
      existingMessages = this._rawNode.data.unread_messages;
    }

    const newMessages = [...existingMessages];
    newMessages.push({
      message: message,
      sentOn: new Date().toISOString(),
      sender: sender,
    });

    try {
      await this.update({
        unread_messages: newMessages,
      });
    } catch (e) {
      console.log("error: ", e);
    }
  }

  public async clearMessages() {
    try {
      await this.update({
        unread_messages: [],
      });
    } catch (e) {
      console.log("error: ", JSON.stringify(e));
    }
  }
}
