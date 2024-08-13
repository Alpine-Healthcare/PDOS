import Module from "../Module";
/*
const MetricMap = {
  "bodyMass": HKQuantityTypeIdentifier.bodyMass,
  "stepCount": HKQuantityTypeIdentifier.stepCount,
  "bloodGlucose": HKQuantityTypeIdentifier.bloodGlucose,
}*/
export default class DataRequest extends Module {
    config;
    constructor(core, config) {
        super(core);
        this.config = config;
    }
    async start() {
        /*
        const isAvailable = await HealthKit.isHealthDataAvailable();
    
        if (!isAvailable) {
          console.error("Healthkit is not available on this device");
        }*/
    }
    async checkAccess(metrics) {
        if (metrics.length === 0) {
            return;
        }
        /*
        const response = await HealthKit.requestAuthorization(metrics.map(metric => MetricMap[metric]));
        */
    }
    async getTodaysValue(metric) {
        /*
          const today = new Date();
          const startOfDay = new Date(today);
          startOfDay.setHours(0, 0, 0, 0);
          const endOfDay = new Date(today);
          endOfDay.setHours(23, 59, 59, 999);
        const response = await HealthKit.queryQuantitySamples(MetricMap["stepCount"], {
          from: startOfDay,
          to: endOfDay
        })
    
        if (response.length > 0) {
          const quantity = response[0].quantity
          console.log("quantity: ", quantity)
          return quantity
        }
        */
        return 0;
    }
}
//# sourceMappingURL=DataRequest.js.map