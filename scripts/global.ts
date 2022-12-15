import fs from "fs-extra";

import pkg from "../package.json";

const componetsFile = fs.readFileSync("packages/components/index.ts", "utf-8");
const matchExport = componetsFile.match(/export default {\s*(.*\s*)*}/)?.[0];
const matchComponents = matchExport?.replace(/(export default {)|}|\s/g, "");
const components = matchComponents?.split(",");

const useComponentsTemplate = (name: string) => `${name}: typeof import("${pkg.name}")["${name}"];`;
const useGlobalTemplate = (componentsTemplate: string) => `declare module "vue" {
  export interface GlobalComponents {
    ${componentsTemplate}
  }
}

export {};
`;
const componentsTemplate = components?.map(useComponentsTemplate).join("\n    ");
const globalD = componentsTemplate ? useGlobalTemplate(componentsTemplate) : "";

globalD && fs.writeFileSync("global.d.ts", globalD);
globalD && fs.writeFileSync("src/global.d.ts", globalD);
