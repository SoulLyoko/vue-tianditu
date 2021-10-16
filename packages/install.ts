import { App, install } from "vue-demi";
import { Options } from "./api-loader/types";
import { initApiLoader } from "./api-loader";
import * as components from "./components";

export default {
  install: (app: App, options: Options): void => {
    install(app);
    initApiLoader(options);
    Object.keys(components).forEach((key: string) => {
      const component = components[key as keyof typeof components];
      app.component(component.name, component);
    });
  }
};
