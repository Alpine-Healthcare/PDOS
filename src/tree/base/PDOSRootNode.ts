import { makeObservable, observable } from "mobx";
import { Core } from "../../Core";
import { logger } from "../../utils/logger";
import PDOSNode from "./PDOSNode";
import { AuthType } from "../../modules/auth/Auth";

export default class PDOSRootNode extends PDOSNode {
  public isRefreshing: boolean = false;
  public isLoaded: boolean = false;
  public lastUpdateTimestamp: number = 0;

  constructor(core: Core, nodeType: string) {
    super(core, [], nodeType);
    makeObservable(this, {
      isLoaded: observable,
      isRefreshing: observable,
    });
  }

  public async sync() {
    try {
      this.isRefreshing = true;
      const previousHash = this._hash;
      const hashId = await this.core.modules.auth?.getPDOSRoot(
        this.core.modules.auth?.publicKey,
      );
      if (previousHash !== hashId) {
        this._hash = hashId;
        await this.init(this._hash);
      }
      this.isRefreshing = false;
    } catch (error) {}
  }

  public async push() {
    let address: string | undefined = undefined;

    if (this.core.isComputeNode) {
      address = this.core.modules.auth?.delegatedPublicKey;
    } else {
      address = this.core.modules.auth?.publicKey;
    }

    if (!address) {
      throw new Error("No address found to sync root hash for");
    }

    if (this.core.modules.auth?.authType === AuthType.WALLET) {
      const hashId = await this.core.modules.auth?.getPDOSRoot(address);
      if (this._hash !== hashId) {
        await this.core.modules.auth.updatePDOSRoot(this._hash, address);
        console.log(
          "# pdos : synced new root - " +
            this._hash +
            " with old root " +
            hashId,
        );
      }
    }
  }

  public async init(hash: string) {
    this.isLoaded = false;
    this._hash = hash;
    await this.node;
    await this.refreshChildren;
    this.isLoaded = true;
    return this._hash;
  }

  public async refresh(oldTreePath: string[], updateTreePath: string[]) {
    logger.tree("\n\n\n\nTree Refresh!");
    logger.tree("---------------------------------");
    logger.tree("oldTreePath: ", oldTreePath);
    logger.tree("updateTreePath: ", updateTreePath);
    const updateFunctions: any = [];

    const getTreeUpdateFunctions = (
      currentNode: any,
      currentDepth: number,
      oldTreePath: string[],
      updatedTreePath: string[],
    ): void => {
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

      const nodeInQuestion = Object.values(currentNode.edges).find(
        (edge: any) => {
          return edge._hash === nextHash;
        },
      );

      if (!nodeInQuestion) {
        throw new Error("No Edge Found");
      }

      return getTreeUpdateFunctions(
        nodeInQuestion,
        nextDepth,
        oldTreePath,
        updateTreePath,
      );
    };

    await getTreeUpdateFunctions(this, 0, oldTreePath, updateTreePath);

    for (const i in updateFunctions.reverse()) {
      await updateFunctions[i]();
    }

    this._hash = updateTreePath[0];
  }
}
