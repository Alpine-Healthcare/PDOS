import { default as PDFSNode } from './PDFSNode';
export declare const NetworkMapper: any;
export declare const addNodeToNetworkMapper: (nodeType: string, nodeClass: any) => any;
export declare const traverseTree: (root: PDFSNode, callback: (node: PDFSNode) => void) => void;
export declare const findNodeInTree: (name: string, root: PDFSNode) => PDFSNode | undefined;
export declare const doesPDFSNodeExist: (name: string, root: PDFSNode) => boolean;
//# sourceMappingURL=NetworkMapper.d.ts.map