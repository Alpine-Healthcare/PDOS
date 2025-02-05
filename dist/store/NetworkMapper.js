export const NetworkMapper = {};
export const addNodeToNetworkMapper = (nodeType, nodeClass) => NetworkMapper[nodeType] = nodeClass;
export const traverseTree = (root, callback) => {
    callback(root);
    const edgeNodes = root.edges ? Object.values(root.edges) : undefined;
    if (edgeNodes) {
        Object.values(root.edges).forEach((node) => {
            traverseTree(node, callback);
        });
    }
};
export const doesPDFSNodeExist = (name, root) => {
    let foundNode = false;
    traverseTree(root, (node) => {
        if (node._nodeType.toLowerCase().includes(name)) {
            foundNode = true;
        }
    });
    return foundNode;
};
//# sourceMappingURL=NetworkMapper.js.map