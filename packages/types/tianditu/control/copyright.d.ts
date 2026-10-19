declare namespace T {
  namespace Control {
    /** 此类表示版权控件，您可以在地图上添加自己的版权信息。每一个版权信息需要包含如下内容：版权的唯一标识、版权内容和其适用的区域范围。 */
    class Copyright extends Control {
      /** 创建一个版权控件 */
      constructor(opts?: ControlOptions)
      /** 添加一个版权信息 */
      addCopyright(copyright: CopyrightOptions): void
      /** 移除版权信息 */
      removeCopyright(copyright: CopyrightOptions): void
      /** 获得单个版权信息。id参数为获取单个版权信息的唯一标识。 */
      getCopyright(id: string): CopyrightOptions
      /** 获得版权信息列表 */
      getCopyrightCollection(): Control.Copyright[]
    }

    interface CopyrightOptions extends ControlOptions {
      /** 该版权信息的唯一标识符 */
      id?: string
      /** 该版权的文本信息，用于显示在地图上，支持HTML内容 */
      content?: string
      /** 该版权信息所适用的地理区域 */
      bounds?: LngLatBounds
    }
  }
}
