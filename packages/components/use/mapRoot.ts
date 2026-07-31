import { inject, watch, type InjectionKey, type ShallowRef } from "vue";

export const mapRootKey: InjectionKey<Readonly<ShallowRef<T.Map | undefined>>> = Symbol("mapRoot");

/**
 * 获取根地图实例
 */
export function useMapRoot(): Promise<T.Map> {
  const mapRoot = inject(mapRootKey, null);

  if (!mapRoot) {
    return Promise.reject(new Error("useMapRoot must be used inside TdtMap"));
  }

  if (mapRoot.value) {
    return Promise.resolve(mapRoot.value);
  }

  return new Promise((resolve) => {
    watch(mapRoot, (map) => map && resolve(map), { once: true, flush: "sync" });
  });
}
