import { defineComponent } from "vue-demi";
import type { ToolInstances } from "./types";
import { useMapRoot } from "../use";
import { useInit, useWatch, PROPS, EVENTS, useEvent } from "./use";

export const TdtMousetool = defineComponent({
  name: "TdtMousetool",
  props: PROPS,
  emits: EVENTS,
  async setup(props, { emit, expose }) {
    expose?.({
      open,
      close,
      clear,
      clearAll
    });

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

    return () => {};
  }
});

export type TdtMousetool = InstanceType<typeof TdtMousetool>;
