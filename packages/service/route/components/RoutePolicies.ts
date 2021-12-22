import { defineComponent } from "vue-demi";
import { h } from "../../../utils";
import { useState } from "../use";
import "../styles/route-policies.scss";

export const RoutePolicies = defineComponent({
  setup() {
    const state = useState();
    const drivingPolicies = { 0: "最少时间", 1: "最短距离", 2: "避开高速" };
    const transitPolicies = { 1: "最少时间", 2: "最少换乘", 4: "最少步行", 8: "不乘地铁" };

    return () =>
      h(
        "div",
        {
          class: "route-policies"
        },
        [
          ...(state.routeType === 0
            ? Object.entries(drivingPolicies).map(([key, value]) =>
                h(
                  "div",
                  {
                    class: "route-policies-item" + (state.drivingPolicy == Number(key) ? " active" : ""),
                    on: {
                      click: () => (state.drivingPolicy = Number(key))
                    }
                  },
                  value
                )
              )
            : []),
          ...(state.routeType === 1
            ? Object.entries(transitPolicies).map(([key, value]) =>
                h(
                  "div",
                  {
                    class: "route-policies-item" + (state.transitPolicy == Number(key) ? " active" : ""),
                    on: {
                      click: () => (state.transitPolicy = Number(key))
                    }
                  },
                  value
                )
              )
            : [])
        ]
      );
  }
});
