declare namespace T {
  /**
   * 自定义覆盖物的构造类
   */
  class Overlay {
    constructor(opts: any);
    extend(opts: OverlayExtendOptions): Overlay;
  }
  /**
   * 自定义覆盖物构造类参数
   */
  interface OverlayExtendOptions {
    /** 构造函数时传递参数，对OverlayOptions属性值进行赋值 */
    initialize(...arg: any): void;
    /** 向地图上添加叠加物。当调用map.addOverLay时，API将调用此方法。自定义叠加物时需要实现此方法。自定义叠加物时需要将覆盖物对应的HTML元素返回 */
    onAdd(map: Map): void;
    /** 移除叠加物，释放覆盖物对象所占用的内存。自定义叠加物时需要实现此方法 */
    onRemove(): void;
    /** 当地图状态发生变化时，由系统调用对覆盖物进行绘制。自定义覆盖物需要实现此方法 */
    update(): void;
    /** 在地图上显示叠加层 */
    show(): void;
    /** 在地图上隐藏叠加层 */
    hide(): void;
    /** 判断叠加层是否隐藏，返回 true 表示当前叠加层是隐藏的，否则是处于显示状态 */
    isHidden(): boolean;
    /** 对OverlayOptions属性值赋值 */
    setOptions(opt: JSON): void;
    /** 返回叠加物所在的容器的标签 */
    getElement(): HTMLElement;
  }

  /**
   * 覆盖物公共类
   */
  class OverlayBase<E> {
    /**返回叠加层类型 */
    getType(): number;
    /** 返回叠加层所在的map对象 */
    getMap(): Map;
    /** 设置叠加层的偏移值 */
    setOffset(offset: Point): void;
    /** 返回叠加层的偏移值 */
    getOffset(): Point;
    /** 设置z-index */
    setZIndex(zIndex: number): void;
    /** 设置叠加层的显示透明度 */
    setOpacity(opacity: number): void;
    /** 返回加层的显示透明度 */
    getOpacity(): number;
    /** 添加事件监听函数 */
    addEventListener<EE extends keyof E>(event: EE, handler: E[EE]): void;
    /** 移除事件监听函数 */
    removeEventListener<EE extends keyof E>(event: EE, handler: E[EE]): void;
    /** 打开信息窗口 */
    openInfoWindow(infowin: InfoWindow): void;
    /** 关闭信息窗口 */
    closeInfoWindow(): void;
    /** 显示 */
    show(): void;
    /** 隐藏 */
    hide(): void;
  }
  /**
   * 覆盖物共有事件
   */
  interface OverlayEvents<T, LL> {
    /** 点击叠加层后会触发此事件 */
    click(e: OverlayEvent<T, LL>): void;
    /** 双击叠加层后会触发此事件 */
    dblclick(e: OverlayEvent<T, LL>): void;
    /** 鼠标在叠加层上按下触发此事件 */
    mousedown(e: OverlayEvent<T, LL>): void;
    /** 鼠标在叠加层释放触发此事件 */
    mouseup(e: OverlayEvent<T, LL>): void;
    /** 鼠标离开叠加层时触发此事件 */
    mouseout(e: OverlayEvent<T, LL>): void;
    /** 当鼠标进入叠加层区域时会触发此事件 */
    mouseover(e: OverlayEvent<T, LL>): void;
    /** 移除叠加层时触发 */
    remove(e: OverlayEvent<T, LL>): void;
  }
  /**
   * 覆盖物共有事件参数
   */
  interface OverlayEvent<T, LL> {
    /** 事件类型 */
    type: string;
    /** 叠加层对象 */
    target: T;
    /** 叠加层经纬度坐标 */
    lnglat: LL;
    /** 叠加层像素坐标 */
    containerPoint: Point;
  }

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
    /**返回文本的提示内容 */
    getTitle(): string;
    /**设置文本的文本内容字体大小 */
    setFontSize(size: number): void;
    /**返回文本内容字体大小 */
    getFontSize(): number;
    /**设置文本的文本的字体颜色 */
    setFontColor(color: string): void;
    /**返回文本的字体颜色 */
    getFontColor(): string;
    /**设置文本的背景色 */
    setBackgroundColor(color: string): void;
    /**返回文本的背景色*/
    getBackgroundColor(): string;
    /**设置文本的边框线宽 */
    setBorderLine(width: number): void;
    /**返回文本的边框线宽 */
    getBorderLine(): number;
    /**设置文本的边框颜色 */
    setBorderColor(color: string): void;
    /**返回文本的边框颜色 */
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

