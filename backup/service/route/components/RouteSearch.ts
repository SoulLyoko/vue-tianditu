import { defineComponent } from "vue-demi";

import { SearchBox, SearchPois } from "../../search/components";
import { h } from "../../../utils";
import { useState, useMethods } from "../use";

export const RouteSearch = defineComponent({
  setup() {
    const state = useState();
    const { onSearch, onPoiClick, onPageChange } = useMethods(state);

    return () =>
      h("div", { class: "route-search" }, [
        // 起点搜索框
        h(SearchBox, {
          props: {
            value: state.startKeyword,
            modelValue: state.startKeyword,
            placeholder: "请输入起点"
          },
          on: {
            focus: () => (state.poiType = "start"),
            input: (val: string) => onSearch(1, val, "start"),
            "update:modelValue": (val: string) => onSearch(1, val, "start")
          }
        }),
        // 终点搜索框
        h(SearchBox, {
          props: {
            value: state.endKeyword,
            modelValue: state.endKeyword,
            placeholder: "请输入终点"
          },
          on: {
            focus: () => (state.poiType = "end"),
            input: (val: string) => onSearch(1, val, "end"),
            "update:modelValue": (val: string) => onSearch(1, val, "end")
          }
        }),
        // 搜索点
        h(SearchPois, {
          props: {
            pois: state.pois || [],
            page: {
              current: state.current,
              size: 10,
              total: state.total
            }
          },
          on: {
            "poi-click": onPoiClick,
            "update:page": onPageChange
          }
        })
      ]);
  }
});
