import { Core } from "../Core";
import PDFSNode from "./PDFSNode";

export default class Inbox extends PDFSNode {
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
