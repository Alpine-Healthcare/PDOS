import { reaction, makeAutoObservable } from "mobx";
/**
 * Modules
 */
import MapConfig from "./modules/Map.config";
/**
 * Constants
 */
import ConstantsManager from "./constants/ConstantsManager";
import UserAccount from "./store/UserAccount";
export let coreConstants;
import { configure } from "mobx";
configure({
    enforceActions: "never",
});
let mainCore;
let pdos = () => mainCore;
export default pdos;
export class Core {
    config;
    static root = UserAccount;
    constants;
    modules = {};
    root;
    stores = {};
    delayedInit = [];
    started = false;
    isRPCServer = false;
    isComputeNode = false;
    gatewayURL = "";
    test = {};
    constructor(config) {
        this.config = config;
        mainCore = this;
        makeAutoObservable(this);
        this.constants = new ConstantsManager();
        coreConstants = this.constants;
        this.onAuthChanged();
        this.isComputeNode = this.config.isComputeNode ?? false;
        this.gatewayURL = this.config.gatewayURL ?? '';
        this.test = this.config.test ?? {};
        console.log("# pdos config : ", config);
    }
    async onAuthChanged() {
        reaction(() => this.constants.authentication.state, async (arg) => {
            if (!this.started) {
                return;
            }
        });
    }
    get tree() {
        return this.stores;
    }
    /*************************
     * Module Lifecycle Methods
     *************************/
    /**
     * Initializes and starts the modules requested by the client.
     * Then,
     * Instatiates and creates the client stores.
     *
     * @param dependencyInjection
     */
    async start(dependencyInjection) {
        //default in case its loaded with require
        const requestedModules = this.config.modules;
        // FIXME: Module dependency stuff is VERY barbones
        // talk to sunny for more info 
        //Check our dependencies across our modules
        try {
            const independentModules = [];
            const dependentModules = [];
            const missingModuleDepdendencies = (modules) => {
                return Array.from(Object.keys(modules)).find(moduleName => {
                    const dependencies = modules[moduleName].dependencies;
                    if (!dependencies) {
                        independentModules.push(moduleName);
                        return false;
                    }
                    return !!dependencies.find((dependency) => {
                        if (!modules[dependency.package])
                            return true;
                        else {
                            if (modules[dependency.package].version !== dependency.version)
                                return true;
                            dependentModules.push(moduleName);
                            return false;
                        }
                    });
                });
            };
            if (missingModuleDepdendencies(requestedModules))
                throw new Error("Bad Module Configuration! Missing dependencies");
            // TODO: Load and start dependent modules first!!
            const modules = independentModules.concat(dependentModules);
            //load and start all of our modules
            const loadedModules = [];
            const errors = [];
            modules.forEach((moduleName) => {
                //Get the module from the map
                const moduleConfig = requestedModules[moduleName];
                const Module = MapConfig[moduleName];
                //grab any injected dependencies
                let dependencies;
                if (dependencyInjection) {
                    dependencies = dependencyInjection[moduleName];
                }
                //Initialize the module and add to core
                Module.init(this, moduleName, moduleConfig, dependencies);
                //Start the Module, the module name is camelCased
                loadedModules.push((async () => {
                    try {
                        await this.modules[moduleName].start(false);
                        console.log(`# ${moduleName} : started`);
                    }
                    catch (e) {
                        errors.push({
                            type: "critical",
                        });
                        console.log(`# ${moduleName} : failed to start`, "color:red", e);
                    }
                })());
            });
            await Promise.all(loadedModules);
            await this.startStores();
            //Run callbacks for anyone who is waiting for everything to start up.
            await this.postStart();
            this.delayedInit.forEach((func) => func());
            console.log("# jscore : successfully started");
            this.started = true;
        }
        catch (e) {
            throw e;
        }
        return this;
    }
    /**
     * Called after all modules started and stores instantiated.
     */
    async postStart() {
        return Promise.all(this.liveModules.map(m => {
            if (m.postStart)
                m.postStart();
        }));
    }
    async reset() {
        return Promise.all(this.liveModules.map(m => m.restart()));
    }
    /*************************
     * Module Helper Methods
     *************************/
    /**
     * Returns current modules on the core.
     */
    get liveModules() {
        return Array.from(Object.keys(this.config.modules)).map((moduleName) => {
            return this.modules[moduleName];
        });
    }
    /*************************
     * Store Lifecycle Methods
     *************************/
    async startStores() {
        //start our stores or any injected class (classes that are using the @jscore)
        const capitalizeFirstLetter = (word) => {
            return word.charAt(0).toLowerCase() + word.slice(1);
        };
        if (Core.root.name) {
            this.stores[capitalizeFirstLetter(Core.root.name)] = new Core.root(this);
        }
        else {
            this.stores[Core.root.constructor.name] = new Core.root(this);
            this.stores[Core.root.constructor.name]._();
        }
    }
}
//# sourceMappingURL=Core.js.map