import { Core } from "../Core";
import PDFSNode from "./PDFSNode";
export default class Inbox extends PDFSNode {
    static _nodeType: string;
    constructor(core: Core, treePath: string[], _: string | undefined, hash?: string);
    addMessage(sender: string, message: string): Promise<void>;
    clearMessages(): Promise<void>;
}
//# sourceMappingURL=Inbox.d.ts.map