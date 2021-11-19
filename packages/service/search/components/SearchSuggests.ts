import { defineComponent } from "vue-demi";
import { useMethods, useState } from "../use";
import { h } from "../../../utils";

export const SearchSuggests = defineComponent({
  setup() {
    const state = useState();
    const { onSearch } = useMethods(state);

    return () =>
      h(
        "div",
        {
          class: "tdt-search-suggests",
          style: state.suggests ? "" : "display:none"
        },
        state.suggests
          ? state.suggests.map(item => {
              return h(
                "div",
                {
                  class: "suggests-item",
                  on: {
                    click: () => onSearch(1, item.name)
                  }
                },
                [
                  h("span", { class: "suggests-name" }, item.name),
                  h("span", { class: "suggests-address" }, item.address)
                ]
              );
            })
          : []
      );
  }
});
