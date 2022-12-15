import path from "path";

import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import fs from "fs-extra";

import pkg from "./package.json";
import { getVueVersion } from "./scripts/switch";

export const alias = {
  "@": path.resolve(__dirname, "src"),
  "~": path.resolve(__dirname, "packages"),
  [pkg.name]: path.resolve(__dirname, "packages")
};
export async function getVuePlugin() {
  const vuePluginMap = {
    2: async () => (await import("vite-plugin-vue2")).createVuePlugin(),
    2.7: async () => (await import("@vitejs/plugin-vue2")).default(),
    3: async () => (await import("@vitejs/plugin-vue")).default()
  };
  const plugin = await vuePluginMap[getVueVersion()]();
  return plugin;
}

const globals = { vue: "Vue", "vue-demi": "VueDemi" };
const external = Object.keys(globals);

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  if (mode === "production") {
    fs.removeSync("dist");
    fs.removeSync("es");
    fs.removeSync("lib");
  }
  const vuePlugin = await getVuePlugin();
  return {
    plugins: [vuePlugin, vueJsx()],
    resolve: {
      alias
    },
    optimizeDeps: {
      exclude: external
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "packages/index.ts"),
        name: pkg.upperName
      },
      rollupOptions: {
        external,
        output: [
          {
            globals,
            name: pkg.upperName,
            entryFileNames: "[name].js",
            format: "umd",
            dir: "dist"
          },
          {
            preserveModules: true,
            preserveModulesRoot: path.resolve(__dirname, "es"),
            entryFileNames: "[name].js",
            format: "es",
            dir: "es"
          },
          {
            exports: "named",
            preserveModules: true,
            preserveModulesRoot: path.resolve(__dirname, "lib"),
            entryFileNames: "[name].js",
            format: "cjs",
            dir: "lib"
          }
        ]
      }
    }
  };
});
