import Module from "../Module";
import { Core } from "../../Core";

enum Platform {
  WEB = "WEB",
  REACT_NATIVE = "REACT_NATIVE",
}

interface Config {
  platform?: Platform;
}

interface DependencyInjection {
  storageLib?: {
    setItem: (key: string, value: string) => void;
    getItem: (key: string) => void;
    clear: (key: string) => void;
  };
}

export default class Storage extends Module {
  constructor(
    core: Core,
    private config: Config | null,
    private dependencyInjection: DependencyInjection | null,
  ) {
    super(core);
  }

  protected async start() {
    if (this.config?.platform === Platform.REACT_NATIVE) {
      if (!this.dependencyInjection?.storageLib) {
        throw new Error("Missing dependency injection for react-native.");
      }
    }
  }

  async addItem(key: string, value: string) {
    if (this.dependencyInjection?.storageLib) {
      return await this.dependencyInjection.storageLib.setItem(key, value);
    }

    return localStorage.setItem(key, value);
  }

  async clear(key: string) {
    if (this.dependencyInjection?.storageLib) {
      return this.dependencyInjection.storageLib.clear(key);
    }
    return localStorage.clear();
  }

  async getItem(key: string) {
    if (this.dependencyInjection?.storageLib) {
      return this.dependencyInjection.storageLib.getItem(key);
    }
    return await localStorage.getItem(key);
  }
}
