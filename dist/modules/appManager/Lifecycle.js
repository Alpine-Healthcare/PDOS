export var LifecycleState;
(function (LifecycleState) {
    LifecycleState[LifecycleState["active"] = 0] = "active";
    LifecycleState[LifecycleState["inactive"] = 1] = "inactive";
})(LifecycleState || (LifecycleState = {}));
export default class Lifecycle {
    state = LifecycleState.inactive;
    initCallbacks = new Array();
    foregroundCallbacks = new Array();
    backgroundCallbacks = new Array();
    addInitCallback = (cb) => this.initCallbacks.push(cb);
    addForegroundCallback = (cb) => this.foregroundCallbacks.push(cb);
    addBackgroundCallback = (cb) => this.backgroundCallbacks.push(cb);
    start() { }
    ;
}
//# sourceMappingURL=Lifecycle.js.map