import PDOSNode from "./PDOSNode";

export const NetworkMapper: any = {};
export const addNodeToNetworkMapper = (nodeType: string, nodeClass: any) =>
  (NetworkMapper[nodeType] = nodeClass);

export const traverseTree = (
  root: PDOSNode,
  callback: (node: PDOSNode) => void,
) => {
  callback(root);

  const edgeNodes = root.edges ? Object.values(root.edges) : undefined;

  if (edgeNodes) {
    Object.values(root.edges).forEach((node) => {
      traverseTree(node, callback);
    });
  }
};

export const findNodeInTree = (name: string, root: PDOSNode) => {
  let foundNode: PDOSNode | undefined;
  traverseTree(root, (node: PDOSNode) => {
    if (node._nodeType.toLowerCase().includes(name.toLowerCase())) {
      foundNode = node;
    }
  });

  return foundNode;
};

export const doesPDOSNodeExist = (name: string, root: PDOSNode) => {
  let foundNode = false;
  traverseTree(root, (node: PDOSNode) => {
    if (node._nodeType.toLowerCase().includes(name.toLowerCase())) {
      foundNode = true;
    }
  });

  return foundNode;
};
