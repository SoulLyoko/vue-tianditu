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
     * 设置控件的位置。参数请参见Control常量。
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
    position?: ControlPosition;
  }

  /**
   * 地图缩放控件，可以缩放和移动地图。
   */
  class ControlZoom extends Control {
    /** 创建一个地图缩放控件 */
    constructor(opts?: ControlZoomOptions);
  }

  interface ControlZoomOptions extends ControlOptions {
    /** 放大层级按钮的文字显示。default:"+" */
    zoomInText?: string;
    /** 缩小层级按钮的文字显示。default:"-" */
    zoomOutText?: string;
    /** 放大层级按钮的标题显示。default:"放大" */
    zoomInTitle?: string;
    /** 缩小层级按钮的标题显示。default:"缩小" */
    zoomOutTitle?: string;
  }

  /**
   * 地图比例尺控件，用来实时的显示地图的当前比例尺。
   */
  class ControlScale extends Control {
    /** 创建一个地图比例尺控件 */
    constructor(opts?: ControlScaleOptions);
    /** 设置设置比例尺控件的颜色 */
    setColor(color: string): void;
  }

  interface ControlScaleOptions extends ControlOptions {}

  /**
   * 此类表示版权控件，您可以在地图上添加自己的版权信息。每一个版权信息需要包含如下内容：版权的唯一标识、版权内容和其适用的区域范围。
   */
  class ControlCopyright extends Control {
    /** 创建一个版权控件 */
    constructor(opts?: ControlOptions);
    /** 添加一个版权信息 */
    addCopyright(copyright: ControlCopyrightOptions): void;
    /** 移除版权信息 */
    removeCopyright(copyright: ControlCopyrightOptions): void;
    /** 获得单个版权信息 */
    getCopyright(id: string): ControlCopyrightOptions;
    /** 获得版权信息列表 */
    getCopyrightCollection(): ControlCopyright[];
  }

  interface ControlCopyrightOptions {
    /** 该版权信息的唯一标识符 */
    id: string;
    /** 该版权的文本信息，用于显示在地图上，支持HTML内容 */
    content: string;
    /** 该版权信息所适用的地理区域 */
    bounds: LngLatBounds;
  }

  /**
   * 鹰眼地图控件，用来显示一个鹰眼地图, 继承自Control基类，拥有基类的所有方法。
   */
  class ControlOverviewMap extends Control {
    /** 创建一个鹰眼地图控件 */
    constructor(opts?: ControlOverviewMapOptions);
    /**
     * 设置鹰眼地图的按钮图片，要同时设置鹰眼地图打开和关闭状态下的两张图片。
     * @param imgOpen 鹰眼地图在打开状态下的按钮图片。
     * @param imgClose 鹰眼地图在关闭状态下的按钮图片。
     */
    setButtonImage(imgOpen: string, imgClose: string): void;
    /** 设置鹰眼地图和主地图之间空隙的背景颜色 */
    setBorderColor(color: string): void;
    /** 设置鹰眼地图上的矩形框边框颜色 */
    setRectBorderColor(color: string): void;
    /** 设置鹰眼地图上的矩形框背景颜色 */
    setRectBackColor(color: string): void;
    /** 切换鹰眼地图的开-合状态 */
    changeView(): void;
    /** 返回该鹰眼的视图是否被打开 */
    isOpen(): boolean;
    /** 返回该鹰眼的地图对象 */
    getMiniMap(): Map;
    /** 添加事件监听函数 */
    addEventListener<E extends keyof ControlOverviewMapEvents>(event: E, handler: ControlOverviewMapEvents[E]): void;
    /** 移除事件监听函数 */
    removeEventListener<E extends keyof ControlOverviewMapEvents>(event: E, handler: ControlOverviewMapEvents[E]): void;
  }

  interface ControlOverviewMapOptions {
    /** 控件的停靠位置 */
    anchor?: ControlPosition;
    /** 缩略地图控件的大小 */
    size?: Point;
    /** 缩略地图添加到地图后的开合状态，默认为关闭。true表示显示，false表示隐藏 */
    isOpen?: boolean;
  }

  interface ControlOverviewMapEvents {
    /** 鹰眼视图控件的开合状态变化时触发事件 */
    viewchange(e: ControlOverviewMapEvent): void;
  }

  interface ControlOverviewMapEvent {
    /** 事件类型 */
    type: string;
    /** 鹰眼地图控件对象 */
    target: ControlOverviewMap;
    /** 是否打开状态 */
    isOpen: boolean;
  }

  /**
   * 负责切换地图类型的控件
   */
  class ControlMapType extends Control {
    /**
     * 创建地图类型控件，opts为可选参数。
     * @param mapTypes 控件展示的地图类型，默认为普通图、卫星图、卫星加路网混合图。通过此属性可配置控件展示的地图类型。
     */
    constructor(opts?: ControlMapTypeOptions);
  }

  /**
   * ```
   * {
   *  mapTypes?: [
   *     {
   *       title: "地图";
   *       icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/vector.png";
   *       layer: TMAP_NORMAL_MAP;
   *     },
   *     {
   *       title: "卫星";
   *       icon: " http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellite.png";
   *       layer: TMAP_SATELLITE_MAP;
   *     },
   *     {
   *       title: "卫星混合";
   *       icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellitepoi.png";
   *       layer: TMAP_HYBRID_MAP;
   *     },
   *     {
   *       title: "地形";
   *       icon: " http://api.tianditu.gov.cn/v4.0/image/map/maptype/terrain.png";
   *       layer: TMAP_TERRAIN_MAP;
   *     },
   *     {
   *       title: "地形混合";
   *       icon: " http://api.tianditu.gov.cn/v4.0/image/map/maptype/terrainpoi.png";
   *       layer: TMAP_TERRAIN_HYBRID_MAP;
   *     }
   *   ];
   * }
   * ```
   */
  interface ControlMapTypeOptions {
    mapTypes?: {
      /** 地图控件上所要显示的图层名称 */
      title: string;
      /**  地图控件上所要显示的图层图标（默认图标大小80x80） */
      icon: string;
      /** 地图类型对象，即MapType */
      layer: MapType;
    }[];
  }
}
