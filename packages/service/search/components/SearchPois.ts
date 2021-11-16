import { h, defineComponent } from "vue-demi";
import { useMethods, useState } from "../use";
import { SearchPage } from "./SearchPage";
import { EVENTS } from "../use";

export const SearchPois = defineComponent({
  emits: EVENTS,
  setup(props, { emit }) {
    const state = useState();
    const { onPoiClick } = useMethods(state);

    return () =>
      h(
        "div",
        {
          class: "tdt-search-pois",
          style: state.pois ? "" : "display:none"
        },
        [
          // 点信息
          ...(state.pois
            ? state.pois.map(item => {
                return h(
                  "div",
                  {
                    class: "pois-item",
                    onClick: () => onPoiClick(item, emit)
                  },
                  [
                    h("strong", { class: "pois-name" }, item.name),
                    h("br", null),
                    h("span", { class: "pois-address" }, item.address)
                  ]
                );
              })
            : []),
          // 分页
          h(SearchPage)
        ]
      );
  }
});
