import { default as PDOSNode } from './base/PDOSNode';
export declare const NetworkMapper: any;
export declare const addNode: (nodeType: string, nodeClass: any) => any;
export declare const traverseTree: (root: PDOSNode, callback: (node: PDOSNode) => void) => void;
export declare const findNodeInTree: (name: string, root: PDOSNode) => PDOSNode | undefined;
export declare const doesPDOSNodeExist: (name: string, root: PDOSNode) => boolean;
//# sourceMappingURL=NetworkMapper.d.ts.map