import { default as PDOSNode } from './store/PDOSNode';
import { default as ModuleManager } from './modules/ModuleManager';
import { default as ConstantsManager } from './constants/ConstantsManager';
export declare let coreConstants: ConstantsManager;
declare let pdos: () => Core;
export default pdos;
interface TestConfiguration {
    initCredentialId?: string;
}
interface Context {
    gatewayURL: string;
    isComputeNode?: boolean;
}
interface CoreConfig {
    env: "marigold";
    context: Context;
    test?: TestConfiguration;
    modules?: any;
}
export declare class Core {
    private config;
    private static rootInstance;
    root: PDOSNode | undefined;
    constants: ConstantsManager;
    modules: ModuleManager;
    stores: any;
    private delayedInit;
    started: boolean;
    isComputeNode: boolean;
    gatewayURL: string;
    test: TestConfiguration;
    constructor(config: CoreConfig);
    /**
     * Assures that the instantiation object given to pdo is valid
     * and will boot up a healthy instance of pdos
     *
     * @param config Instantiation object given to pdos
     */
    private validateConfig;
    get initConfig(): CoreConfig;
    private onAuthChanged;
    get tree(): any;
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
}
//# sourceMappingURL=Core.d.ts.map