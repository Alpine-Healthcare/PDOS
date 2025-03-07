import { Core } from '../../Core';
import { default as PDOSNode } from './PDOSNode';
export default class PDOSRootNode extends PDOSNode {
    isRefreshing: boolean;
    isLoaded: boolean;
    lastUpdateTimestamp: number;
    constructor(core: Core, nodeType: string);
    sync(): Promise<void>;
    push(): Promise<void>;
    init(hash: string): Promise<string>;
    refresh(oldTreePath: string[], updateTreePath: string[]): Promise<void>;
}
//# sourceMappingURL=PDOSRootNode.d.ts.map