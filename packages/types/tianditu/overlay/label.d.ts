declare namespace T {
  class Label extends OverlayBase<LabelEvents> {
    /** 根据给定参数对象创建文本标注 */
    constructor(opts: LabelOptions);
    /** 设置文本所在的地理位置坐标 */
    setLngLat(lnglat: LngLat): void;
    /** 返回文本所在的地理位置坐标 */
    getLngLat(): LngLat;
    /** 设置文本的内容 */
    setLabel(content: string): void;
    /** 返回文本的内容 */
    getLabel(): string;
    /** 设置文本的提示内容 */
    setTitle(title: string): void;
    /** 返回文本的提示内容 */
    getTitle(): string;
    /** 设置文本的文本内容字体大小 */
    setFontSize(size: number): void;
    /** 返回文本内容字体大小 */
    getFontSize(): number;
    /** 设置文本的文本的字体颜色 */
    setFontColor(color: string): void;
    /** 返回文本的字体颜色 */
    getFontColor(): string;
    /** 设置文本的背景色 */
    setBackgroundColor(color: string): void;
    /** 返回文本的背景色*/
    getBackgroundColor(): string;
    /** 设置文本的边框线宽 */
    setBorderLine(width: number): void;
    /** 返回文本的边框线宽 */
    getBorderLine(): number;
    /** 设置文本的边框颜色 */
    setBorderColor(color: string): void;
    /** 返回文本的边框颜色 */
    getBorderColor(): string;
  }

  interface LabelOptions {
    /** 文本标注的内容 */
    text?: string;
    /** 文本标注的位置偏移值。default:Point(0,0) */
    offset?: Point;
    /** 文本标注的地理位置。default:LngLat(0,0) */
    position?: LngLat;
  }

  interface LabelEvents extends OverlayEvents<Label, LngLat> {}
}
