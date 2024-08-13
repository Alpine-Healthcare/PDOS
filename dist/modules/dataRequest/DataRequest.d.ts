import Module from "../Module";
import { Core } from "../..";
interface Config {
}
export default class DataRequest extends Module {
    private config;
    constructor(core: Core, config: Config);
    protected start(): Promise<void>;
    checkAccess(metrics: (any)[]): Promise<void>;
    getTodaysValue(metric: string): Promise<number | undefined>;
}
export {};
//# sourceMappingURL=DataRequest.d.ts.map