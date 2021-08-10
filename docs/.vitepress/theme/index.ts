import { App } from "vue";
// import DefaultTheme from "vitepress/theme";
import defaultTheme from "vitepress/dist/client/theme-default";

export default {
  ...defaultTheme,
  enhanceApp({ app }: { app: App }) {}
};
