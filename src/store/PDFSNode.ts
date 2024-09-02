
import { makeObservable, observable, reaction } from "mobx";
import { Core } from "../Core";
import { getEdgeInfo } from "./Model";
import { NetworkMapper } from "./NetworkMapper";
import { addToPdfs, getFromPdfs } from "./Pdfs";
import { logger } from "../utils/logger";
import { log } from "console";
import { acquireMutexForUser, getUserMutex, releaseMutex } from "../utils/mutex";

export default class PDFSNode {
  public _nodeType = ""
  public _treePath: string[] = []
  public _treePathInclusive: string[] = []

  protected _hash: string = ""
  protected _childrenRefreshMap: { [key: string]: any } = {}

  public edges: { [key: string]: any } = {}
  public _rawNode: any = {};

  public _rawNodeUpdate: any = {};

  constructor(protected core : Core, treePath: string[], nodeType: string, hash?: string ){
    this._treePath = treePath
    this._hash = hash || ""
    this._nodeType = nodeType

    makeObservable(this, {
      edges: observable,
      _rawNode: observable,
      _treePath: observable,
      _treePathInclusive: observable
    })

    /**
     * Any time the current nodes treePath is updated, 
     * update all of its childrens
     */
    reaction(() => ({
      treePathInclusive: this._treePathInclusive
    }), ({ treePathInclusive }) => {
      Object.values(this.edges).forEach((edge: any) => {
        edge._treePath = treePathInclusive
        edge._treePathInclusive = [...treePathInclusive, edge._hash]
      })
    })

  }

  protected onNodeLoad(){}

  public get node() {
    return (async () => {
      if (this._hash) {
        this._rawNode = await getFromPdfs(this._hash)
        this._nodeType = this._rawNode.type
        this._treePathInclusive = [...this._treePath, this._hash] 

        logger.tree("\n\n\n\nFetched existing node from pdfs")
        logger.tree("---------------------------------")
        logger.tree("Existing node from pdfs: ", this._nodeType)
        logger.tree("Raw node: ", this._rawNode)
        logger.tree("Node hash: ", this._hash)
        logger.tree("Node type: ", this._nodeType)
        logger.tree("Node tree path of : ", this._treePath)
      } else {
        const newNode = await addToPdfs(this._treePath, {
          ...this._rawNode,
          ...this._rawNodeUpdate
        }, this._nodeType)   
        this._rawNode = newNode.rawNode
        this._hash = newNode.hash
        this._treePathInclusive = newNode.newTreePath
        this._treePath = [...newNode.newTreePath].slice(0,-1)
        this._nodeType = newNode.rawNode.type

        logger.tree("\n\n\n\nAdded node to pdfs")
        logger.tree("---------------------------------")
        logger.tree("Added node to pdfs: ", this._nodeType)
        logger.tree("Raw node: ", this._rawNode)
        logger.tree("Node hash: ", this._hash)
        logger.tree("Node type: ", this._nodeType)
        logger.tree("Node tree path of : ", this._treePath)
      }

      this.onNodeLoad()
    })()
  }

  public setRawNodeUpdate(rawNode: any) {
    this._rawNodeUpdate = rawNode
  }


