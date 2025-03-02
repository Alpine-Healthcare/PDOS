import pdos from "../Core";
import PDFSNode from "../store/PDFSNode";

export interface Treatment {
  name: string;
  treatmentName: string;
  treatmentBinaryHash: string;
  is_active: boolean;
  hashId: string;
  intake: object;
  active_on: string;
}

const mapRawToTreatment = (raw: any): Treatment => {
  return {
    name: raw.name,
    treatmentName: raw.treatmentName,
    treatmentBinaryHash: raw.treatmentBinaryHash,
    is_active: raw.is_active,
    hashId: raw.hashId,
    intake: raw.intake,
    active_on: raw.active_on,
  };
};

export const addTreatment = async (
  name: string,
  hashId: string,
  intake: object,
) => {
  await pdos().tree.root.edges.e_out_TreatmentManifest.addTreatment(
    name,
    hashId,
    intake,
  );
  await pdos().tree.root.syncLocalRootHash();
};

export const getAll = async (): Promise<PDFSNode[]> => {
  const treatmentManifest =
    await pdos().tree.root.edges?.e_out_TreatmentManifest;

  return Object.entries(treatmentManifest.edges)
    .filter(([edgeType, edge]) => {
      if (edgeType.includes("Treatment")) {
        return true;
      }

      return false;
    })
    .map(([edgeType, edge]) => edge) as PDFSNode[];
};

export const all = async (): Promise<Treatment[]> => {
  return (await getAll()).map((node) => {
    return mapRawToTreatment(node._rawNode.data);
  });
};

export const getActiveTreatments = async (): Promise<PDFSNode[]> => {
  const allTreatments = await getAll();
  return allTreatments.filter((n: PDFSNode) => n._rawNode.data.is_active);
};

export const hardDelete = async (treatmentName: string) => {
  const treatment = await getTreatment(treatmentName);
  if (!treatment) {
    throw new Error(`Treatment ${treatmentName} not found`);
  }

  await treatment.delete();
  await pdos().tree.root.syncLocalRootHash();
};

export const getActive = async (): Promise<Treatment[]> => {
  return (await getActiveTreatments()).map((t: PDFSNode) => {
    return {
      name: t._rawNode.data.name,
      treatmentName: t._rawNode.data.treatmentName,
      treatmentBinaryHash: t._rawNode.data.treatmentBinaryHash,
      is_active: t._rawNode.data.is_active,
      hashId: t._rawNode.data.hashId,
      intake: t._rawNode.data.intake,
      active_on: t._rawNode.data.active_on,
    };
  });
};

export const enable = async (treatmentName: string) => {
  const treatment = await getTreatmentRaw(treatmentName);
  if (!treatment) {
    throw new Error(`Treatment ${treatmentName} not found`);
  }

  console.log("updating treatment", treatment);
  const newObj = {
    ...treatment._rawNode.data,
    is_active: true,
    active_on: new Date().toISOString(),
  };
  console.log("new obj", newObj);

  await treatment.update(newObj);

  await pdos().tree.root.syncLocalRootHash();
};

export const disable = async (treatmentName: string) => {
  const treatment = await getTreatmentRaw(treatmentName);
  if (!treatment) {
    throw new Error(`Treatment ${treatmentName} not found`);
  }

  await treatment.update({
    ...treatment._rawNode.data,
    is_active: false,
  });

  await pdos().tree.root.syncLocalRootHash();
};

export const getTreatmentBinaryForTreatment = async (treatment: PDFSNode) => {
  return treatment.edges.e_out_TreatmentBinary;
};

export const getTreatmentRaw = async (
  treatment: string,
): Promise<PDFSNode | undefined> => {
  return (await getAll()).find((t: any) => {
    return t._rawNode.data.treatmentName === treatment;
  });
};

export const getTreatment = async (
  treatment: string,
): Promise<PDFSNode | undefined> => {
  return (await getActiveTreatments()).find((t: any) => {
    return t._rawNode.data.treatmentName === treatment;
  });
};

export const getTreatmentInstances = async (treatment: string) => {
  const activeTreatment = await getTreatment(treatment);

  if (!activeTreatment) {
    return [];
  }

  const instances = Object.entries(activeTreatment.edges).filter(
    ([key, value]: [string, any]) => {
      return key.startsWith("e_out_TreatmentInstance");
    },
  );

  return instances.map(([key, value]: [string, any]) => {
    return value;
  });
};
