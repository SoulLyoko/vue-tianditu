import DefaultTheme from "vitepress/theme";
import VueTianditu from "vue-tianditu";
import demoComponents from "../components";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueTianditu, {
      v: "4.0",
      tk: "7f013d0186775b063d6a046977bbefc6",
      plugins: ["CarTrack"],
    });
    app.use(demoComponents);
  },
};
