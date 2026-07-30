import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    entry: ["index.ts"],
    format: ["esm"],
    dts: true,
    sourcemap: true,
    platform: "neutral",
  },
});
