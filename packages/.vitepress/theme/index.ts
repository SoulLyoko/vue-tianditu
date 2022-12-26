import type { Theme } from "vitepress";

import defaultTheme from "vitepress/theme";
import "./index.scss";
import components from "../components";
import VueTianditu from "../..";
// import "../../styles/index.scss";
import { TOKEN } from "~/constants";

export default {
  ...defaultTheme,
  enhanceApp({ app }) {
    app.use(components);
    app.use(VueTianditu, {
      v: "4.0",
      tk: TOKEN,
      plugins: ["CarTrack"]
    });
  }
} as Theme;
