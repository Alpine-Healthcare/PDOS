import { Core } from "../Core";
import PDOSNode from "./base/PDOSNode";

export default class Inbox extends PDOSNode {
  public static _nodeType = "N_Inbox";

  constructor(
    core: Core,
    treePath: string[],
    _: string | undefined,
    hash?: string,
  ) {
    super(core, treePath, "N_Inbox", hash);
  }
}
