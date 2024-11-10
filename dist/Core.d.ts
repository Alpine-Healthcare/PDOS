import ModuleManager from "./modules/ModuleManager";
/**
 * Constants
 */
import ConstantsManager from "./constants/ConstantsManager";
export declare let coreConstants: ConstantsManager;
import PDFSNode from "./store/PDFSNode";
declare let pdos: () => Core;
export default pdos;
interface CoreTest {
    initCredentialId?: string;
}
interface CoreConfig {
    env: 'production' | 'development';
    gatewayURL?: string;
    test?: CoreTest;
    modules: any;
    apps?: any;
    isComputeNode?: boolean;
}
export declare class Core {
    private config;
    private static root;
    constants: ConstantsManager;
    modules: ModuleManager;
    root: PDFSNode | undefined;
    stores: any;
    private delayedInit;
    started: boolean;
    isRPCServer: boolean;
    isComputeNode: boolean;
    gatewayURL: string;
    test: CoreTest;
    constructor(config: CoreConfig);
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