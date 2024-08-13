import ModuleManager from "./modules/ModuleManager";
import AppManager from "./apps/AppManager";
/**
 * Constants
 */
import ConstantsManager from "./constants/ConstantsManager";
export declare let coreConstants: ConstantsManager;
declare let pdos: () => Core;
export default pdos;
export declare class Core {
    private config;
    constants: ConstantsManager;
    modules: ModuleManager;
    apps: AppManager;
    stores: any;
    graph: any;
    rpc: any;
    static injectStore: any;
    static injectLib: never[];
    libs: {};
    private delayedInit;
    started: boolean;
    isRPCServer: boolean;
    constructor(config: any);
    /*************************
     * Jscore Constant Reactors
     *************************/
    private addConstantListeners;
    private onAuthChanged;
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
    start(dependencyInjection?: any): Promise<Core>;
    /**
     * Called after all modules started and stores instantiated.
     */
    private postStart;
    reset(): Promise<any[]>;
    /*************************
     * Module Helper Methods
     *************************/
    /**
     * Returns current modules on the core.
     */
    private get liveModules();
    /*************************
     * Store Lifecycle Methods
     *************************/
    private startStores;
    private resetStores;
    /*************************
     * App Lifecycle Methods
     *************************/
    private startApps;
    /*************************
     * Lib Lifecycle Methods
     *************************/
    private startLibs;
    private resetLibs;
}
//# sourceMappingURL=Core.d.ts.map