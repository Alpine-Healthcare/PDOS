import DataManifest from "./DataManifest";
import Inbox from "./Inbox";
import { addNodeToNetworkMapper } from "./NetworkMapper";
import PDFSNode from "./PDFSNode";
import TreatmentManifest from "./TreatmentManifest";
export default class UserAccount extends PDFSNode {
    constructor(core) {
        super(core, [], "N_UserAccount");
        addNodeToNetworkMapper("TreatmentManifest", TreatmentManifest);
        addNodeToNetworkMapper("DataManifest", DataManifest);
        addNodeToNetworkMapper("Inbox", Inbox);
    }
    async initUser(hash) {
        this._hash = hash;
        await this.node;
        await this.refreshChildren;
    }
    async refresh(oldTreePath, updateTreePath) {
        console.log("\n\n\n\nTree Refresh!");
        console.log("---------------------------------");
        console.log("oldTreePath: ", oldTreePath);
        console.log("updateTreePath: ", updateTreePath);
        const updateFunctions = [];
        const getTreeUpdateFunctions = (currentNode, currentDepth, oldTreePath, updatedTreePath) => {
            updateFunctions.push(async () => {
                const newTreepPath = updatedTreePath.slice(0, currentDepth);
                currentNode._hash = updatedTreePath[currentDepth];
                currentNode._treePath = newTreepPath;
                currentNode._treePathInclusive = [...newTreepPath, currentNode._hash];
                await currentNode.node;
            });
            const nextDepth = currentDepth + 1;
            if (nextDepth > oldTreePath.length - 1) {
                return;
            }
            const nextHash = oldTreePath[nextDepth];
            const nodeInQuestion = Object.values(currentNode.edges).find((edge) => {
                return edge._hash === nextHash;
            });
            if (!nodeInQuestion) {
                throw new Error("No Edge Found");
            }
            return getTreeUpdateFunctions(nodeInQuestion, nextDepth, oldTreePath, updateTreePath);
        };
        await getTreeUpdateFunctions(this, 0, oldTreePath, updateTreePath);
        for (const i in updateFunctions.reverse()) {
            await updateFunctions[i]();
        }
    }
}
//# sourceMappingURL=UserAccount.js.map