  class Marker extends OverlayBase<MakerEvents> {
    /** 创建一个图像标注实例。lnglat参数指定了图像标注所在的地理位置 */
    constructor(lnglat: LngLat, opts?: MarkerOptions);
    /** 设置标注所在的地理位置坐标 */
    setLngLat(lnglat: LngLat): void;
    /** 返回标注所在的地理位置坐标 */
    getLngLat(): LngLat;
    /** 设置标注所用的图标对象 */
    setIcon(icon: Icon): void;
    /** 返回标记显示时所使用的图标对象 */
    getIcon(): Icon;
    /** 设置z-index */
    setZIndexOffset(num: number): void;
    /** 开启标注拖拽功能 */
    enableDragging(): void;
    /** 关闭标注拖拽功能 */
    disableDragging(): void;
  }

  interface MarkerOptions {
    /** 图标类用来表达注记。default:T.Icon.Default() */
    icon?: Icon;
    /** 决定注记是否可被鼠标或触摸拖动。default:false */
    draggable?: boolean;
    /** 默认情况下，注记图片的叠置顺序由纬度自动设置。如果你想将某一注记放置于其他之上可用这个选项，设置一个较大的值即可，比如1000（或是相反地设置一个较大的负值） */
    title?: string;
    /** 设置z-index。default:0 */
    zIndexOffset?: number;
    /** 设置透明度。default:1.0 */
    opacity?: number;
  }

  interface MakerEvents extends OverlayEvents<Marker, LngLat> {
    dragstart(e: Pick<MarkerEvent, "type" | "target">): void;
    drag(e: Pick<MarkerEvent, "type" | "target" | "lnglat">): void;
    dragend(e: Pick<MarkerEvent, "type" | "target" | "lnglat">): void;
  }

  interface MarkerEvent extends OverlayEvent<Marker, LngLat> {}

  class InfoWindow extends OverlayBase<InfoWindowEvents> {
    /** 创建一个信息窗实例 */
    constructor(content: string | HTMLElement, opts?: InfoWindowOptions);
    /** 设置或改变信息浮窗所指向的地理位置坐标 */
    setLngLat(lnglat: LngLat): void;
    /** 返回信息浮窗所指向的地理位置坐标 */
    getLngLat(): LngLat;
    /** 返回信息窗口的打开状态 */
    isOpen(): boolean;
    /** 设置信息浮窗的显示 HTML 内容 */
    setContent(content: string | HTMLElement): void;
    /** 返回信息浮窗的显示 HTML 内容 */
    getContent(): string | HTMLElement;
    /** 重绘信息窗口，当信息窗口内容发生变化时进行调用 */
    update(): void;
  }

  interface InfoWindowOptions {
    /** 弹出框的最小宽度。default:50 */
    minWidth?: number;
    /** 弹出框的最大宽度。default:300 */
    maxWidth?: number;
    /** 设置后，如果内容超过弹出窗口的给定高度则产生一个可以滚动的容器 */
    maxHeight?: number;
    /** 是否开启信息窗口打开时地图自动移动（默认关闭）。default:false */
    autoPan?: boolean;
    /** 控制弹出窗口中出现的关闭按钮。default:true */
    closeButton?: boolean;
    /** 弹出窗口位置的补偿值。在同一图层中打开弹出窗口时对于控制锚点比较有用。default:Point(0,7) */
    offset?: Point;
    /** 在地图视图自动平移产生后弹出窗口和地图视图之间的边缘。default:Point(5,5) */
    autoPanPadding?: Point;
    /** 是否开启点击地图关闭信息窗口（默认关闭）。default:false */
    closeOnClick?: boolean;
  }

  interface InfoWindowEvents {
    /** 信息窗口被关闭时触发此事件 */
    close(e: Pick<InfoWindowEvent, "type" | "target" | "lnglat">): void;
    /** 信息窗口被打开时触发此事件 */
    open(e: Pick<InfoWindowEvent, "type" | "target" | "lnglat">): void;
    /** 点击信息窗口的关闭按钮时触发此事件 */
    clickclose(e: Pick<InfoWindowEvent, "type" | "target">): void;
  }

  interface InfoWindowEvent extends OverlayEvent<InfoWindow, LngLat> {}

