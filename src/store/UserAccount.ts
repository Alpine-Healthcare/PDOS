import { makeObservable, observable } from "mobx";
import { Core } from "../Core";
import { logger } from "../utils/logger";
import DataManifest from "./DataManifest";
import Inbox from "./Inbox";
import { addNodeToNetworkMapper } from "./NetworkMapper";
import PDFSNode from "./PDFSNode";
import TreatmentManifest from "./TreatmentManifest";


export default class UserAccount extends PDFSNode {

  public isRefreshing: boolean = false
  public isLoaded: boolean = false

  constructor(core : Core){
    super(core, [], "N_UserAccount")
    makeObservable(this, {
      isLoaded: observable,
      isRefreshing: observable,
    })

    addNodeToNetworkMapper("TreatmentManifest", TreatmentManifest)
    addNodeToNetworkMapper("DataManifest", DataManifest)
    addNodeToNetworkMapper("Inbox", Inbox)
  }

  public async initUser(hash: string) {
    this.isLoaded = false
    this._hash = hash
    await this.node
    await this.refreshChildren
    this.isLoaded = true
  }

  public async refresh(oldTreePath: string[], updateTreePath: string[]) {
    this.isRefreshing = true
    logger.tree("\n\n\n\nTree Refresh!")
    logger.tree("---------------------------------")
    logger.tree("oldTreePath: ", oldTreePath)
    logger.tree("updateTreePath: ", updateTreePath)
    const updateFunctions: any = []

    const getTreeUpdateFunctions = (
      currentNode: any,
      currentDepth: number,
      oldTreePath: string[],
      updatedTreePath: string[]
    ): void => {

      updateFunctions.push(
        async () => {
          const newTreepPath = updatedTreePath.slice(0, currentDepth)
          currentNode._hash = updatedTreePath[currentDepth]
          currentNode._treePath = newTreepPath 
          currentNode._treePathInclusive = [...newTreepPath, currentNode._hash] 

          await currentNode.node
        }
      )

      const nextDepth = currentDepth + 1
      if (nextDepth > oldTreePath.length - 1) {
        return
      }

      const nextHash = oldTreePath[nextDepth]

      const nodeInQuestion = Object.values(currentNode.edges).find((edge: any) => {
        return edge._hash === nextHash
      })

      if (!nodeInQuestion) {
        throw new Error("No Edge Found")
      }

      return getTreeUpdateFunctions(
        nodeInQuestion,
        nextDepth,
        oldTreePath,
        updateTreePath
      )

    }

    await getTreeUpdateFunctions(this, 0, oldTreePath, updateTreePath)

    for (const i in updateFunctions.reverse()) {
      await updateFunctions[i]()
    }

    this.isRefreshing = false

  }

}