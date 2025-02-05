import { Core } from "..";
import ModuleManager from "./ModuleManager";
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
    constructor(core: Core);
    static init(core: Core, name: keyof ModuleManager, config: any, dependencies: Dependencies[]): Promise<void>;
    protected start(isRPCServer: boolean): Promise<void>;
    protected postStart(): Promise<void>;
    protected restart(): Promise<void>;
    protected stop(): Promise<void>;
}
export {};
//# sourceMappingURL=Module.d.ts.map