import Module from "../Module";
export default class Storage extends Module {
    config;
    dependencyInjection;
    constructor(core, config, dependencyInjection) {
        super(core);
        this.config = config;
        this.dependencyInjection = dependencyInjection;
    }
    async start() {
    }
    async addItem(key, value) {
        return localStorage.setItem(key, value);
    }
    async getItem(key) {
        return localStorage.getItem(key);
    }
}
//# sourceMappingURL=Storage.js.map