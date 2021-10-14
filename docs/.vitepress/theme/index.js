// import { App } from "vue";
import DefaultTheme from "vitepress/theme";
// import defaultTheme from "vitepress/dist/client/theme-default";
import VueTianditu from "../../../packages";
import components from "../components";
import "./index.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueTianditu, {
      v: "4.0",
      tk: "7f013d0186775b063d6a046977bbefc6"
    });
    app.use(components);
  }
};
