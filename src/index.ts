import pdos, { Core } from "./Core";
import { getAllRecords, sync } from "./actions/Data";
import {
  clearMessages,
  getMessages,
  addMessage,
  get,
  Inbox,
} from "./actions/Inbox";
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
} from "./actions/Treatments";
import PDFSNode from "./store/PDFSNode";
import { updateInfo, getInfo, User } from "./actions/User";

export const actions = {
  inbox: {
    getMessages,
    clearMessages,
    addMessage,
    get,
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

export type { User, Treatment, Inbox };

export { Core, PDFSNode, pdos };
