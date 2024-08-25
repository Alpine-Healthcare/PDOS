declare class AppManager extends Module {
    private config;
    private dependencyInjection;
    lifecycle: Lifecycle | undefined;
    constructor(core: Core, config: Config, dependencyInjection: DependencyInjection);
    protected postStart(): Promise<void>;
    protected restart(): Promise<void>;
}

declare class AppManager_2 {
}

declare class Auth extends Module {
    private config;
    accessPackage: any;
    userAccountRaw: any;
    constructor(core: Core, config: Config_2);
    initializeUser(accessPackage: any): Promise<void>;
    setAccessPackage(accessPackage: any): Promise<void>;
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

export declare class Core {
    private config;
    constants: ConstantsManager;
    modules: ModuleManager;
    apps: AppManager_2;
    stores: any;
    rpc: any;
    static injectStore: any;
    static injectLib: never[];
    libs: {};
    private delayedInit;
    started: boolean;
    isRPCServer: boolean;
    isComputeNode: boolean;
    constructor(config: any);
    /*************************
     * Jscore Constant Reactors
     *************************/
    private addConstantListeners;
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
    _treePath: string[];
    _treePathInclusive: string[];
    protected _hash: string;
    protected _childrenRefreshMap: {
        [key: string]: any;
    };
    edges: {
        [key: string]: any;
    };
    _rawNode: any;
    _rawNodeUpdate: any;
    constructor(core: Core, treePath: string[], nodeType: string, hash?: string);
    protected onNodeLoad(): void;
    get node(): Promise<void>;
    setRawNodeUpdate(rawNode: any): void;
    get refreshChildren(): Promise<void> | undefined;
    refreshTree(previousTreePath: string[]): Promise<void>;
    protected getUserMutex(): Promise<boolean>;
    protected releaseMutex(): Promise<void>;
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

export declare const traverseTree: (root: PDFSNode, callback: (node: PDFSNode) => void) => void;

export declare class TreatmentBinary extends PDFSNode {
    static _nodeType: string;
    constructor(core: Core, treePath: string[], instanceType: string | undefined, hash?: string);
    protected onNodeLoad(): void;
    private get dataMetrics();
    private checkDataAccess;
    private checkPDOSNodeExistsAndCreateIfNot;
    private createDataGroup;
    syncData(): Promise<void>;
}

export { }
