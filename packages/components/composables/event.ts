export interface UseEventOptions<E extends string> {
  events: Partial<Record<E, any>>
  instance: { addEventListener: (event: E, callback: (e: any) => void) => void }
  emit: (event: any, ...args: any[]) => any
  extData?: any
}

/** 为天地图组件实例添加事件监听 */
export function useEvent<E extends string>({
  events,
  instance,
  emit,
  extData,
}: UseEventOptions<E>): void {
  const eventKeys = Object.keys(events) as E[]
  eventKeys.forEach((event) => {
    instance.addEventListener(event, (e) => emit(event, { ...e, extData }))
  })
}
