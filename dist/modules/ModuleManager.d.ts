import { default as AppManager } from './appManager/AppManager';
import { default as Notification } from './notification/Notification';
import { default as Auth } from './auth/Auth';
import { default as DataRequest } from './dataRequest/DataRequest';
import { default as Encryption } from './encryption/Encryption';
export default class ModuleManager {
    appManager?: AppManager;
    notification?: Notification;
    auth?: Auth;
    dataRequest?: DataRequest;
    encryption?: Encryption;
}
//# sourceMappingURL=ModuleManager.d.ts.map