import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    entry: "index.ts",
    copy: "style.css",
  },
});
