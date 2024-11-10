import Module from "../Module";
import ExpoNotification from "./platforms/Expo";
import WebNotification from "./platforms/Web";
import { PlatformState } from "../../constants/Platform";
export default class Notification extends Module {
    config;
    dependencyInjection;
    notify;
    constructor(core, config, dependencyInjection) {
        super(core);
        this.config = config;
        this.dependencyInjection = dependencyInjection;
    }
    async start() {
        switch (PlatformState[this.config.platform]) {
            case PlatformState.Web:
                this.notify = new WebNotification(this.core, this.config);
                break;
            case PlatformState.Mobile:
                this.notify = new ExpoNotification(this.core, this.config, this.dependencyInjection);
                break;
            default:
                console.error("Not supported platform passed to Notification Module!");
                break;
        }
        if (!this.notify)
            return;
        if (!(await this.notify.checkPermission())) {
            await this.notify.requestPermission();
        }
    }
    async addListener(listener) {
        this.notify?.addEventListener(listener);
    }
}
//# sourceMappingURL=Notification.js.map