import { ethers } from 'ethers';

export declare const actions: {
    inbox: {
        getMessages: () => Promise<any>;
        clearMessages: () => Promise<void>;
    };
    treatments: {
        getActiveTreatments: () => any;
        getTreatmentInstances: (treatment: string) => any[];
        addTreatment: (name: string, hashId: string, intake: object) => Promise<void>;
    };
    data: {
        sync: () => Promise<void>;
        getAllRecords: () => any;
    };
};

declare class AppManager extends Module {
    private config;
    private dependencyInjection;
    lifecycle: Lifecycle | undefined;
    constructor(core: Core, config: Config, dependencyInjection: DependencyInjection);
    protected postStart(): Promise<void>;
    protected restart(): Promise<void>;
}

declare class Auth extends Module {
    private config;
    authType: AuthType | undefined;
    info: AuthInfo;
    credentialId: string | undefined;
    publicKey: string | undefined;
    private ethersProvider;
    private eip1193Provider;
    constructor(core: Core, config: Config_2);
    initializePasskeyUser(credentialId: string): Promise<void>;
    initializeWalletUser(): Promise<void>;
    disconnectWalletUser(): Promise<void>;
    /** Passkey Support */
    setCredentialId(credentialId: string): Promise<void>;
    /** Wallet Support */
    initInfoForWalletUser(): Promise<void>;
    getAccessPackage(): Promise<{
        key1: string;
        key2: string;
        key3: string;
        key4: string;
    }>;
    checkIsActive(): Promise<any>;
    onboard(): Promise<void>;
    getPDOSRoot(): Promise<any>;
    updatePDOSRoot(newHash: string): Promise<void>;
    setProviders(eip1193Provider: any): Promise<void>;
    setEip1193Provider(provider: any): Promise<void>;
    setEthersProvider(provider: ethers.BrowserProvider): Promise<void>;
    setPublicKey(publicKey: string): Promise<void>;
}

declare class Authentication extends Constant<AuthenticationState> {
    constructor();
    state: AuthenticationState;
    update(state: AuthenticationState): void;
}

declare enum AuthenticationState {
    SUCCESS = 0,
    EMAIL_CONFIRMATION = 1,
    EMAIL_CONFIRMATION_FAILED = 2,
    ERROR = 3,
    UNKNOWN = 4
}

declare interface AuthInfo {
    isAuthenticated: boolean;
    isActive: boolean;
    pdosRoot: string | undefined;
}

declare enum AuthType {
    WALLET = 0,
    PASSKEY = 1
}

declare type Callback = () => void;

declare interface Config {
    platforms: PlatformState[];
}

declare interface Config_2 {
}

declare interface Config_3 {
}

declare class Connection extends Constant<ConnectionState> {
    state: ConnectionState;
    update(state: ConnectionState): void;
}

declare enum ConnectionState {
    ERROR = 0,
    CONNECTED = 1,
    DISCONNECTED = 2,
    UNKNOWN = 3
}

declare abstract class Constant<T> {
    abstract state: T;
    abstract update(state: T): void;
}

declare class ConstantsManager {
    authentication: Authentication;
    connection: Connection;
    platform: Platform;
}

declare interface Context {
    gatewayURL: string;
    isComputeNode?: boolean;
}

export declare class Core {
    private config;
    private static rootInstance;
    root: PDFSNode | undefined;
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

declare interface CoreConfig {
    env: 'production' | 'development' | 'test' | 'sepolia';
    context: Context;
    test?: TestConfiguration;
    modules?: any;
}

declare class DataRequest extends Module {
    private config;
    private dependencyInjection;
    private HealthKit;
    private reactNativeHealthKit;
    private MetricMap;
    constructor(core: Core, config: Config_3, dependencyInjection: DependencyInjection_2);
    protected start(): Promise<void>;
    checkAccess(metrics: (any)[]): Promise<void>;
    getTodaysValue(metric: string): Promise<number | undefined>;
}

declare interface Dependencies {
    package: string;
    version: string;
}

declare type DependencyInjection = MobileLifecycleDependencies;

declare type DependencyInjection_2 = {
    reactNativeHealthKit: any;
};

declare interface ExpoDependencies {
    Notifications: any;
    Permissions: any;
    Platform: any;
}

declare class Lifecycle {
    state: LifecycleState;
    protected initCallbacks: Array<Callback>;
    protected foregroundCallbacks: Array<Callback>;
    protected backgroundCallbacks: Array<Callback>;
    addInitCallback: (cb: Callback) => number;
    addForegroundCallback: (cb: Callback) => number;
    addBackgroundCallback: (cb: Callback) => number;
    protected start(): void;
}

declare enum LifecycleState {
    active = 0,
    inactive = 1
}

declare interface MobileConfig {
    type: "expo";
    pushTokenEndpoint: string;
}

declare interface MobileLifecycleDependencies {
    AppState: any;
}

declare class Module {
    protected core: Core;
    isReady: boolean;
    constructor(core: Core);
    static init(core: Core, name: keyof ModuleManager, config: any, dependencies: Dependencies[]): Promise<void>;
    protected start(isRPCServer: boolean): Promise<void>;
    protected postStart(): Promise<void>;
    protected restart(): Promise<void>;
    protected stop(): Promise<void>;
}

declare class ModuleManager {
    appManager?: AppManager;
    notification?: Notification_2;
    auth?: Auth;
    dataRequest?: DataRequest;
}

declare class Notification_2 extends Module {
    private config;
    private dependencyInjection;
    private notify;
    constructor(core: Core, config: NotificationConfig, dependencyInjection: ExpoDependencies);
    protected start(): Promise<void>;
    addListener(listener: (data: any) => {}): Promise<void>;
}

declare interface NotificationConfig {
    version: string;
    platform: "Web" | "Mobile";
    mobile: MobileConfig;
}

export declare class PDFSNode {
    protected core: Core;
    _nodeType: string;
    _hash: string;
    _treePath: string[];
    _treePathInclusive: string[];
    protected _childrenRefreshMap: {
        [key: string]: any;
    };
    edges: {
        [key: string]: any;
    };
    edgeArray: any[];
    _rawNode: any;
    _rawNodeUpdate: any;
    constructor(core: Core, treePath: string[], nodeType: string, hash?: string);
    getData(): {
        hashId: string;
        rawNode: any;
    };
    getChildren(): any[];
    protected onNodeLoad(): void;
    get node(): Promise<void>;
    setRawNodeUpdate(rawNode: any): void;
    get refreshChildren(): Promise<void> | undefined;
    refreshTree(previousTreePath: string[]): Promise<void>;
    protected update(rawNodeUpdate: any): Promise<void>;
    protected addChild(ChildClass: any, instanceName: string, nodeUpdate: any, edgeUpdate?: any): Promise<any>;
}

declare let pdos: () => Core;
export default pdos;

declare class Platform extends Constant<PlatformState> {
    state: PlatformState;
    constructor();
    update(): void;
}

declare enum PlatformState {
    Web = 0,
    Mobile = 1,
    Node = 2
}

declare interface TestConfiguration {
    initCredentialId?: string;
}

export { }
