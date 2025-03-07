import { Core } from '../Core';
import { default as PDOSNode } from './PDOSNode';
export default class TreatmentBinary extends PDOSNode {
    static _nodeType: string;
    constructor(core: Core, treePath: string[], instanceType: string | undefined, hash?: string);
    protected onNodeLoad(): void;
    private get dataMetrics();
    private checkDataAccess;
    private createDataGroup;
    syncData(): Promise<void>;
}
//# sourceMappingURL=TreatmentBinary.d.ts.map