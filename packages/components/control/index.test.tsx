import { nextTick } from "vue-demi";
import { mount } from "@vue/test-utils";
import { TdtMap, TdtControl } from "vue-tianditu";

describe("TdtControl", () => {
  it("mount", async () => {
    const wrapper = mount(() => (
      <TdtMap>
        <TdtControl position="topright">
          <div>自定义控件</div>
        </TdtControl>
      </TdtMap>
    ));
    await nextTick();
    await nextTick();
    expect(wrapper.find(".tdt-top.tdt-right").html()).toContain("自定义控件");
  });
});
