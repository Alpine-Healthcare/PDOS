import Module from "../Module";
export default class DataRequest extends Module {
    config;
    dependencyInjection;
    HealthKit;
    reactNativeHealthKit;
    MetricMap = {};
    constructor(core, config, dependencyInjection) {
        super(core);
        this.config = config;
        this.dependencyInjection = dependencyInjection;
        this.reactNativeHealthKit = dependencyInjection.reactNativeHealthKit;
        this.HealthKit = this.reactNativeHealthKit.default;
        this.MetricMap = {
            "body_mass": this.reactNativeHealthKit.HKQuantityTypeIdentifier.bodyMass,
            "step_count": this.reactNativeHealthKit.HKQuantityTypeIdentifier.stepCount,
            "blood_glucose": this.reactNativeHealthKit.HKQuantityTypeIdentifier.bloodGlucose,
        };
    }
    async start() {
        const isAvailable = await this.reactNativeHealthKit.default.isHealthDataAvailable();
        if (!isAvailable) {
            console.error("Healthkit is not available on this device");
        }
    }
    async checkAccess(metrics) {
        if (metrics.length === 0) {
            return;
        }
        const response = await this.HealthKit.requestAuthorization(metrics.map(metric => this.MetricMap[metric]));
    }
    async getTodaysValue(metric) {
        const today = new Date();
        const startOfDay = new Date(today);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(today);
        endOfDay.setHours(23, 59, 59, 999);
        const response = await this.HealthKit.queryQuantitySamples(this.MetricMap[metric], {
            from: startOfDay,
            to: endOfDay
        });
        if (response.length > 0) {
            const quantity = response[0].quantity;
            return quantity;
        }
        return 0;
    }
}
//# sourceMappingURL=DataRequest.js.map