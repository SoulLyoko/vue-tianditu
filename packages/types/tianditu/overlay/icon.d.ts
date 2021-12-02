declare namespace T {
  class Icon {
    /** 以给定的图像地址和大小创建图标对象实例 */
    constructor(opts: IconOptions);
    /** 设置图片资源的地址 */
    setIconUrl(iconUrl: string): void;
    /** 获取图标使用的图片URL */
    getIconUrl(): string;
    /** 设置图标可视区域的大小 */
    setIconSize(size: Point): void;
    /** 获取图标可视区域的大小 */
    getIconSize(): Point;
    /** 设置相对于图片左上角的像素距离 */
    setIconAnchor(anchor: Point): void;
    /** 获取相对于图片左上角的像素距离 */
    getIconAnchor(): Point;

    static Default(): Icon;
  }

  interface IconOptions {
    /** 请求图标图片的URL（绝对或相对路径） */
    iconUrl?: string;
    /** 图标可视区域的大小。default:Point(25, 41) */
    iconSize?: Point;
    /** 图标的定位锚点。此点用来决定图标与地理位置的关系，是相对于图标左上角的偏移值，默认等于图标宽度和高度的中间值。default:Point(12, 41) */
    iconAnchor?: Point;
  }
}
