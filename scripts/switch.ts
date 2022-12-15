import { execSync } from "child_process";

import packageJson from "../package.json";

export type VueVersion = "2" | "2.7" | "3";

const version = process.argv[2] as VueVersion;
switchVueVersion(version);

export function switchVueVersion(version: VueVersion) {
  const switchFnMap = { 2: switch2, 2.7: switch2_7, 3: switch3 };
  switchFnMap[version]?.();
}

export function getVueVersion() {
  const version = packageJson.devDependencies.vue;
  if (/^\^2\.7/.test(version)) return "2.7";
  else if (/^\^2/.test(version)) return "2";
  else return "3";
}

export function switch2() {
  if (getVueVersion() === "2") return;
  execSync("yarn add vue@legacy -D");
  execSync("yarn add vue-template-compiler@2.6.14 -D");
  execSync("yarn add @vue/test-utils@1.3.0 -D");
  execSync("vue-demi-switch 2");
}
export function switch2_7() {
  if (getVueVersion() === "2.7") return;
  execSync("yarn add vue@v2-latest -D");
  execSync("yarn add vue-template-compiler@latest -D");
  execSync("yarn add @vue/test-utils@1.3.0 -D");
  execSync("vue-demi-switch 2.7");
}
export function switch3() {
  if (getVueVersion() === "3") return;
  execSync("yarn add vue -D");
  execSync("yarn add @vue/test-utils -D");
  execSync("vue-demi-switch 3");
}
