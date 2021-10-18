import { App } from "vue";
import { Options } from "./api-loader/types";
import { initApiLoader } from "./api-loader";
import * as components from "./components";

export default {
  install: (app: App, options: Options): void => {
    initApiLoader(options);
    Object.keys(components).forEach((key: string) => {
      const component = components[key as keyof typeof components];
      app.component(component.name, component);
    });
  }
};
