import type { Ref } from "vue-demi";
import type { MapEmitter } from "~/types";

import { inject } from "vue-demi";

/**
 * 获取根地图实例
 */
export function useMapRoot(): Promise<T.Map> {
  return new Promise(resolve => {
    const mapRoot = inject<Ref<T.Map>>("mapRoot");
    const mapEmitter = inject<MapEmitter>("mapEmitter");
    if (mapRoot?.value) {
      resolve(mapRoot?.value);
    } else {
      mapEmitter?.on("mapInit", resolver);
    }

    function resolver(map: T.Map) {
      mapEmitter?.off("mapInit", resolver);
      resolve(map);
    }
  });
}
