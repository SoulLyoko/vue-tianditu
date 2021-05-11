import { createLocalVue } from "@vue/test-utils";

export const localVue = createLocalVue();

import { initApiLoader } from "#/index.js";
initApiLoader({
  v: "4.0",
  tk: "7f013d0186775b063d6a046977bbefc6",
  plugins: ["CarTrack"]
});

// import VueTianditu from "#/index.js";
// localVue.use(VueTianditu, {
//   v: "4.0",
//   tk: "7f013d0186775b063d6a046977bbefc6",
//   plugins: ["CarTrack"]
// });