  class Polyline extends OverlayBase<PolylineEvents> {
    /** 创建折线覆盖物对象 */
    constructor(points: LngLat[], opts?: PolylineOptions);
    /** 设置折线的点数组 */
    setLngLats(lnglat: LngLat[]): void;
    /** 返回折线的点数组 */
    getLngLats(): LngLat[];
    /** 设置折线的颜色 */
    setColor(color: string): void;
    /** 返回折线的颜色 */
    getColor(): string;
    /** 设置折线的宽度 */
    setWeight(weight: number): void;
    /** 返回线的宽度 */
    getWeight(): number;
    /** 设置折线是为实线或虚线 */
    setLineStyle(style: PolylineOptions["lineStyle"]): void;
    /** 返回当前折线样式状态，实线或者虚线 */
    getLineStyle(): string;
    /** 返回折线的地理区域范围 */
    getBounds(): LngLatBounds;
    /** 启用线编辑功能 */
    enableEdit(): void;
    /** 禁用线编辑功能 */
    disableEdit(): void;
    /** 是否启用线编辑功能，true表示启用，false表示禁止 */
    isEditable(): boolean;
  }

  interface PolylineOptions {
    /** 折线颜色。default:"#0000FF" */
    color?: string;
    /** 折线的宽度，以像素为单位。default:3 */
    weight?: number;
    /** 折线的透明度（范围0-1 之间）。default:0.5 */
    opacity?: number;
    /** 折线的样式（solid或dashed）。default:"solid" */
    lineStyle?: "solid" | "dashed";
  }

  interface PolylineEvents extends OverlayEvents<Polyline, LngLat[]> {}

  class Polygon extends OverlayBase<PolygonEvents> {
    /** 创建多边形覆盖物对象 */
    constructor(points: LngLat[], opts?: PolygonOptions);
    /** 设置多边形的点数组 */
    setLngLats(lnglat: LngLat[]): void;
    /** 返回多边形的点数组 */
    getLngLats(): LngLat[];
    /** 设置多边形边线的颜色 */
    setColor(color: string): void;
    /** 返回多边形边线的颜色 */
    getColor(): string;
    /** 设置多边形边线的宽度 */
    setWeight(weight: number): void;
    /** 返回多边形边线的宽度。 */
    getWeight(): number;
    /** 设置多边形边线是为实线或虚线 */
    setLineStyle(style: PolylineOptions["lineStyle"]): void;
    /** 返回当前多边形边线样式状态，实线或者虚线 */
    getLineStyle(): string;
    /** 设置多边形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，多边形覆盖物填充颜色与边线颜色相同 */
    setFillColor(color: string): void;
    /** 返回多边形的填充颜色 */
    getFillColor(): string;
    /** 设置多边形的填充透明度。当参数为0时，多边形覆盖物将没有填充效果 */
    setFillOpacity(opacity: number): void;
    /** 返回多边形的填充透明度 */
    getFillOpacity(): number;
    /** 返回多边形的地理区域范围 */
    getBounds(): LngLatBounds;
    /** 启用多边形编辑功能 */
    enableEdit(): void;
    /** 禁用多边形编辑功能 */
    disableEdit(): void;
    /** 是否启用多边形编辑功能，true表示启用，false表示禁止 */
    isEditable(): boolean;
  }

  interface PolygonOptions {
    /** 多边形边线颜色。default:"#0000FF" */
    color?: string;
    /** 多边形边线的宽度，以像素为单位。default:3 */
    weight?: number;
    /** 多边形边线的透明度（范围0-1 之间）。default:0.5 */
    opacity?: number;
    /** 多边形填充颜色。当参数为空时，多边形覆盖物将没有填充效果。default:"#0000FF" */
    fillColor?: string;
    /** 多边形填充的透明度（范围0-1 之间）。default:0.2 */
    fillOpacity?: number;
    /** 多边形边线的样式（solid或dashed）。default:"solid" */
    lineStyle?: "solid" | "dashed";
  }

  interface PolygonEvents extends OverlayEvents<Polygon, LngLat[]> {}

  class Rectangle extends OverlayBase<RectangleEvents> {
    /** 创建矩形覆盖物对象 */
    constructor(bounds: LngLatBounds, opts?: RectangleOptions);
    /** 设置矩形的显示范围 */
    setBounds(bounds: LngLatBounds): void;
    /** 返回矩形的地理区域范围 */
    getBounds(): LngLatBounds;
    /** 设置矩形边线的颜色 */
    setColor(color: string): void;
    /** 返回矩形边线的颜色 */
    getColor(): string;
    /** 设置矩形边线的宽度 */
    setWeight(weight: number): void;
    /** 返回矩形边线的宽度 */
    getWeight(): number;
    /** 设置矩形边线是为实线或虚线 */
    setLineStyle(style: PolylineOptions["lineStyle"]): void;
    /** 返回当前矩形边线样式状态，实线或者虚线 */
    getLineStyle(): string;
    /** 设置矩形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，矩形覆盖物填充颜色与边线颜色相同 */
    setFillColor(color: string): void;
    /** 返回矩形的填充颜色 */
    getFillColor(): string;
    /** 设置矩形的填充透明度。当参数为0时，矩形覆盖物将没有填充效果 */
    setFillOpacity(opacity: number): void;
    /** 返回矩形的填充透明度 */
    getFillOpacity(): number;
    /** 启用矩形编辑功能 */
    enableEdit(): void;
    /** 禁用矩形编辑功能 */
    disableEdit(): void;
    /** 是否启用矩形编辑功能，true表示启用，false表示禁止 */
    isEditable(): boolean;
  }

