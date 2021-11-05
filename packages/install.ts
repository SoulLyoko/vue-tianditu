import { App } from "vue-demi";
import { useApiLoader, LoadConfig } from "./use";
import * as components from "./components";

export default {
  install: (app: App, config: LoadConfig): void => {
    useApiLoader(config);
    Object.values(components).forEach(component => {
      app.component(component.name, component);
    });
  }
};
