declare namespace T {
  namespace Control {
    // oxlint-disable-next-line typescript/no-unsafe-declaration-merging
    interface OverviewMap extends EventListener<OverviewMapEvents> {}
    /** 鹰眼地图控件，用来显示一个鹰眼地图, 继承自Control基类，拥有基类的所有方法。 */
    class OverviewMap extends Control {
      /** 创建一个鹰眼地图控件 */
      constructor(opts?: OverviewMapOptions)
      /**
       * 设置鹰眼地图的按钮图片，要同时设置鹰眼地图打开和关闭状态下的两张图片。
       * @param imgOpen 鹰眼地图在打开状态下的按钮图片。
       * @param imgClose 鹰眼地图在关闭状态下的按钮图片。
       */
      setButtonImage(imgOpen: string, imgClose: string): void
      /** 设置鹰眼地图和主地图之间空隙的背景颜色 */
      setBorderColor(color: string): void
      /** 设置鹰眼地图上的矩形框边框颜色 */
      setRectBorderColor(color: string): void
      /** 设置鹰眼地图上的矩形框背景颜色 */
      setRectBackColor(color: string): void
      /** 切换鹰眼地图的开-合状态 */
      changeView(): void
      /** 返回该鹰眼的视图是否被打开 */
      isOpen(): boolean
      /** 返回该鹰眼的地图对象 */
      getMiniMap(): Map
    }

    interface OverviewMapOptions {
      /** 控件的停靠位置 */
      anchor?: ControlPosition
      /** 缩略地图控件的大小 */
      size?: Point
      /** 缩略地图添加到地图后的开合状态，默认为关闭。true表示显示，false表示隐藏 */
      isOpen?: boolean
    }

    interface OverviewMapEvents {
      /** 鹰眼视图控件的开合状态变化时触发事件 */
      viewchange(e: OverviewMapEvent): void
    }

    interface OverviewMapEvent {
      /** 事件类型 */
      type: string
      /** 鹰眼地图控件对象 */
      target: Control.OverviewMap
      /** 是否打开状态 */
      isOpen: boolean
    }
  }
}
