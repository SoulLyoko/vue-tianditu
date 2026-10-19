declare namespace T {
  class Tool<Events> extends EventListener<Events> {
    /** 开启工具 */
    open(): boolean
    /** 关闭工具 */
    close(): void
    /** 清空工具绘制的所有图形 */
    clear(): void
  }

  /**
   * 地图工具共有事件参数
   */
  interface ToolEvent<T> {
    /** 事件类型 */
    type: string
    /** 工具对象 */
    target: T
  }
}
