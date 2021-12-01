import { App } from "vue-demi";

const components = import.meta.globEager("./**/*.vue");

export default {
  install: (app: App) => {
    Object.values(components).forEach(component => {
      app.component(component.default.name, component.default);
    });
  }
};
