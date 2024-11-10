import Module from "../Module";
import { Core } from "../..";
interface Config {
}
export default class Auth extends Module {
    private config;
    credentialId: string | null;
    constructor(core: Core, config: Config);
    initializeUser(credentialId: string): Promise<void>;
    setCredentialId(credentialId: string): Promise<void>;
}
export {};
//# sourceMappingURL=Auth.d.ts.map