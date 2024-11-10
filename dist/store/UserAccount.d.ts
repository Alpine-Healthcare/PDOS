import { Core } from "../Core";
import PDFSNode from "./PDFSNode";
export default class UserAccount extends PDFSNode {
    isRefreshing: boolean;
    isLoaded: boolean;
    lastUpdateTimestamp: number;
    constructor(core: Core);
    checkPDOSTreeIsMostRecent(): Promise<boolean>;
    refreshPDOSTree(): Promise<void>;
    initUser(hash: string): Promise<void>;
    refresh(oldTreePath: string[], updateTreePath: string[]): Promise<void>;
}
//# sourceMappingURL=UserAccount.d.ts.map