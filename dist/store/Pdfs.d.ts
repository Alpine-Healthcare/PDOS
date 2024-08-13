export declare const ALPINE_NODE = "http://localhost:8000/api/pdfs";
export declare const getFromPdfs: (hash: string, nodeType: string) => Promise<any>;
export declare const addToPdfs: (treePath: string[], newNodeData: any, newNodeType: string) => Promise<{
    rawNode: any;
    hash: any;
    newTreePath: any;
    oldTreePath: any[];
}>;
//# sourceMappingURL=Pdfs.d.ts.map