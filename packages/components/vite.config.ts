import Vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    entry: "index.ts",
    plugins: [Vue()],
    dts: { vue: true },
  },
});
