import NotificationClass from "../AbstractNotification";
export default class ExpoNotification extends NotificationClass {
    core;
    config;
    hasPermission = false;
    listeners = [];
    Notifications;
    Permissions;
    Platform;
    constructor(core, config, expoDependencies) {
        super();
        this.core = core;
        this.config = config;
        this.Notifications = expoDependencies.Notifications;
        this.Permissions = expoDependencies.Permissions;
        this.Platform = expoDependencies.Platform;
    }
    async checkPermission() {
        const { status } = await this.Permissions.getAsync(this.Permissions.NOTIFICATIONS);
        if (status === "granted") {
            this.hasPermission = true;
            this.createChannels();
            return true;
        }
        else {
            this.hasPermission = false;
            return false;
        }
    }
    async createChannels() {
        if (this.Platform.OS === 'android') {
            this.Notifications.createChannelAndroidAsync('default', {
                name: 'default',
                sound: true,
                priority: 'max',
                vibrate: [0, 250, 250, 250],
            });
        }
    }
    async requestPermission() {
        const { status } = await this.Permissions.askAsync(this.Permissions.NOTIFICATIONS);
        if (status === "granted") {
            this.hasPermission = true;
            this.createChannels();
            this.updateToken();
            return;
        }
        else {
        }
    }
    async getToken() {
        if (this.hasPermission) {
            const token = await this.Notifications.getExpoPushTokenAsync();
            return token;
        }
    }
    async updateToken() {
    }
    addEventListener(cb) {
        //TODO : Handle unsubscription of listern callback
        this.Notifications.addEventListener(cb);
    }
    newNotification() {
    }
}
//# sourceMappingURL=Expo.js.map