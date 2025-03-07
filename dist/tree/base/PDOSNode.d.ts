import { Core } from '../../Core';
export default class PDOSNode {
    protected core: Core;
    _nodeType: string;
    _hash: string;
    _treePath: string[];
    _treePathInclusive: string[];
    protected _childrenRefreshMap: {
        [key: string]: any;
    };
    edges: {
        [key: string]: PDOSNode;
    };
    edgeArray: PDOSNode[];
    _rawNode: any;
    _rawNodeUpdate: any;
    constructor(core: Core, treePath: string[], nodeType: string, hash?: string);
    getData(): {
        hashId: string;
        rawNode: any;
    };
    getChildren(): PDOSNode[];
    protected onNodeLoad(): void;
    get node(): Promise<void>;
    setRawNodeUpdate(rawNode: any): void;
    get refreshChildren(): Promise<void> | undefined;
    refreshTree(previousTreePath: string[]): Promise<void>;
    resync(): Promise<void>;
    update(rawNodeUpdate: any, unencrypted?: boolean): Promise<void>;
    protected addChild(ChildClass: any, instanceName: string, nodeUpdate: any, edgeUpdate?: any): Promise<any>;
    delete(): Promise<void>;
}
//# sourceMappingURL=PDOSNode.d.ts.map