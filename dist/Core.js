import { reaction, makeAutoObservable } from "mobx";
/**
 * Modules
 */
import MapConfig from "./modules/Map.config";
/**
 * Constants
 */
import ConstantsManager from "./constants/ConstantsManager";
export let coreConstants;
import { configure } from "mobx";
import UserAccount from "./store/UserAccount";
import { ConfigValidationError, ModuleNotFoundError } from "./Errors";
configure({
    enforceActions: "never",
});
let mainCore;
let pdos = () => {
    return mainCore;
};
export default pdos;
export class Core {
    config;
    static rootInstance = UserAccount;
    root = undefined;
    constants;
    modules = {};
    stores = {};
    delayedInit = [];
    started = false;
    isComputeNode = false;
    gatewayURL = "";
    test = {};
    constructor(config) {
        this.config = config;
        this.validateConfig(config);
        mainCore = this;
        makeAutoObservable(this);
        this.constants = new ConstantsManager();
        coreConstants = this.constants;
        this.onAuthChanged();
        try {
            this.isComputeNode = this.config.context.isComputeNode ?? false;
            this.gatewayURL = this.config.context.gatewayURL ?? '';
            this.test = this.config.test ?? {};
        }
        catch {
            throw new ConfigValidationError("Failed to parse context");
        }
        console.log("# pdos config : ", config);
    }
    /**
     * Assures that the instantiation object given to pdo is valid
     * and will boot up a healthy instance of pdos
     *
     * @param config Instantiation object given to pdos
     */
    validateConfig(config) {
        // Check the env that is requested is available
        const acceptedEnvs = ['marigold'];
        if (config.env && !acceptedEnvs.includes(config.env)) {
            throw new ConfigValidationError("Invalid environment given.");
        }
    }
    get initConfig() {
        return this.config;
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
            if (!Module) {
                throw new ModuleNotFoundError(`Module ${moduleName} not found in MapConfig`);
            }
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
        console.log("# pdos : successfully started");
        this.started = true;
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
        this.root = new Core.rootInstance(this);
        if (Core.rootInstance.name) {
            this.stores[capitalizeFirstLetter(Core.rootInstance.name)] = this.root;
        }
        else {
            this.stores[Core.rootInstance.constructor.name] = this.root;
            this.stores[Core.rootInstance.constructor.name]._();
        }
        this.stores['root'] = this.root;
    }
}
//# sourceMappingURL=Core.js.map