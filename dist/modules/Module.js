import { makeObservable, observable } from "mobx";
export default class Module {
    core;
    isReady = false;
    constructor(core) {
        this.core = core;
        makeObservable(this, {
            isReady: observable
        });
    }
    static async init(core, name, config, dependencies) {
        const ModuleClass = this;
        core.modules[name] = new ModuleClass(core, config, dependencies);
    }
    async start(isRPCServer) { }
    async postStart() { }
    async restart() { }
    async stop() { }
}
//# sourceMappingURL=Module.js.map