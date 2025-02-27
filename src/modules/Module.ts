import { makeObservable, observable } from "mobx";
import { Core } from "..";
import ModuleManager from "./ModuleManager";

interface Dependencies {
  package: string;
  version: string;
}

export interface ModuleConfig {
  version: string;
  dependencies: Dependencies;
}

export default class Module {
  public isReady: boolean = false;
  protected portalEmit:
    | ((message: string, prop: string, data: string) => void)
    | undefined;
  protected checkPortalMessages: ((type: string) => any) | undefined;

  constructor(protected core: Core) {
    makeObservable(this, {
      isReady: observable,
    });
  }

  static async init(
    core: Core,
    name: keyof ModuleManager,
    config: any,
    dependencies: Dependencies[],
  ) {
    const ModuleClass = this;
    core.modules[name] = new (ModuleClass as any)(core, config, dependencies);
  }
  protected async start(isRPCServer: boolean) {}
  protected async postStart() {}
  protected async restart() {}
  protected async stop() {}

  public async portal<t>(type: string, prop?: string, data?: any) {
    console.log("emitting with: ", type, prop, data);
    console.log("this.portalEmit: ", this.portalEmit);
    if (!this.portalEmit) {
      throw new Error("Portal emit not set");
    }
    this.portalEmit(type, prop ?? "", data ?? "");
    const portalResponse = await this.checkPortalMessages?.(type);
    return portalResponse as t;
  }

  public setPortalSend(
    emit: (message: string, prop: string, data: string) => void,
  ) {
    this.portalEmit = emit;
  }

  public setPortalReceive(checkReceivedMessages: (type: string) => any) {
    this.checkPortalMessages = checkReceivedMessages;
  }
}
