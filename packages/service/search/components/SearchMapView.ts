import { h, defineComponent, computed, watch } from "vue-demi";
import { TdtMarker, TdtInfowindow } from "../../../components";
import { useState, useMethods } from "../use";
import { toLngLats } from "../../../utils";
import { EVENTS } from "../use";

export const SearchMapView = defineComponent({
  emits: EVENTS,
  setup(props, { emit }) {
    const state = useState();
    const { onPoiClick } = useMethods(state);

    const markers = computed(() => {
      return state.pois
        ? state.pois.map(poi => {
            return {
              position: poi.lonlat.split(" ").map(Number),
              extData: poi
            };
          })
        : [];
    });

    watch(markers, () => {
      state.tdtMap?.setViewport(toLngLats(markers.value.map(e => e.position)));
    });

    return () =>
      h("div", null, [
        ...markers.value.map(item => {
          return h(TdtMarker, {
            ...item,
            onClick: () => onPoiClick(item.extData, emit),
            props: { ...item },
            on: {
              click: () => onPoiClick(item.extData, emit)
            }
          });
        }),
        h(TdtInfowindow, {
          target: state.target,
          content: state.content,
          offset: [0, -30],
          minWidth: 150,
          "onUpdate:target": (e: any) => (state.target = e),
          props: {
            target: state.target,
            content: state.content,
            offset: [0, -30],
            minWidth: 150
          },
          on: {
            "update:target": (e: any) => (state.target = e)
          }
        })
      ]);
  }
});
