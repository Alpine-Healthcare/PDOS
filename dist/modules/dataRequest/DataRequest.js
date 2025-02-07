import Module from "../Module";
const convertCamelCaseToSnakeCase = (str) => {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
};
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
        // Load the MetricMap with the keys from the reactNativeHealthKit.HKQuantityTypeIdentifier object
        Object.keys(this.reactNativeHealthKit.HKQuantityTypeIdentifier).forEach(key => {
            const pascalCaseKey = convertCamelCaseToSnakeCase(key);
            this.MetricMap[pascalCaseKey] = this.reactNativeHealthKit.HKQuantityTypeIdentifier[key];
        });
    }
    async start() {
        const isAvailable = await this.reactNativeHealthKit.default.isHealthDataAvailable();
        if (!isAvailable) {
            console.error("Healthkit is not available on this device");
        }
    }
    async checkAccess(metrics) {
        try {
            if (metrics.length === 0) {
                return;
            }
            await this.HealthKit.requestAuthorization(metrics.map(metric => this.MetricMap[metric]));
        }
        catch (e) {
            console.error("Error in getting access to metrics");
        }
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