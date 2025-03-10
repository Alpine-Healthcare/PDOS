import pdos from "../../Core";
import TreatmentEncounter from "../../tree/TreatmentEncounter";
import { getTreatment, getTreatmentRaw } from "./get";

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

export const hardDelete = async (treatmentName: string) => {
  const treatment = await getTreatment(treatmentName);
  if (!treatment) {
    throw new Error(`Treatment ${treatmentName} not found`);
  }

  await treatment.delete();
  await pdos().tree.root.push();
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

export const addEncounter = async (
  treatmentName: string,
  date: Date,
  messages: string[] = [],
) => {
  const treatment = await getTreatmentRaw(treatmentName);
  if (!treatment) {
    throw new Error(`Treatment ${treatmentName} not found`);
  }

  if (!treatment.edges["e_out_TreatmentEncounter"]) {
    console.log("adding treatment encounter");
    await treatment.addChild(TreatmentEncounter, undefined, {});
  }

  console.log("treatment.edges", Object.keys(treatment.edges));
  const treatmentEncounter = treatment.edges[
    "e_out_TreatmentEncounter"
  ] as TreatmentEncounter;
  await treatmentEncounter.addStorageChild(date, {
    messages: messages.map((message) => ({
      message,
      sender: treatmentName,
      sentOn: new Date().toISOString(),
    })),
  });

  await pdos().tree.root.push();
};
