import { defineComponent, watch, onBeforeMount, onUnmounted, getCurrentInstance, isVue2 } from "vue-demi";

import { useMapRoot } from "../../use";
import { useInit, PROPS, EVENTS } from "./use";

export const TdtCarTrack = defineComponent({
  name: "TdtCarTrack",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, expose }) {
    onBeforeMount(async () => {
      onUnmounted(() => tdtComponent?.clear());

      expose?.({ start, pause, stop, clear });
      if (isVue2) {
        const vm = getCurrentInstance()?.proxy as any;
        vm.star = start;
        vm.paus = pause;
        vm.sto = stop;
      }

      const tdtMap = await useMapRoot();
      let tdtComponent: T.CarTrack | null = null;
      watch(
        () => props.Datas,
        val => {
          tdtComponent?.clear();
          tdtComponent = null;
          if (!val.length) return;
          tdtComponent = useInit(props, emit, tdtMap);
          emit("init", tdtComponent);
        },
        { immediate: true }
      );

      function start() {
        tdtComponent?.start();
      }
      function pause() {
        tdtComponent?.pause();
      }
      function stop() {
        tdtComponent?.stop();
      }
      function clear() {
        tdtComponent?.clear();
      }
    });
    return () => {};
  }
});
