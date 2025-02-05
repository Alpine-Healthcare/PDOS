export const getEdgeInfo = (edgeType) => {
    const edgeSplit = edgeType.split("_");
    return {
        coreType: edgeSplit[2],
        instanceType: edgeSplit.length > 3 ? edgeSplit[3] : undefined
    };
};
//# sourceMappingURL=Model.js.map