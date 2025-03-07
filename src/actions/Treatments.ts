import pdos from "../Core";
import PDOSNode from "../tree/base/PDOSNode";

export interface Treatment {
  name: string;
  treatmentName: string;
  treatmentBinaryHash: string;
  is_active: boolean;
  hashId: string;
  intake: object;
  active_on: string;
}

export interface TreatmentInstance {
  messages: {
    message: string;
    sender: string;
    sentOn: string;
  }[];
  date: string;
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

const mapRawToTreatmentInstance = (raw: any): TreatmentInstance => {
  return {
    messages: raw.messages || [],
    date: raw.date || new Date().toISOString(),
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
  await pdos().tree.root.push();
};

export const getAll = async (): Promise<PDOSNode[]> => {
  const treatmentManifest =
    await pdos().tree.root.edges?.e_out_TreatmentManifest;

  return Object.entries(treatmentManifest.edges)
    .filter(([edgeType, edge]) => {
      if (edgeType.includes("Treatment")) {
        return true;
      }

      return false;
    })
    .map(([edgeType, edge]) => edge) as PDOSNode[];
};

export const all = async (): Promise<Treatment[]> => {
  return (await getAll()).map((node) => {
    return mapRawToTreatment(node._rawNode.data);
  });
};

export const getActiveTreatments = async (): Promise<PDOSNode[]> => {
  const allTreatments = await getAll();
  return allTreatments.filter((n: PDOSNode) => n._rawNode.data.is_active);
};

export const hardDelete = async (treatmentName: string) => {
  const treatment = await getTreatment(treatmentName);
  if (!treatment) {
    throw new Error(`Treatment ${treatmentName} not found`);
  }

  await treatment.delete();
  await pdos().tree.root.push();
};

export const getActive = async (): Promise<Treatment[]> => {
  return (await getActiveTreatments()).map((t: PDOSNode) => {
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

  const newObj = {
    ...treatment._rawNode.data,
    is_active: true,
    active_on: new Date().toISOString(),
  };

  await treatment.update(newObj);

  await pdos().tree.root.push();
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

  await pdos().tree.root.push();
};

export const getTreatmentBinaryForTreatment = async (treatment: PDOSNode) => {
  return treatment.edges.e_out_TreatmentBinary;
};

export const getTreatmentRaw = async (
  treatment: string,
): Promise<PDOSNode | undefined> => {
  return (await getAll()).find((t: any) => {
    return t._rawNode.data.treatmentName === treatment;
  });
};

export const getTreatment = async (
  treatment: string,
): Promise<PDOSNode | undefined> => {
  return (await getActiveTreatments()).find((t: any) => {
    return t._rawNode.data.treatmentName
      .toLowerCase()
      .includes(treatment.toLowerCase());
  });
};

export const getTreatmentInstancesRaw = async (treatment: string) => {
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

export const getTreatmentInstances = async (treatment: string) => {
  const instances = await getTreatmentInstancesRaw(treatment);

  return instances.map((instance: any) => {
    return mapRawToTreatmentInstance(instance._rawNode.data);
  });
};
