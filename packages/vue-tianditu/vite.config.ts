import Vue from "unplugin-vue/rolldown";
import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    entry: ["index.ts"],
    format: ["esm"],
    dts: { vue: true },
    sourcemap: true,
    platform: "neutral",
    plugins: [Vue({ isProduction: true })],
    deps: {
      neverBundle: ["@vue-tianditu/types", "@vue-tianditu/core", "@vue-tianditu/components"],
    },
  },
});
