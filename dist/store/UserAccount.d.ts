import { Core } from '../Core';
import { default as PDFSNode } from './PDFSNode';
export default class UserAccount extends PDFSNode {
    isRefreshing: boolean;
    isLoaded: boolean;
    lastUpdateTimestamp: number;
    constructor(core: Core);
    sync(): Promise<void>;
    syncLocalRootHash(): Promise<void>;
    addAccessPackage(accessPackage: any): Promise<void>;
    init(hash: string): Promise<string>;
    refresh(oldTreePath: string[], updateTreePath: string[]): Promise<void>;
}
//# sourceMappingURL=UserAccount.d.ts.map