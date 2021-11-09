import { App } from "vue-demi";
import { useApiLoader, LoadConfig } from "./use";
import * as components from "./components";
console.log("🚀 ~ file: install.ts ~ line 4 ~ components", components);

export default {
  install: (app: App, config: LoadConfig): void => {
    useApiLoader(config);
    Object.values(components).forEach(component => {
      app.component(component.name, component);
    });
  }
};
