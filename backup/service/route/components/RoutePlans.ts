import { defineComponent } from "vue-demi";

import { h } from "../../../utils";
import { useState } from "../use";
import "../styles/route-plans.scss";

export const RoutePlans = defineComponent({
  setup() {
    const state = useState();

    return () =>
      h(
        "div",
        {
          class: "route-plans"
        },
        [
          // 驾车方案
          state.drivingPlans.length
            ? h(
                "div",
                null,
                state.drivingPlans.map((plan, planIndex) =>
                  h(
                    "details",
                    {
                      on: {
                        click: () => {
                          state.drivingPlanIndex = planIndex;
                        }
                      }
                    },
                    [
                      h("summary", null, `方案${planIndex + 1}: ${plan.duration} 秒 | ${plan.distance} 公里`),
                      ...plan.routes.item.map((item, itemIndex) => {
                        return h("div", null, `${itemIndex + 1}.${item.strguide}`);
                      })
                    ]
                  )
                )
              )
            : "",
          // 公交方案
          state.drivingPlans.length
            ? h(
                "div",
                null,
                state.transitPlans.map((plan, planIndex) =>
                  h(
                    "details",
                    {
                      on: {
                        click: () => {
                          state.transitPlanIndex = planIndex;
                        }
                      },
                      style: { backgroundColor: "#fff" }
                    },
                    [
                      h("summary", null, `方案${planIndex + 1}: ${plan.lineName}`),
                      plan.segments
                        .map((segment, segmentIndex) => {
                          const segmentLine = segment.segmentLine[0];

                          //经过的公交或地铁的站数
                          const stationCount = segmentLine.segmentStationCount
                            ? "，经过" + segmentLine.segmentStationCount + "站"
                            : "";

                          switch (segment.segmentType) {
                            case 1:
                              return "步行约" + segmentLine.segmentDistance + "米，到达" + segment.stationEnd.name;
                            case 2:
                            case 3:
                              return "乘坐" + segmentLine.direction + stationCount + "，到达" + segment.stationEnd.name;
                            case 4:
                              return "站内换乘";
                            default:
                              return "";
                          }
                        })
                        .join("，") + "终点"
                    ]
                  )
                )
              )
            : ""
        ]
      );
  }
});
