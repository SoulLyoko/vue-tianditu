import type { App, Plugin } from "vue-demi";
import type { LoadConfig } from "./types";

import { useApiLoader } from "./composables";
import components from "./components";

export default {
  install(app: App, config: LoadConfig) {
    useApiLoader(config);
    Object.values(components).forEach(component => {
      app.component(component.name, component);
    });
  }
} as Plugin;
