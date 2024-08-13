export const ALPINE_NODE = "http://localhost:8000/api/pdfs";
//export const ALPINE_NODE = "https://network.alpine.healthcare/api/pdfs";
export const getFromPdfs = async (hash, nodeType) => {
    const response = await fetch(`${ALPINE_NODE}?hash=${hash}`);
    return JSON.parse(await response.json());
};
export const addToPdfs = async (treePath, newNodeData, newNodeType) => {
    const node_data = JSON.stringify(newNodeData);
    const addRes = await fetch(ALPINE_NODE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            new_node_data: node_data,
            new_node_type: newNodeType,
            tree_path: treePath
        })
    });
    const addResJson = await addRes.json();
    return {
        rawNode: addResJson.new_node,
        hash: addResJson.new_node.hash_id,
        newTreePath: addResJson.new_tree_path,
        oldTreePath: [...treePath, addResJson.new_node.hash_id]
    };
};
//# sourceMappingURL=Pdfs.js.map