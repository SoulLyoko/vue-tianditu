declare namespace T {
  /** 此类表示一个菜单项。 */
  class MenuItem {
    /** 创建一个菜单项。当菜单项被点击时，系统将会以当前菜单弹出的地理坐标点作为参数调用回调函数callback。 */
    constructor(text: string, callback: (e: LngLat) => void)
    /** 设置菜单项显示的文本。 */
    setText(text: string): void
    /** 启用菜单项。 */
    enable(): void
    /** 禁用菜单项。 */
    disable(): void
  }

  /** 此类表示右键菜单。您可以在地图上添加自定义内容的右键菜单。 */
  class ContextMenu extends EventListener<ContextMenuEvents> {
    /** 创建一个右键菜单实例。 */
    constructor(opts?: ContextMenuOptions)
    /** 添加菜单项。 */
    addItem(item: MenuItem): void
    /** 返回指定索引位置的菜单项，第一个菜单项的索引为0。 */
    getItem(index: number): MenuItem
    /** 移除菜单项。 */
    removeItem(item: MenuItem): void
    /** 添加分隔符。 */
    addSeparator(): void
    /** 移除指定索引位置的分隔符，第一个分隔符的索引为0。 */
    removeSeparator(index: number): void
    /** 返回所有的TMenuItem，是一个数组。 */
    getItems(): MenuItem[]
    /** 返回所有分割线，是一个数组。 */
    getAllSeparator(): string[]
  }

  interface ContextMenuOptions {
    /**
     * 指定此菜单项的宽度，菜单以最长的菜单项宽度为准。
     * @default 120
     */
    width?: number
  }

  interface ContextMenuEvents {
    /**
     * 右键菜单打开时触发事件
     * @param e.pixel 表示菜单开启时的像素坐标点。
     */
    open(e: ContextMenuEvent & { pixel: Point }): void
    /** 右键菜单关闭时触发事件。 */
    close(e: ContextMenuEvent): void
  }

  interface ContextMenuEvent {
    type: string
    target: ContextMenu
  }
}
