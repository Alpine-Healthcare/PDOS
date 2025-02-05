import PDFSNode from "./PDFSNode";
export default class Inbox extends PDFSNode {
    static _nodeType = "N_Inbox";
    constructor(core, treePath, _, hash) {
        super(core, treePath, "N_Inbox", hash);
    }
    async addMessage(sender, message) {
        const newMessages = [...this._rawNode.unread_messages];
        newMessages.push({
            message: message,
            sentOn: new Date().toISOString(),
            sender: sender
        });
        try {
            await this.update({
                ...this._rawNode,
                "unread_messages": newMessages
            });
        }
        catch (e) {
            console.log("error: ", e);
        }
    }
    async clearMessages() {
        try {
            await this.update({
                ...this._rawNode,
                "unread_messages": []
            });
        }
        catch (e) {
            console.log("error: ", JSON.stringify(e));
        }
    }
}
//# sourceMappingURL=Inbox.js.map