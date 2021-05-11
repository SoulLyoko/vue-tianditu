import { localVue } from "../util";
import { mount } from "@vue/test-utils";
import Map from "@/components/map.vue";

describe("map.vue", () => {
  it("renders map", async () => {
    const wrapper = mount(Map, { localVue });
    console.log(wrapper.html());
  });
});
