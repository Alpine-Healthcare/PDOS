import NotificationClass from "../AbstractNotification";
export var WebDependencies;
(function (WebDependencies) {
    WebDependencies[WebDependencies["window"] = 0] = "window";
})(WebDependencies || (WebDependencies = {}));
export default class WebNotification extends NotificationClass {
    core;
    config;
    hasPermission = false;
    listeners = [];
    constructor(core, config) {
        super();
        this.core = core;
        this.config = config;
    }
    async checkPermission() {
        if (Notification.permission === "granted") {
            this.hasPermission = true;
            return true;
        }
        else {
            return false;
        }
    }
    async requestPermission() {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            this.hasPermission = true;
        }
        else {
            this.hasPermission = false;
        }
    }
    addEventListener(cb) {
    }
    updateToken() {
    }
    newNotification(data) {
        if (this.hasPermission) {
            let n = new Notification(data.title, { body: data.text });
            //TODO : Implement this!!
            n.onclick = () => {
            };
            n.onclose = () => {
            };
        }
    }
}
//# sourceMappingURL=Web.js.map