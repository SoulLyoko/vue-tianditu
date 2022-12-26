import { nextTick } from "vue-demi";
import { mount } from "@vue/test-utils";
import { TdtMap, TdtTilelayerTdt } from "vue-tianditu";

import { TOKEN } from "~/constants";

describe("TdtTilelayerTdt", () => {
  it("mount", async () => {
    const tileUrl =
      "http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=" +
      TOKEN;
    const wrapper = mount(() => (
      <TdtMap>
        <TdtTilelayerTdt url={tileUrl} />
      </TdtMap>
    ));
    await nextTick();
    await nextTick();
    expect(wrapper.findAll(".tdt-tile").some(e => e.attributes().src.includes("/img_w/wmts"))).toBeTruthy();
  });
});
