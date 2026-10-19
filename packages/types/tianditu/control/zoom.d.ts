declare namespace T {
  namespace Control {
    /** 地图缩放控件，可以缩放和移动地图。 */
    class Zoom extends Control {
      /** 创建一个地图缩放控件 */
      constructor(opts?: ZoomOptions)
    }

    interface ZoomOptions extends ControlOptions {
      /**
       * 放大层级按钮的文字显示。
       * @default "+"
       */
      zoomInText?: string
      /**
       * 缩小层级按钮的文字显示。
       * @default "-"
       */
      zoomOutText?: string
      /**
       * 放大层级按钮的标题显示。
       * @default "放大"
       */
      zoomInTitle?: string
      /**
       * 缩小层级按钮的标题显示。
       * @default "缩小"
       */
      zoomOutTitle?: string
    }
  }
}
