import { default as Module } from '../Module';
import { Core } from '../..';
interface Config {
}
type DependencyInjection = {
    reactNativeHealthKit: any;
};
export default class DataRequest extends Module {
    private config;
    private dependencyInjection;
    private HealthKit;
    private reactNativeHealthKit;
    private MetricMap;
    constructor(core: Core, config: Config, dependencyInjection: DependencyInjection);
    protected start(): Promise<void>;
    checkAccess(metrics: any[]): Promise<void>;
    getTodaysValue(metric: string): Promise<number | undefined>;
    private isCumulativeMetric;
}
export {};
//# sourceMappingURL=DataRequest.d.ts.map