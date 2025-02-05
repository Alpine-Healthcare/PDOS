import MobileLifecycle from "./platforms/Mobile";
import WebLifecycle from "./platforms/Web";
import Module from "../Module";
import { PlatformState } from "../../constants/Platform";
export default class AppManager extends Module {
    config;
    dependencyInjection;
    lifecycle;
    constructor(core, config, dependencyInjection) {
        super(core);
        this.config = config;
        this.dependencyInjection = dependencyInjection;
        if (this.core.constants.platform.state === PlatformState.Mobile) {
            this.lifecycle = new MobileLifecycle(dependencyInjection);
        }
        else if (this.core.constants.platform.state === PlatformState.Web) {
            this.lifecycle = new WebLifecycle();
        }
    }
    async postStart() {
        this.lifecycle.start();
    }
    async restart() { }
}
//# sourceMappingURL=AppManager.js.map