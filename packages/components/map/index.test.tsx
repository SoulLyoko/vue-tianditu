import { nextTick } from "vue-demi";
import { mount } from "@vue/test-utils";

import { TdtMap } from ".";

describe("TdtMap", () => {
  it("mount", async () => {
    const wrapper = mount(() => <TdtMap></TdtMap>);
    await nextTick();
    expect(wrapper.html()).and.contain("tdt-container").contain("tdt-pane").contain("tdt-control-container");
  });

  it("controls", async () => {
    const controls = ["Zoom", "MapType", "Scale", "Copyright", "OverviewMap"] as VT.ControlName[];
    const wrapper = mount(() => <TdtMap controls={controls}></TdtMap>);
    await nextTick();
    await nextTick();
    expect(wrapper.html())
      .and.contain("tdt-control-zoom")
      .contain("tdt-iconLayers")
      .contain("tdt-control-scale")
      .contain("tdt-control-copyright");
    // .contain("tdt-control-minimap-edge");
  });
});
