import pdos, { Core } from "./Core";
import { DataGroup, getAllRecords, sync, getGroup } from "./actions/Data";
import { clear, get, add, Inbox } from "./actions/Inbox";
import {
  addTreatment,
  enable,
  disable,
  hardDelete,
  addEncounter,
} from "./actions/Treatments/update";
import {
  getTreatmentInstances,
  getTreatmentBinaryForTreatment,
  getActiveTreatments,
  getActive,
  all,
} from "./actions/Treatments/get";
import PDOSNode from "./tree/base/PDOSNode";
import { updateInfo, getInfo, User, updatePushToken } from "./actions/User";
import { Treatment, TreatmentInstance } from "./actions/Treatments/type";

export const actions = {
  inbox: {
    get,
    clear,
    add,
  },
  treatments: {
    hardDelete,
    addTreatment,
    addEncounter,
    enable,
    disable,
    all,
    getActive,
    getActiveTreatments,
    getTreatmentInstances,
    getTreatmentBinaryForTreatment,
  },
  data: {
    sync,
    getAllRecords,
    getGroup,
  },
  user: {
    updateInfo,
    getInfo,
    updatePushToken,
  },
};

export type { User, Treatment, Inbox, TreatmentInstance, DataGroup };
export { Core, PDOSNode, pdos };
