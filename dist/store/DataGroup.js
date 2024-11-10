import PDFSNode from "./PDFSNode";
export default class DataGroup extends PDFSNode {
    static _nodeType = "N_DataGroup_I";
    constructor(core, treePath, instanceType, hash) {
        super(core, treePath, "N_DataGroup_" + instanceType, hash);
    }
    async updateData() {
        const updateValue = await this.core?.modules?.dataRequest?.getTodaysValue(this._rawNode.metric);
        if (updateValue !== undefined) {
            const records = this._rawNode.records;
            records[new Date().getTime()] = updateValue;
            await this.update({
                ...this._rawNode,
                records
            });
        }
    }
}
//# sourceMappingURL=DataGroup.js.map