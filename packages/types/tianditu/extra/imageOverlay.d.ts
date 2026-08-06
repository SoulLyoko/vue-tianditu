declare namespace T {
  /** 图片覆盖物类，用于添加一个只有一张图片的图层，图片会随缩放级别而自适应缩放 */
  class ImageOverlay extends Overlay {
    /** 构造ImageOverlay对象，需要提供一个图片url，以及它覆盖的Bounds。图片会根据bounds大小显示 */
    constructor(url: string, bounds: LngLatBounds, opts?: ImageOverlayOptions)
    /** 获取图片透明度值 */
    getOpacity(): number
    /** 获取图片透明度值 */
    setOpacity(opacity: number): void
    /** 获取ImageOverlay的覆盖地理范围 */
    getBounds(): LngLatBounds
    /** 设置ImageOverlay的覆盖地理范围 */
    setBounds(bounds: LngLatBounds): void
    /** 获取图片url */
    getImageUrl(): string
    /** 设置图片url */
    setImageUrl(url: string): void
  }

  interface ImageOverlayOptions {
    /**
     * 图片的透明度
     * @default 1
     */
    opacity?: number
    /**
     * 如果无法显示图像，浏览器将显示替代文本
     * @default ''
     */
    alt?: string
  }
}
