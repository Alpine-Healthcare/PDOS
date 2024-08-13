export default class App {
    core;
    constructor(core) {
        this.core = core;
    }
    static async init(core, name, config, dependencies) {
        const AppClass = this;
        core.apps[name] = new AppClass(core, config, dependencies);
        return core.apps[name];
    }
    async start() { }
    async restart() { }
    async stop() { }
}
//# sourceMappingURL=App.js.map