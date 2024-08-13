import { Core } from "..";
interface Dependencies {
    package: string;
    version: string;
}
export interface ModuleConfig {
    version: string;
    dependencies: Dependencies;
}
export default class App {
    protected core: Core;
    constructor(core: Core);
    static init(core: Core, name: string, config: any, dependencies: any): Promise<any>;
    protected start(): Promise<void>;
    protected restart(): Promise<void>;
    protected stop(): Promise<void>;
}
export {};
//# sourceMappingURL=App.d.ts.map