import type { WatchCallback, WatchOptions } from 'vue'
import { watch } from 'vue'

/** 监听天地图组件属性 */
export function useWatch<P>(
  props: P,
  handlers: { [K in keyof P]?: WatchCallback<P[K], P[K]> },
  options?: WatchOptions,
) {
  Object.keys(handlers).forEach((key) => {
    // @ts-ignore
    watch(() => props[key], handlers[key], { immediate: true, deep: true, ...options })
  })
}
