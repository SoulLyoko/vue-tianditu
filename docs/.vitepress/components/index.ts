// @ts-nocheck
import { App } from "vue";
import demoMap from "./demo-map/index.vue";

const components = [demoMap];

export function useComponents(app: App) {
  components.forEach(component => {
    app.component(component.name, component);
  });
}
