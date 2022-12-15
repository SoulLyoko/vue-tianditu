import type { LoadConfig } from "~/types";

import { DEFAULT_CONFIG, PLUGINS_URL } from "~/constants";

let isLoading = false;
export async function useApiLoader(config: LoadConfig = {}) {
  if (isLoading) {
    return new Promise(resolve => {
      setTimeout(() => resolve(useApiLoader(config)));
    });
  } else if (globalThis.T) {
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
  return new Promise<void>(resolve => {
    const script = globalThis.document?.createElement("script");
    if (!script) resolve();
    script.src = url;
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    globalThis.document?.body.appendChild(script);
  });
}
