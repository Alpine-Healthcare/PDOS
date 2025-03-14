import { Core } from '../Core';
import { default as PDOSNode } from './base/PDOSNode';
export default class Treatment extends PDOSNode {
    static _nodeType: string;
    static name: string;
    constructor(core: Core, treePath: string[], instanceType: string, hash?: string);
    disable(): Promise<void>;
    enable(): Promise<void>;
    addInstance(messages?: string[]): Promise<void>;
}
//# sourceMappingURL=Treatment.d.ts.map