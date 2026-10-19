import type { WatchCallback } from 'vue'
import { watch } from 'vue'

/** 监听天地图组件属性 */
export function useWatch<P>(props: P, handlers: { [K in keyof P]?: WatchCallback<P[K], P[K]> }) {
  Object.keys(handlers).forEach((key) => {
    // @ts-ignore
    watch(() => props[key], handlers[key], { immediate: true })
  })
}
