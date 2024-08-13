import { Core } from "../Core";
export default class PDFSNode {
    protected core: Core;
    _nodeType: string;
    _treePath: string[];
    _treePathInclusive: string[];
    protected _hash: string;
    protected _childrenRefreshMap: {
        [key: string]: any;
    };
    edges: {
        [key: string]: any;
    };
    _rawNode: any;
    _rawNodeUpdate: any;
    constructor(core: Core, treePath: string[], nodeType: string, hash?: string);
    protected onNodeLoad(): void;
    get node(): Promise<void>;
    setRawNodeUpdate(rawNode: any): void;
    get refreshChildren(): Promise<void> | undefined;
    refreshTree(previousTreePath: string[]): Promise<void>;
    protected update(rawNodeUpdate: any): Promise<void>;
    protected addChild(ChildClass: any, instanceName: string, nodeUpdate: any, edgeUpdate?: any): Promise<any>;
}
//# sourceMappingURL=PDFSNode.d.ts.map