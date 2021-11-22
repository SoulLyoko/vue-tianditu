import { defineComponent } from "vue-demi";
import { useMethods, useState } from "../use";
import { SearchPage } from "./SearchPage";
import { EVENTS } from "../use";
import { h } from "../../../utils";

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
          style: { display: state.pois ? "block" : "none" }
        },
        [
          // 点信息
          ...(state.pois
            ? state.pois.map(item => {
                return h(
                  "div",
                  {
                    class: "search-pois-item",
                    on: {
                      click: () => onPoiClick(item, emit)
                    }
                  },
                  [
                    h("strong", { class: "search-pois-item__name" }, item.name),
                    h("br"),
                    h("span", { class: "search-pois-item__address" }, item.address)
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