  public get refreshChildren() {

    logger.tree("\n\n\n\n\nRefreshing children")
    logger.tree("---------------------------------")
    logger.tree("Parent hash: ", this._hash)
    logger.tree("Parent type: ", this._nodeType)
    logger.tree("Parent rawnode: ", this._rawNode)

    if (
      this._rawNode["edges"] === undefined ||
      this._rawNode["edges"] === null ||
      Object.keys(this._rawNode["edges"]).length === 0
    ) {
      logger.tree("No children")
      return
    }


    const hasEdges = Object.values(this._rawNode.edges ?? {}).find(edge => edge !== null)
    if (!hasEdges) { 
      logger.tree(`${this._hash} has uninitalized children`)
    }


    return (async () => {
      for (const [key, value] of Object.entries(this._rawNode.edges) as any) {

        const { coreType, instanceType} = getEdgeInfo(key)

        logger.tree("Child node type: ", coreType)

        if (!(NetworkMapper as any)[coreType]) {
          logger.tree("Child node mapping not found continuing!")
          continue
        }

        let nodeName = "N_" + coreType
        if (instanceType) {
          nodeName += "_I"
        }

        let childEdge = "e_out_" + coreType
        if (instanceType) {
          childEdge += "_I"
        }

        const hashId = value?.child_hash_id ?? ''

        logger.tree("Child hash id: ", hashId)
        logger.tree("Child node name: ", nodeName)
        logger.tree("Parent child edge name: ", childEdge)

        const NodeClass = (NetworkMapper as any)[coreType]
        const currentTreePath = [...this._treePath, this._hash]
        const child = new NodeClass(
          this.core,
          currentTreePath,
          nodeName,
          hashId 
        )
        await child.node

        await child.refreshTree(this._treePathInclusive)

        this.edges[key] = child
        logger.tree("Finished adding child node", Object.keys(this.edges))

        await child.refreshChildren

      }
    })()
  }

  public async refreshTree(previousTreePath: string[]) {
    await this.core.stores.userAccount.refresh(
      previousTreePath,
      this._treePathInclusive 
    )
  }

  protected async getUserMutex() {
    const userMutex = await acquireMutexForUser(this.core.stores.userAccount._rawNode.credentials[0].id)

    if (userMutex) {
      return true
    }

    // if we don't get the mutex poll until we do and refresh the tree
    const getMutex = async () => {
      await new Promise((resolve: any) => {
        setTimeout(async () => {
          const mutex = await acquireMutexForUser(this.core.stores.userAccount._rawNode.credentials[0].id)
          if (mutex) {
            return resolve()
          } else {
            return await getMutex()
          }
        }, 1000)
      })
    }

    await getMutex()
    await this.core.stores.userAccount.refreshPDOSTree()
    await this.releaseMutex()

    return false

  }

  protected async releaseMutex() {
    const release  = await releaseMutex(this.core.stores.userAccount._rawNode.credentials[0].id)
  }

  protected async update(rawNodeUpdate: any) {

    if (!await this.core.stores.userAccount.checkPDOSTreeIsMostRecent()) {
      return
    }


    if (!this.core.isComputeNode && !await this.getUserMutex()) {
      return
    }


    this._rawNodeUpdate = rawNodeUpdate 
    this._hash=""
    const previousTreePath = [...this._treePathInclusive.slice(0,-1)]
    await this.node
    await this.refreshTree(previousTreePath)
    this._rawNodeUpdate = {}

    if (!this.core.isComputeNode) {
      await this.releaseMutex()
    }
  }

  protected async addChild(
    ChildClass: any,
    instanceName: string,
    nodeUpdate: any,
    edgeUpdate?: any
  ) {


    /**
     * Create a new child node along with 
     * initializing any of its children
     */
    logger.tree("tree path inclusive: ", this._treePathInclusive)
    const newChild = new ChildClass(
      this.core,
      this._treePathInclusive,
      instanceName,
      ''
    )
    const edges: any = {}

    if (edgeUpdate) {
      Object.entries(edgeUpdate).forEach(([key, value]) => {
        edges[key] = {
          child_hash_id: value
        }
      })
    }

    newChild.setRawNodeUpdate({
      ...nodeUpdate,
      edges
    })
    await newChild.node


    /**
     * Does a full root node refresh that includes this parent
     */
    await newChild.refreshTree(this._treePathInclusive)

    /**
     * Loads this new child as an edge in the edges object map
     */
    let edgeName = `e_out_${ChildClass.name}`
    if (instanceName) {
      edgeName += `_${instanceName}`
    }
    this.edges[edgeName] = newChild

    /**
     * Refreshes the children of the new child
     */
    await newChild.refreshChildren

  
    return newChild
  }


}