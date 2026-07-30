import type { App } from "vue";
import { useApiLoader, type LoadConfig } from "@vue-tianditu/core";
import * as components from "./components";

export default {
  install: (app: App, config?: LoadConfig): void => {
    if (typeof document !== "undefined") void useApiLoader(config);
    Object.entries(components).forEach(([exportName, component]) => {
      app.component(component.name ?? exportName, component);
    });
  },
};
