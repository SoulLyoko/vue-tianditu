import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname, "packages")
    }
  },
  optimizeDeps: {
    exclude: ["vue-demi"]
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "packages/index.ts"),
      name: "VueTianditu",
      fileName: "index"
    },
    outDir: "lib",
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ["vue", "vue-demi"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          "vue-demi": "VueDemi"
        }
      }
    }
  }
});
