import { Core } from "../Core";
import PDFSNode from "./PDFSNode";
export default class UserAccount extends PDFSNode {
    constructor(core: Core);
    initUser(hash: string): Promise<void>;
    refresh(oldTreePath: string[], updateTreePath: string[]): Promise<void>;
}
//# sourceMappingURL=UserAccount.d.ts.map