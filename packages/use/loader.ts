export const DEFAULT_CONFIG = {
  v: "4.0",
  tk: "",
  plugins: []
};

export const PLUGINS_URL = {
  D3: [
    "https://cdn.bootcss.com/d3/3.5.17/d3.js",
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/D3SvgOverlay.js"
  ],
  CarTrack: [
    "https://cdn.bootcss.com/d3/3.5.17/d3.js",
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/D3SvgOverlay.js",
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/CarTrack.js"
  ],
  HeatmapOverlay: ["http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/HeatmapOverlay.js"],
  BufferTool: [
    "https://cdn.bootcss.com/Turf.js/3.0.14/turf.js",
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/BufferTool.js"
  ],
  ImageOverLayer: ["http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/ImageOverlay.js"]
};

export interface LoadConfig {
  v?: string;
  tk?: string;
  plugins?: (keyof typeof PLUGINS_URL)[];
}

let isLoading = false;
export async function useApiLoader(config: LoadConfig = {}) {
  if (isLoading) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(useApiLoader(config));
      });
    });
  } else if (window.T) {
    return;
  } else {
    isLoading = true;
    const { v, tk, plugins } = { ...DEFAULT_CONFIG, ...config };
    await loadScript(`https://api.tianditu.gov.cn/api?v=${v}&tk=${tk}`);
    await Promise.all(
      plugins
        .map((name: keyof typeof PLUGINS_URL) => PLUGINS_URL[name])
        .flat()
        .map(url => loadScript(url))
    );
    isLoading = false;
  }
}

function loadScript(url: string) {
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
