declare namespace T {
  class EventListener<Events> {
    /** 添加事件监听 */
    addEventListener<E extends keyof Events>(event: E, handler: Events[E]): void
    /** 移除事件监听 */
    removeEventListener<E extends keyof Events>(event: E, handler: Events[E]): void
    /** 触发事件 */
    trigger<E extends keyof Events>(event: E, handler: Events[E]): void
  }
}
