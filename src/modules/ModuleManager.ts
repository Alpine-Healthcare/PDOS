import AppManager from "./appManager/AppManager";
import Notification from "./notification/Notification";
import Auth from "./auth/Auth";
import DataRequest from "./dataRequest/DataRequest";

export default class ModuleManager {
    public appManager?: AppManager;
    public notification?: Notification;
    public auth?: Auth;
    public dataRequest?: DataRequest;
}