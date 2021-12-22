import { defineComponent } from "vue-demi";
import { TdtMarker, TdtPolyline } from "../../../components";
import { h } from "../../../utils";
import { useState } from "../use";

export const RouteMapView = defineComponent({
  setup() {
    const state = useState();

    return () =>
      h("span", null, [
        // 起点
        state.startMarker.length
          ? h(TdtMarker, {
              props: {
                position: state.startMarker,
                icon: {
                  iconUrl: "http://lbs.tianditu.gov.cn/images/bus/start.png",
                  iconSize: [44, 34],
                  iconAnchor: [12, 31]
                }
              }
            })
          : "",
        // 终点
        state.endMarker.length
          ? h(TdtMarker, {
              props: {
                position: state.endMarker,
                icon: {
                  iconUrl: "http://lbs.tianditu.gov.cn/images/bus/end.png",
                  iconSize: [44, 34],
                  iconAnchor: [12, 31]
                }
              }
            })
          : "",
        // 驾车线
        state.drivingLines.map(path =>
          h(TdtPolyline, {
            props: {
              path,
              color: "#2C64A7",
              lineStyle: "solid",
              weight: 5,
              opacity: 1
            }
          })
        ),
        // 步行及换乘线
        state.walkLines.map(path =>
          h(TdtPolyline, {
            props: {
              path,
              color: "#2E9531",
              lineStyle: "dashed",
              weight: 4,
              opacity: 1
            }
          })
        ),
        //公交及地铁线
        state.busLines.map(path =>
          h(TdtPolyline, {
            props: {
              path,
              color: "#2C64A7",
              lineStyle: "solid",
              weight: 4,
              opacity: 1
            }
          })
        ),
        // 公交站点
        state.busMarkers.map(position =>
          h(TdtMarker, {
            props: {
              position,
              icon: {
                iconUrl: "http://lbs.tianditu.gov.cn/images/bus/map_bus.png",
                iconSize: [23, 23],
                iconAnchor: [12, 12]
              }
            }
          })
        ),
        // 地铁站点
        state.metroMarkers.map(position =>
          h(TdtMarker, {
            props: {
              position,
              icon: {
                iconUrl: "http://lbs.tianditu.gov.cn/images/bus/map_metro.png",
                iconSize: [23, 23],
                iconAnchor: [12, 12]
              }
            }
          })
        )
      ]);
  }
});
