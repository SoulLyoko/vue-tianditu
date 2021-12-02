declare namespace T {
  class Mousetool<E> {
    /** 开启工具 */
    open(): boolean;
    /** 关闭工具 */
    close(): void;
    /** 清空工具工具绘制的所有图形 */
    clear(): void;
    /** 添加事件监听函数 */
    addEventListener<EE extends keyof E>(event: EE, handler: E[EE]): void;
    /** 移除事件监听函数 */
    removeEventListener<EE extends keyof E>(event: EE, handler: E[EE]): void;
  }

  /**
   * 地图工具共有事件参数
   */
  interface ToolEvent<T> {
    /** 事件类型 */
    type: string;
    /** 工具对象 */
    target: T;
  }
}
