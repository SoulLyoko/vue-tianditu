import { Options } from "./types";
import { DEFAULT_OPTIONS, PLUGINS_URL } from "./const";

export let apiLoaderInstance: ApiLoader;

export function initApiLoader(options: Options): void {
  apiLoaderInstance = new ApiLoader(options);
  apiLoaderInstance.load();
}

export class ApiLoader {
  options: Options;
  apiLoaderPromise: Promise<void> | undefined;

  constructor(options: Options) {
    this.options = {
      ...DEFAULT_OPTIONS,
      ...options
    };
  }

  load(): Promise<void> {
    if (this.apiLoaderPromise) {
      return this.apiLoaderPromise;
    }
    this.apiLoaderPromise = new Promise<void>((resolve, reject) => {
      const url = `https://api.tianditu.gov.cn/api?v=${this.options.v}&tk=${this.options.tk}`;
      this.loadOneScript(url).then(() => {
        if (this.options.plugins && this.options.plugins.length) {
          this.loadPlugins().then(resolve).catch(reject);
        } else {
          resolve();
        }
      });
    });
    return this.apiLoaderPromise;
  }

  loadPlugins(): Promise<void> {
    return new Promise<void>(resolve => {
      const promises: Promise<void>[] = [];
      this.options.plugins?.forEach(plugin => {
        PLUGINS_URL[plugin] &&
          PLUGINS_URL[plugin].forEach(url => {
            promises.push(this.loadOneScript(url));
          });
      });
      Promise.all(promises).finally(resolve);
    });
  }

  loadOneScript(url: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        resolve();
      };
      script.onerror = e => reject(e);
    });
  }
}
