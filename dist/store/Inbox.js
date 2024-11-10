import PDFSNode from "./PDFSNode";
export default class Inbox extends PDFSNode {
    static _nodeType = "N_Inbox";
    constructor(core, treePath, _, hash) {
        super(core, treePath, "N_Inbox", hash);
    }
    async addMessage(message) {
        const newMessages = [...this._rawNode.unread_messages];
        newMessages.push(message);
        this.update({
            ...this._rawNode,
            "unread_messages": newMessages
        });
    }
    async clearMessages() {
        this.update({
            ...this._rawNode,
            "unread_messages": []
        });
    }
}
//# sourceMappingURL=Inbox.js.map