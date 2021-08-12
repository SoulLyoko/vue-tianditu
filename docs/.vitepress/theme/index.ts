import { App } from "vue";
// import DefaultTheme from "vitepress/theme";
import defaultTheme from "vitepress/dist/client/theme-default";
import VueTianditu from "../../../packages";
import { useComponents } from "../components";
import "./index.css";

export default {
  ...defaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(VueTianditu, {
      v: "4.0",
      tk: "7f013d0186775b063d6a046977bbefc6"
    });
    useComponents(app);
  }
};
