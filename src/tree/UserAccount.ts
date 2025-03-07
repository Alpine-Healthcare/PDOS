import { Core } from "../Core";
import DataManifest from "./DataManifest";
import Inbox from "./Inbox";
import { addNode } from "./NetworkMapper";
import TreatmentManifest from "./TreatmentManifest";
import PDOSRootNode from "./base/PDOSRootNode";

export default class UserAccount extends PDOSRootNode {
  constructor(core: Core) {
    super(core, "N_UserAccount");
    addNode("TreatmentManifest", TreatmentManifest);
    addNode("DataManifest", DataManifest);
    addNode("Inbox", Inbox);
  }

  public async addAccessPackage(accessPackage: any) {
    await this.update(
      {
        access_package: accessPackage,
      },
      true,
    );
  }
}
