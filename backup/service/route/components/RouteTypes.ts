import { defineComponent } from "vue-demi";

import { h } from "../../../utils";
import { useState } from "../use";
import "../styles/route-types.scss";

export const RouteTypes = defineComponent({
  setup() {
    const state = useState();
    const routeTypes = { 0: "驾车", 1: "公交", 2: "步行" };

    return () =>
      h(
        "div",
        {
          class: "route-types"
        },
        [
          ...Object.entries(routeTypes).map(([key, value]) =>
            h(
              "div",
              {
                class: "route-types-item" + (state.routeType == Number(key) ? " active" : ""),
                on: {
                  click: () => (state.routeType = Number(key))
                }
              },
              value
            )
          )
        ]
      );
  }
});
