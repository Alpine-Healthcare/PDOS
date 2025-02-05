import Module from "../Module";
import { Core } from "../../Core";
export default class Storage extends Module {
    private config;
    private dependencyInjection;
    constructor(core: Core, config: null, dependencyInjection: null);
    protected start(): Promise<void>;
    addItem(key: string, value: string): Promise<void>;
    getItem(key: string): Promise<string | null>;
}
//# sourceMappingURL=Storage.d.ts.map