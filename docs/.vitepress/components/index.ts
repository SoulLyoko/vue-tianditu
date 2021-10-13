import { App } from "vue";
import demoMap from "./demo-map/index.vue";
import demoControl from "./demo-control/index.vue";

const components = [demoMap, demoControl];

export function useComponents(app: App) {
  components.forEach(component => {
    app.component(component.name, component);
  });
}
