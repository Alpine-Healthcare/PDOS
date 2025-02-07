import { makeObservable, observable, reaction } from "mobx";
import pdos from "../Core";
import { getEdgeInfo } from "./Model";
import { NetworkMapper } from "./NetworkMapper";
import { addToPdfs, getFromPdfs } from "./Pdfs";
import { logger } from "../utils/logger";
export default class PDFSNode {
    core;
    _nodeType = "";
    _hash = "";
    _treePath = [];
    _treePathInclusive = [];
    _childrenRefreshMap = {};
    edges = {};
    edgeArray = [];
    _rawNode = {};
    _rawNodeUpdate = {};
    constructor(core, treePath, nodeType, hash) {
        this.core = core;
        this._treePath = treePath;
        this._hash = hash || "";
        this._nodeType = nodeType;
        makeObservable(this, {
            edges: observable,
            _rawNode: observable,
            _treePath: observable,
            _treePathInclusive: observable
        });
        /**
         * Any time the current nodes treePath is updated,
         * update all of its childrens
         */
        reaction(() => ({
            treePathInclusive: this._treePathInclusive
        }), ({ treePathInclusive }) => {
            Object.values(this.edges).forEach((edge) => {
                edge._treePath = treePathInclusive;
                edge._treePathInclusive = [...treePathInclusive, edge._hash];
            });
        });
    }
    getData() {
        return {
            hashId: this._hash,
            rawNode: this._rawNode
        };
    }
    getChildren() {
        return Object.values(this.edges);
    }
    onNodeLoad() { }
    get node() {
        return (async () => {
            if (this._hash) {
                this._rawNode = await getFromPdfs(this._hash);
                if (this._rawNode.data) {
                    try {
                        this._rawNode.data = await this.core.modules.encryption?.decryptNode(this._rawNode.data);
                    }
                    catch (e) {
                        throw new Error("Failed to decrypt data");
                    }
                }
                this._nodeType = this._rawNode.type;
                this._treePathInclusive = [...this._treePath, this._hash];
                logger.tree("\n\n\n\nFetched existing node from pdfs");
                logger.tree("---------------------------------");
                logger.tree("Existing node from pdfs: ", this._nodeType);
                logger.tree("Raw node: ", this._rawNode);
                logger.tree("Node hash: ", this._hash);
                logger.tree("Node type: ", this._nodeType);
                logger.tree("Node tree path of : ", this._treePath);
            }
            else {
                const newNode = await addToPdfs(this._treePath, {
                    ...this._rawNode,
                    ...this._rawNodeUpdate
                }, this._nodeType);
                this._rawNode = newNode.rawNode;
                this._hash = newNode.hash;
                this._treePathInclusive = newNode.newTreePath;
                this._treePath = [...newNode.newTreePath].slice(0, -1);
                this._nodeType = newNode.rawNode.type;
                logger.tree("\n\n\n\nAdded node to pdfs");
                logger.tree("---------------------------------");
                logger.tree("Added node to pdfs: ", this._nodeType);
                logger.tree("Raw node: ", this._rawNode);
                logger.tree("Node hash: ", this._hash);
                logger.tree("Node type: ", this._nodeType);
                logger.tree("Node tree path of : ", this._treePath);
            }
            this.onNodeLoad();
        })();
    }
    setRawNodeUpdate(rawNode) {
        this._rawNodeUpdate = rawNode;
    }
    get refreshChildren() {
        logger.tree("\n\n\n\n\nRefreshing children");
        logger.tree("---------------------------------");
        logger.tree("Parent hash: ", this._hash);
        logger.tree("Parent type: ", this._nodeType);
        logger.tree("Parent rawnode: ", this._rawNode);
        if (this._rawNode["edges"] === undefined ||
            this._rawNode["edges"] === null ||
            Object.keys(this._rawNode["edges"]).length === 0) {
            logger.tree("No children");
            return;
        }
        const hasEdges = Object.values(this._rawNode.edges ?? {}).find(edge => edge !== null);
        if (!hasEdges) {
            logger.tree(`${this._hash} has uninitalized children`);
        }
        return (async () => {
            for (const [key, value] of Object.entries(this._rawNode.edges)) {
                const { coreType, instanceType } = getEdgeInfo(key);
                logger.tree("Child node type: ", coreType);
                if (!NetworkMapper[coreType]) {
                    logger.tree("Child node mapping not found continuing!");
                    continue;
                }
                let nodeName = "N_" + coreType;
                if (instanceType) {
                    nodeName += "_I";
                }
                let childEdge = "e_out_" + coreType;
                if (instanceType) {
                    childEdge += "_I";
                }
                const hashId = value?.child_hash_id ?? '';
                logger.tree("Child hash id: ", hashId);
                logger.tree("Child node name: ", nodeName);
                logger.tree("Parent child edge name: ", childEdge);
                const NodeClass = NetworkMapper[coreType];
                const currentTreePath = [...this._treePath, this._hash];
                const child = new NodeClass(this.core, currentTreePath, nodeName, hashId);
                await child.node;
                //TODO: unsure if this is needed
                await child.refreshTree(this._treePathInclusive);
                this.edges[key] = child;
                this.edgeArray.push(child);
                logger.tree("Finished adding child node", Object.keys(this.edges));
                await child.refreshChildren;
            }
        })();
    }
    async refreshTree(previousTreePath) {
        await this.core.tree.root.refresh(previousTreePath, this._treePathInclusive);
    }
    async update(rawNodeUpdate, unencrypted = false) {
        let nodeUpdate = {};
        if (unencrypted) {
            this._rawNodeUpdate = rawNodeUpdate;
        }
        else {
            nodeUpdate = {
                data: rawNodeUpdate
            };
            const encrypted = await pdos().modules.encryption?.encryptNode(nodeUpdate);
            this._rawNodeUpdate = encrypted;
        }
        this._hash = "";
        const previousTreePath = [...this._treePathInclusive.slice(0, -1)];
        await this.node;
        await this.refreshTree(previousTreePath);
        this._rawNodeUpdate = {};
        await this.core.tree.root.syncLocalRootHash();
    }
    async addChild(ChildClass, instanceName, nodeUpdate, edgeUpdate) {
        /**
         * Create a new child node along with
         * initializing any of its children
         */
        logger.tree("tree path inclusive: ", this._treePathInclusive);
        const newChild = new ChildClass(this.core, this._treePathInclusive, instanceName, '');
        const edges = {};
        if (edgeUpdate) {
            Object.entries(edgeUpdate).forEach(([key, value]) => {
                edges[key] = {
                    child_hash_id: value
                };
            });
        }
        const encrypted = await pdos().modules.encryption?.encryptNode(nodeUpdate);
        const nodeUpdateEncrypted = {
            ...nodeUpdate,
            data: encrypted
        };
        newChild.setRawNodeUpdate({
            ...nodeUpdateEncrypted,
            edges
        });
        await newChild.node;
        /**
         * Does a full root node refresh that includes this parent
         */
        await newChild.refreshTree(this._treePathInclusive);
        /**
         * Loads this new child as an edge in the edges object map
         */
        let edgeName = `e_out_${ChildClass.name}`;
        if (instanceName) {
            edgeName += `_${instanceName}`;
        }
        this.edges[edgeName] = newChild;
        this.edgeArray.push(newChild);
        /**
         * Refreshes the children of the new child
         */
        await newChild.refreshChildren;
        return newChild;
    }
}
//# sourceMappingURL=PDFSNode.js.map