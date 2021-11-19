import { App } from "vue-demi";

const components = import.meta.globEager("./**/*.vue");

export default {
  install: (app: App) => {
    Object.keys(components).forEach((key: string) => {
      const component = components[key].default;
      app.component(component.name, component);
    });
  }
};
