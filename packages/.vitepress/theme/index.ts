import type { Theme } from "vitepress";

import defaultTheme from "vitepress/theme";
import "./index.scss";
import components from "../components";
import VueTianditu from "../..";
// import "../../styles/index.scss";

export default {
  ...defaultTheme,
  enhanceApp({ app }) {
    app.use(components);
    app.use(VueTianditu, {
      v: "4.0",
      tk: "7f013d0186775b063d6a046977bbefc6",
      plugins: ["CarTrack"]
    });
  }
} as Theme;
