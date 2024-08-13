import Module from "../Module";
import { Core } from "../..";
interface Config {
}
export default class Auth extends Module {
    private config;
    accessPackage: any;
    userAccountRaw: any;
    constructor(core: Core, config: Config);
    initializeUser(accessPackage: any): Promise<void>;
    setAccessPackage(accessPackage: any): Promise<void>;
}
export {};
//# sourceMappingURL=Auth.d.ts.map