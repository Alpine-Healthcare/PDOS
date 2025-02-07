import pdos from "../Core";
export const addTreatment = async (name, hashId, intake) => {
    await pdos().tree.root.edges.e_out_TreatmentManifest.addTreatment(name, hashId, intake);
    await pdos().tree.root.syncLocalRootHash();
};
export const getActiveTreatments = () => {
    const activeTreatments = pdos().
        stores.
        userAccount?.
        edges?.
        e_out_TreatmentManifest?.
        treatments ?? [];
    return activeTreatments;
};
export const getTreatmentBinaryForTreatment = async (treatment) => {
    return treatment.edges.e_out_TreatmentBinary;
};
export const getTreatment = (treatment) => {
    return getActiveTreatments().find((t) => {
        return t._rawNode.data.treatmentName === treatment;
    });
};
export const getTreatmentInstances = (treatment) => {
    const activeTreatment = getTreatment(treatment);
    if (!activeTreatment) {
        return [];
    }
    const instances = Object.entries(activeTreatment.edges).filter(([key, value]) => {
        return key.startsWith("e_out_TreatmentInstance");
    });
    return instances.map(([key, value]) => {
        return value;
    });
};
//# sourceMappingURL=Treatments.js.map