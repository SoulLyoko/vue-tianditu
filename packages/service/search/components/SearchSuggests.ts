import { h, defineComponent } from "vue-demi";
import { useMethods, useState } from "../use";

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
          ? state.suggests.map((item: any) => {
              return h(
                "div",
                {
                  class: "suggests-item",
                  onClick: () => onSearch(1, item.name)
                },
                [
                  h(
                    "span",
                    {
                      class: "suggests-name"
                    },
                    item.name
                  ),
                  h(
                    "span",
                    {
                      class: "suggests-address"
                    },
                    item.address
                  )
                ]
              );
            })
          : []
      );
  }
});
