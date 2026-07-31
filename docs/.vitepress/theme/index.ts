import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import VueTianditu from "vue-tianditu";
import demoComponents from "../components";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueTianditu, {
      v: "4.0",
      tk: import.meta.env.VITE_TDT_TK,
      plugins: ["CarTrack"],
    });
    app.use(demoComponents);
  },
} satisfies Theme;