  interface RectangleOptions {
    /** 矩形边线颜色。default:"#0000FF" */
    color?: string;
    /** 矩形边线的宽度，以像素为单位。default:3 */
    weight?: number;
    /** 矩形边线的透明度（范围0-1 之间）。default:0.5 */
    opacity?: number;
    /** 矩形填充颜色。当参数为空时，矩形覆盖物将没有填充效果。default:"#0000FF" */
    fillColor?: string;
    /** 矩形填充的透明度（范围0-1 之间）。default:0.2 */
    fillOpacity?: number;
    /** 矩形边线的样式（solid或dashed）。default:"solid" */
    lineStyle?: "solid" | "dashed";
  }

  interface RectangleEvents extends OverlayEvents<Rectangle, LngLatBounds> {}

  class Circle extends OverlayBase<CircleEvents> {
    /**
     * 创建圆覆盖物
     * @param center 圆心经纬度坐标
     * @param radius 圆的半径，以米点单位
     */
    constructor(center: LngLat, radius: number, opts?: CircleOptions);
    /** 设置圆的中心点。 */
    setCenter(lnglat: LngLat): void;
    /** 返回圆的中心点。 */
    getCenter(): LngLat;
    /** 设置圆的半径。 */
    setRadius(radius: number): void;
    /** 返回圆的半径。 */
    getRadius(): number;
    /** 返回圆的地理区域范围 */
    getBounds(): LngLatBounds;
    /** 设置圆边线的颜色 */
    setColor(color: string): void;
    /** 返回圆边线的颜色 */
    getColor(): string;
    /** 设置圆边线的宽度 */
    setWeight(weight: number): void;
    /** 返回圆边线的宽度 */
    getWeight(): number;
    /** 设置圆边线是为实线或虚线 */
    setLineStyle(style: PolylineOptions["lineStyle"]): void;
    /** 返回当前圆边线样式状态，实线或者虚线 */
    getLineStyle(): string;
    /** 设置圆的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，圆覆盖物填充颜色与边线颜色相同 */
    setFillColor(color: string): void;
    /** 返回圆的填充颜色 */
    getFillColor(): string;
    /** 设置圆的填充透明度。当参数为0时，圆覆盖物将没有填充效果 */
    setFillOpacity(opacity: number): void;
    /** 返回圆的填充透明度 */
    getFillOpacity(): number;
    /** 启用圆编辑功能 */
    enableEdit(): void;
    /** 禁用圆编辑功能 */
    disableEdit(): void;
    /** 是否启用圆编辑功能，true表示启用，false表示禁止 */
    isEditable(): boolean;
  }

  interface CircleOptions {
    /** 圆边线颜色。default:"#0000FF" */
    color?: string;
    /** 圆边线的宽度，以像素为单位。default:3 */
    weight?: number;
    /** 圆边线的透明度（范围0-1 之间）。default:0.5 */
    opacity?: number;
    /** 圆填充颜色。当参数为空时，圆覆盖物将没有填充效果。default:"#0000FF" */
    fillColor?: string;
    /** 圆填充的透明度（范围0-1 之间）。default:0.2 */
    fillOpacity?: number;
    /** 圆边线的样式（solid或dashed）。default:"solid" */
    lineStyle?: "solid" | "dashed";
  }

  interface CircleEvents extends OverlayEvents<Circle, LngLat> {}

  class SVG {
    /** 根据传入padding参数创建用于绘制SVG标签的容器。 */
    constructor(opts?: SVGOptions);
    /** 根据传入的字符串，只创建标准的SVG标签元素。 */
    create(name: string): SVGElement;
    /** 根据屏幕坐标的数组拼接类似的"M..L..L.."字符串，用于生成标签的路径数据。 */
    pointsToPath(points: Point[], closed: boolean): string;
  }

  interface SVGOptions {
    /** SVG容器的范围相对地图视图容器的大小扩展缩小区域，例如：0.1表示地图视图每个方向扩大0.1倍的范围。default:0.1 */
    padding?: number;
  }
}
