import { default as AppManager } from './appManager/AppManager';
import { default as Notification } from './notification/Notification';
import { default as Auth } from './auth/Auth';
import { default as DataRequest } from './dataRequest/DataRequest';
import { default as Encryption } from './encryption/Encryption';
import { default as Storage } from './storage/Storage';
export default class ModuleManager {
    appManager?: AppManager;
    notification?: Notification;
    auth?: Auth;
    dataRequest?: DataRequest;
    encryption?: Encryption;
    storage?: Storage;
}
//# sourceMappingURL=ModuleManager.d.ts.map