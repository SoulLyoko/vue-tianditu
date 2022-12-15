import { defineComponent, computed, watch, onBeforeMount, PropType } from "vue-demi";

import { TdtMarker, TdtInfowindow } from "../../../components";
import { toLngLats, h } from "../../../utils";
import { useMapRoot } from "../../../use";

export const SearchMapView = defineComponent({
  props: {
    /** 显示在地图上的点数组 */
    pois: { type: Array as PropType<T.LocalSearchPoi[]>, default: () => [] },
    /** 显示信息窗口的坐标 */
    target: { type: Array as PropType<VT.LngLat | null>, default: () => null },
    /** 信息窗口的内容 */
    content: { type: String, default: "" }
  },
  emits: {
    /** 点击地图上的标点触发 */
    "poi-click": (e: T.LocalSearchPoi) => true,
    "update-target": (e: VT.LngLat | null) => true
  },
  setup(props, { emit }) {
    const markers = computed(() => {
      return props.pois.map(poi => {
        return {
          position: poi.lonlat.split(" ").map(Number),
          extData: poi
        };
      });
    });

    onBeforeMount(async () => {
      const tdtMap = await useMapRoot();

      watch(markers, () => {
        tdtMap?.setViewport(toLngLats(markers.value.map(e => e.position)));
      });
    });

    return () =>
      h("div", null, [
        ...markers.value.map(item => {
          return h(TdtMarker, {
            props: { ...item },
            on: {
              click: () => emit("poi-click", item.extData)
            }
          });
        }),
        h(TdtInfowindow, {
          props: {
            target: props.target,
            content: props.content,
            offset: [0, -30],
            minWidth: 150
          },
          on: {
            "update:target": (e: VT.LngLat | null) => emit("update-target", e)
          }
        })
      ]);
  }
});
