import { makeObservable, observable } from "mobx";
import { logger } from "../utils/logger";
import DataManifest from "./DataManifest";
import Inbox from "./Inbox";
import { addNodeToNetworkMapper } from "./NetworkMapper";
import PDFSNode from "./PDFSNode";
import TreatmentManifest from "./TreatmentManifest";
import { getUserHashId } from "../utils/mutex";
export default class UserAccount extends PDFSNode {
    isRefreshing = false;
    isLoaded = false;
    lastUpdateTimestamp = 0;
    constructor(core) {
        super(core, [], "N_UserAccount");
        makeObservable(this, {
            isLoaded: observable,
            isRefreshing: observable,
        });
        addNodeToNetworkMapper("TreatmentManifest", TreatmentManifest);
        addNodeToNetworkMapper("DataManifest", DataManifest);
        addNodeToNetworkMapper("Inbox", Inbox);
    }
    async checkPDOSTreeIsMostRecent() {
        const hashId = await getUserHashId(this._rawNode.credentials[0].id);
        if (hashId === this._hash) {
            return true;
        }
        this.edges = {};
        await this.initUser(hashId);
        return false;
    }
    async refreshPDOSTree() {
        const hashId = await getUserHashId(this._rawNode.credentials[0].id);
        this.edges = {};
        await this.initUser(hashId);
    }
    async initUser(hash) {
        this.isLoaded = false;
        this._hash = hash;
        await this.node;
        await this.refreshChildren;
        this.isLoaded = true;
    }
    async refresh(oldTreePath, updateTreePath) {
        this.isRefreshing = true;
        logger.tree("\n\n\n\nTree Refresh!");
        logger.tree("---------------------------------");
        logger.tree("oldTreePath: ", oldTreePath);
        logger.tree("updateTreePath: ", updateTreePath);
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
        this.isRefreshing = false;
    }
}
//# sourceMappingURL=UserAccount.js.map