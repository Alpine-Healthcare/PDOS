import Lifecycle, { LifecycleState } from "../Lifecycle";
export default class MobileLifecycle extends Lifecycle {
    dependencies;
    constructor(dependencies) {
        super();
        this.dependencies = dependencies;
    }
    start() {
        this.initCallbacks.forEach(cb => cb());
        if (this.dependencies.AppState.currentState === "active") {
            this.foregroundCallbacks.forEach(cb => cb());
        }
        this.dependencies.AppState.addEventListener("change", async (state) => {
            switch (state) {
                case "active":
                    this.foregroundCallbacks.forEach(cb => cb());
                    this.state = LifecycleState.active;
                    break;
                case "inactive":
                    this.backgroundCallbacks.forEach(cb => cb());
                    this.state = LifecycleState.inactive;
                    break;
                default:
                    break;
            }
        });
    }
}
//# sourceMappingURL=Mobile.js.map