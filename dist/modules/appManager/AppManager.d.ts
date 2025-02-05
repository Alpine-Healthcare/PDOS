import { MobileLifecycleDependencies } from './platforms/Mobile';
import { default as Module } from '../Module';
import { Core } from '../..';
import { PlatformState } from '../../constants/Platform';
import { default as Lifecycle } from './Lifecycle';
interface Config {
    platforms: PlatformState[];
}
type DependencyInjection = MobileLifecycleDependencies;
export default class AppManager extends Module {
    private config;
    private dependencyInjection;
    lifecycle: Lifecycle | undefined;
    constructor(core: Core, config: Config, dependencyInjection: DependencyInjection);
    protected postStart(): Promise<void>;
    protected restart(): Promise<void>;
}
export {};
//# sourceMappingURL=AppManager.d.ts.map