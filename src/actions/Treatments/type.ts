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

export const mapRawToTreatment = (raw: any): Treatment => {
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

export const mapRawToTreatmentInstance = (raw: any): TreatmentInstance => {
  return {
    messages: raw.messages || [],
    date: raw.date || new Date().toISOString(),
  };
};
