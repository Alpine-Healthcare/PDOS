import pdos, { Core } from "./Core";
import { getAllRecords, sync } from "./actions/Data";
import { clear, get, add, Inbox } from "./actions/Inbox";
import {
  addTreatment,
  getActive,
  getActiveTreatments,
  getTreatmentBinaryForTreatment,
  getTreatmentInstances,
  enable,
  disable,
  Treatment,
  hardDelete,
  all,
  TreatmentInstance,
} from "./actions/Treatments";
import PDFSNode from "./store/PDFSNode";
import { updateInfo, getInfo, User } from "./actions/User";

export const actions = {
  inbox: {
    get,
    clear,
    add,
  },
  treatments: {
    all,
    hardDelete,
    getActive,
    getActiveTreatments,
    getTreatmentInstances,
    getTreatmentBinaryForTreatment,
    addTreatment,
    enable,
    disable,
  },
  data: {
    sync,
    getAllRecords,
  },
  user: {
    updateInfo,
    getInfo,
  },
};

export type { User, Treatment, Inbox, TreatmentInstance };

export { Core, PDFSNode, pdos };
