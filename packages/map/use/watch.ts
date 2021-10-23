import { watch } from "vue-demi";
import { toBounds, toLngLat } from "../../utils";
import { Props } from "../types";

export function useWatch({ props, instance }: { props: Props; instance: Tianditu.Map }) {
  watch(
    () => ({ center: props.center, zoom: props.zoom }),
    val => {
      if (!val.center || !val.zoom) return;
      instance.panTo(toLngLat(val.center), val.zoom);
    }
  );
  watch(
    () => props.drag,
    val => (val ? instance.enableDrag() : instance.disableDrag()),
    { immediate: true }
  );
  watch(
    () => props.scrollWheelZoom,
    val => (val ? instance.enableScrollWheelZoom() : instance.disableScrollWheelZoom()),
    { immediate: true }
  );
  watch(
    () => props.doubleClickZoom,
    val => (val ? instance.enableDoubleClickZoom() : instance.disableDoubleClickZoom()),
    { immediate: true }
  );
  watch(
    () => props.keyboard,
    val => (val ? instance.enableKeyboard() : instance.disableKeyboard()),
    { immediate: true }
  );
  watch(
    () => props.inertia,
    val => (val ? instance.enableInertia() : instance.disableInertia()),
    { immediate: true }
  );
  watch(
    () => props.continuousZoom,
    val => (val ? instance.enableContinuousZoom() : instance.disableContinuousZoom()),
    { immediate: true }
  );
  watch(
    () => props.pinchToZoom,
    val => (val ? instance.enablePinchToZoom() : instance.disablePinchToZoom()),
    { immediate: true }
  );
  watch(
    () => props.autoResize,
    val => (val ? instance.enableAutoResize() : instance.disableAutoResize()),
    { immediate: true }
  );
  watch(
    () => props.minZoom,
    val => val && instance.setMinZoom(val)
  );
  watch(
    () => props.maxZoom,
    val => val && instance.setMaxZoom(val),
    { immediate: true }
  );
  watch(
    () => props.maxBounds,
    val => val && instance.setMaxBounds(toBounds(val)),
    { immediate: true }
  );
  watch(
    () => props.viewport,
    val => val && instance.setViewport(val?.map(lnglat => toLngLat(lnglat))),
    { immediate: true }
  );
  watch(
    () => props.mapStyle,
    val => (val ? instance.setStyle(val) : instance.removeStyle()),
    { immediate: true }
  );
}
