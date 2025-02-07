import { makeObservable, observable } from "mobx";
import { logger } from "../utils/logger";
import DataManifest from "./DataManifest";
import Inbox from "./Inbox";
import { addNodeToNetworkMapper } from "./NetworkMapper";
import PDFSNode from "./PDFSNode";
import TreatmentManifest from "./TreatmentManifest";
import { AuthType } from "../modules/auth/Auth";
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
    async syncLocalRootHash(addressToUpdate) {
        if (this.core.modules.auth?.authType === AuthType.WALLET) {
            const hashId = await this.core.modules.auth?.getPDOSRoot(addressToUpdate);
            if (this._hash !== hashId) {
                await this.core.modules.auth.updatePDOSRoot(this._hash, addressToUpdate ?? this.core.modules.auth.publicKey);
                console.log("# pdos : synced new root - " + this._hash);
            }
        }
    }
    async addAccessPackage(accessPackage) {
        await this.update({
            access_package: accessPackage
        }, true);
    }
    async init(hash) {
        this.isLoaded = false;
        this._hash = hash;
        await this.node;
        await this.refreshChildren;
        this.isLoaded = true;
        return this._hash;
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
                const newTreePath = updatedTreePath.slice(0, currentDepth);
                currentNode._hash = updatedTreePath[currentDepth];
                currentNode._treePath = newTreePath;
                currentNode._treePathInclusive = [...newTreePath, currentNode._hash];
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
        this._hash = updateTreePath[0];
        this.core.tree.root = this;
    }
}
//# sourceMappingURL=UserAccount.js.map