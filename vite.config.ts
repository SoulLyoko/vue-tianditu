import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@vue-tianditu/types": fileURLToPath(new URL("./packages/types/index.ts", import.meta.url)),
      "@vue-tianditu/core": fileURLToPath(new URL("./packages/core/index.ts", import.meta.url)),
      "@vue-tianditu/components": fileURLToPath(
        new URL("./packages/components/index.ts", import.meta.url),
      ),
      "vue-tianditu": fileURLToPath(new URL("./packages/vue-tianditu/index.ts", import.meta.url)),
    },
  },
  staged: {
    "*.{js,ts,vue}": "vp check --fix",
  },
  test: {
    include: ["packages/**/*.test.ts"],
    environment: "jsdom",
  },
});
