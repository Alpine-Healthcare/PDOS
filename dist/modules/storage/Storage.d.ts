import { default as Module } from '../Module';
import { Core } from '../../Core';
declare enum Platform {
    WEB = "WEB",
    REACT_NATIVE = "REACT_NATIVE"
}
interface Config {
    platform?: Platform;
}
interface DependencyInjection {
    storageLib?: {
        setItem: (key: string, value: string) => void;
        getItem: (key: string) => void;
    };
}
export default class Storage extends Module {
    private config;
    private dependencyInjection;
    constructor(core: Core, config: Config | null, dependencyInjection: DependencyInjection | null);
    protected start(): Promise<void>;
    addItem(key: string, value: string): Promise<void>;
    getItem(key: string): Promise<string | void | null>;
}
export {};
//# sourceMappingURL=Storage.d.ts.map