declare namespace T {
  /**
   * 自定义控件基类
   */
  class Control {
    static Zoom: typeof ControlZoom;
    static Scale: typeof ControlScale;
    static Copyright: typeof ControlCopyright;
    static OverviewMap: typeof ControlOverviewMap;
    static MapType: typeof ControlMapType;

    constructor(opts?: ControlOptions);
    /**
     * 设置控件的位置。参数请参见ControlPosition常量。
     * @param position "topleft" | "topright" | "bottomleft" | "bottomright"
     */
    setPosition(position?: ControlPosition): void;
    /** 返回控件的位置 */
    getPosition(): ControlPosition;
    /** 向地图上添加叠加物。当调用map.addControl时，API将调用此方法。自定义控件时需要实现此方法。自定义控件时需要将控件对应的HTML元素返回 */
    onAdd(map: Map): void;
    /** 移除控件，释放控件对象所占用的内存。自定义控件时需要实现此方法 */
    onRemove(): void;
    /** 返回控件所在的容器的标签 */
    getContainer(): HTMLElement;
    /** 显示控件 */
    show(): void;
    /** 隐藏控件 */
    hide(): void;
    /** 判断控件的可见性 */
    isVisible(): boolean;
    /** 设置控件停靠的偏移量 */
    setOffset(offset: Point): void;
    /** 返回控件停靠的偏移量 */
    getOffset(): Point;
    /** 对ControlOptions属性值赋值 */
    setOptions(opt: ControlOptions): ControlOptions;
  }

  type ControlPosition = "topleft" | "topright" | "bottomleft" | "bottomright";

  interface ControlOptions {
    /**
     * 控件的位置。参数请参见ControlPosition常量。
     * "topleft" | "topright" | "bottomleft" | "bottomright"
     */
    position?: ControlPosition;
  }
}
