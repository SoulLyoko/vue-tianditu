import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";

import { alias, getVuePlugin } from "./vite.config";

export default defineConfig(async () => {
  const vuePlugin = await getVuePlugin();
  return {
    plugins: [vuePlugin, vueJsx()],
    resolve: {
      alias
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./vitest.setup.ts"]
    }
  };
});
