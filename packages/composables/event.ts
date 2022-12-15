/** 为天地图组件实例添加事件监听 */
export function useEvent({ events, emit, instance, emitted, extData }: any): void {
  if (events instanceof Object) {
    events = Object.keys(events);
  }
  events.forEach((event: string) => {
    instance.addEventListener(event, (e: any) => {
      emit(event, { ...e, extData });
      emitted?.(event);
    });
  });
}
