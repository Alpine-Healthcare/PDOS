import { Core } from '..';
import { default as ModuleManager } from './ModuleManager';
interface Dependencies {
    package: string;
    version: string;
}
export interface ModuleConfig {
    version: string;
    dependencies: Dependencies;
}
export default class Module {
    protected core: Core;
    isReady: boolean;
    protected portalEmit: ((message: string, prop: string, data: string) => void) | undefined;
    protected checkPortalMessages: ((type: string) => any) | undefined;
    constructor(core: Core);
    static init(core: Core, name: keyof ModuleManager, config: any, dependencies: Dependencies[]): Promise<void>;
    protected start(isRPCServer: boolean): Promise<void>;
    protected postStart(): Promise<void>;
    protected restart(): Promise<void>;
    protected stop(): Promise<void>;
    portal<t>(type: string, prop?: string, data?: any): Promise<t>;
    setPortalSend(emit: (message: string, prop: string, data: string) => void): void;
    setPortalReceive(checkReceivedMessages: (type: string) => any): void;
}
export {};
//# sourceMappingURL=Module.d.ts.map