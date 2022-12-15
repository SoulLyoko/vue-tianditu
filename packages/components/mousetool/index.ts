import type { ToolInstances } from "./types";

import { defineComponent, onBeforeMount, onUnmounted, getCurrentInstance, isVue2 } from "vue-demi";

import { useMapRoot } from "~/composables";
import { mousetoolProps, mousetoolEmits, useInit, useWatch, useEvent } from "./composables";

export { mousetoolProps, mousetoolEmits } from "./composables";
export type { MousetoolProps, MousetoolEmits, MousetoolEmitFn } from "./composables";

export type MousetoolInstance = InstanceType<typeof TdtMousetool>;

export const TdtMousetool = defineComponent({
  name: "TdtMousetool",
  props: mousetoolProps,
  emits: mousetoolEmits,
  setup(props, { emit, expose }) {
    onBeforeMount(async () => {
      onUnmounted(() => clearAll());

      expose?.({ open, close, clear, clearAll });
      if (isVue2) {
        const vm = getCurrentInstance()?.proxy as any;
        vm.open = open;
        vm.close = close;
        vm.clear = clear;
        vm.clearAll = clearAll;
      }

      const tdtMap = await useMapRoot();
      const tdtComponent = useInit(props, tdtMap);
      useEvent({ emit, instances: tdtComponent });
      useWatch({ props, instances: tdtComponent });
      emit("init", tdtComponent);

      function open(toolName: keyof ToolInstances) {
        tdtComponent[toolName]?.open();
      }
      function close(toolName: keyof ToolInstances) {
        tdtComponent[toolName]?.close();
      }
      function clear(toolName: keyof ToolInstances) {
        try {
          tdtComponent[toolName]?.clear();
        } catch (e) {
          // 当图层中没有该类型的图形时会报错，可忽略
          console.error(e);
        }
      }
      function clearAll() {
        Object.keys(tdtComponent).forEach(toolName => {
          close(toolName as keyof ToolInstances);
          clear(toolName as keyof ToolInstances);
        });
      }
    });

    return () => {};
  }
});
