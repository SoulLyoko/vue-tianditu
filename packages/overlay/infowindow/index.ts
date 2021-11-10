import { defineComponent, onMounted, onUnmounted, h, computed } from "vue-demi";
import { useMapRoot, useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";
import { VNodeEl } from "../../types";

export const TdtInfowindow = defineComponent({
  name: "TdtInfowindow",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, slots }) {
    const contentRef = computed(() => {
      return h(
        "div",
        {
          class: "tdt-infowindow-custom",
          style: { minWidth: props.minWidth, maxWidth: props.maxWidth, maxHeight: props.maxHeight }
        },
        slots.default?.()
      ) as VNodeEl;
    });

    onMounted(async () => {
      onUnmounted(() => tdtMap?.closeInfoWindow());

      const content = slots.default ? contentRef.value.el || contentRef.value.elm : undefined;

      const tdtMap = await useMapRoot();
      const tdtComponent = useInit(props, content);
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent, emitted });
      useWatch({ props, instance: tdtComponent, map: tdtMap });
      emit("init", tdtComponent);
    });

    function emitted(event: string) {
      event === "close" && emit("update:target", null);
    }

    return () => contentRef.value;
  }
});

export type TdtInfowindow = InstanceType<typeof TdtInfowindow>;
