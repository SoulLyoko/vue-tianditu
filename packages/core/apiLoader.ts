export type PluginName = keyof typeof PLUGINS_URL;

export interface LoadConfig {
  apiUrl?: string;
  v?: string;
  tk?: string;
  plugins?: readonly PluginName[];
  pluginUrls?: Partial<Record<PluginName, readonly string[]>>;
}

export const DEFAULT_CONFIG = {
  apiUrl: "https://api.tianditu.gov.cn/api",
  v: "4.0",
  tk: "",
  plugins: [] as PluginName[],
} as const;

export const PLUGINS_URL = {
  D3: [
    "https://cdn.bootcss.com/d3/3.5.17/d3.min.js",
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/D3SvgOverlay.min.js",
  ],
  CarTrack: [
    "https://cdn.bootcss.com/d3/3.5.17/d3.min.js",
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/D3SvgOverlay.min.js",
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/CarTrack.min.js",
  ],
  HeatmapOverlay: [
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/HeatmapOverlay.min.js",
  ],
  BufferTool: [
    "https://cdn.bootcss.com/Turf.js/3.0.14/turf.js",
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/BufferTool.min.js",
  ],
  ImageOverLayer: [
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/ImageOverlay.min.js",
  ],
} as const;

let apiPromise: Promise<void> | undefined;
const loadedScripts = new Map<string, Promise<void>>();

/** Load the Tianditu API and selected optional plugins once per browser process. */
export function useApiLoader(config: LoadConfig = {}): Promise<void> {
  const plugins = config.plugins ?? DEFAULT_CONFIG.plugins;
  const pluginUrls = plugins.flatMap((name) => config.pluginUrls?.[name] ?? PLUGINS_URL[name]);

  const loadPlugins = () => loadScripts(pluginUrls);

  if (typeof T !== "undefined") return loadPlugins();
  if (!apiPromise) {
    apiPromise = Promise.resolve()
      .then(() => loadScript(buildApiUrl(config)))
      .then(() => undefined)
      .catch((error) => {
        apiPromise = undefined;
        throw error;
      });
  }

  return apiPromise.then(loadPlugins);
}

function buildApiUrl(config: LoadConfig): string {
  if (typeof document === "undefined") {
    throw new Error("useApiLoader requires a browser document");
  }

  const url = new URL(config.apiUrl ?? DEFAULT_CONFIG.apiUrl, document.baseURI);
  if (config.v !== undefined) url.searchParams.set("v", config.v);
  else if (!url.searchParams.has("v")) url.searchParams.set("v", DEFAULT_CONFIG.v);
  if (config.tk !== undefined) url.searchParams.set("tk", config.tk);
  return url.toString();
}

function loadScripts(urls: readonly string[]): Promise<void> {
  return urls.reduce((promise, url) => promise.then(() => loadScript(url)), Promise.resolve());
}

function loadScript(url: string): Promise<void> {
  const existing = loadedScripts.get(url);
  if (existing) return existing;

  const promise = new Promise<void>((resolve, reject) => {
    if (typeof document === "undefined") {
      reject(new Error(`Cannot load Tianditu script outside a browser: ${url}`));
      return;
    }

    const script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load Tianditu script: ${url}`));
    (document.head ?? document.body).appendChild(script);
  });

  loadedScripts.set(url, promise);
  promise.catch(() => loadedScripts.delete(url));
  return promise;
}
