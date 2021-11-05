declare namespace T {
  class Mousetool<E> {
    /** 开启工具 */
    open(): boolean;
    /** 关闭工具 */
    close(): void;
    /** 清空工具工具绘制的所有图形 */
    clear(): void;
    /** 添加事件监听函数 */
    addEventListener<EE extends keyof E>(event: EE, handler: E[EE]): void;
    /** 移除事件监听函数 */
    removeEventListener<EE extends keyof E>(event: EE, handler: E[EE]): void;
  }

  /**
   * 地图工具共有事件参数
   */
  interface ToolEvent<T> {
    /** 事件类型 */
    type: string;
    /** 工具对象 */
    target: T;
  }

  class MarkTool extends Mousetool<MarkToolEvents> {
    /** 标注工具，用来让用户在地图上标注一个点，可以通过该工具获得用户标点的经纬度位置 */
    constructor(map: Map, opts?: MarkToolOptions);
    /**
     * 设置标注工具显示的标注图标路径的路径
     * @param url 标注图标的路径URL
     */
    setPointImage(url: string): void;
    /** 获取用户标注点的坐标，如果用户尚未操作，则返回 null */
    getMarkControlPoint(): LngLat;
    /** 获取所有工具绘制的标注图标 */
    getMarkers(): Marker[];
  }

  interface MarkToolOptions {
    /** 图标类用来表达注记。default:new T.Icon.Default() */
    icon?: Icon;
    /** 标记图标是否跟随鼠标。default:false */
    follow?: boolean;
  }

  interface MarkToolEvents {
    /** 在用户每完成一次标注时触发事件 */
    mouseup(e: MarkToolEvent);
  }

  interface MarkToolEvent extends ToolEvent<Marker> {
    /** 用户在地图上标的坐标 */
    currentLngLat: LngLat;
    /** 用户当前的标注点对象 */
    currentMarker: Marker;
    /** 用户使用工具所有的标注点对象 */
    allMarkers: Marker[];
  }

  class PolygonTool extends Mousetool<PolygonToolEvents> {
    /** 多边形工具，可以通过事件来获取用户绘制的多边形，包含测面积功能 */
    constructor(map: Map, opts?: PolygonToolOptions);
    /**
     * 跟随鼠标移动的说明文字
     * @param text 文字内容
     */
    setTips(text: string): void;
    /**
     * 计算由地理点组成的多边形的面积
     * @param points 点坐标LngLat数组
     */
    getArea(points: LngLat[]): number;
    /** 获得所有绘制的多边形 */
    getPolygons(): Polygon[];
    /** 完成一个多边形的绘制，运行此方法相当于用户点击双击结束当前多边形的绘制 */
    endDraw();
  }

  interface PolygonToolOptions extends PolygonOptions {
    /** 是否显示面积，如果不显示面积，则可以作为画面控件使用。default:false */
    showLabel?: boolean;
  }

  interface PolygonToolEvents {
    /** 用户双击完成一次折线绘制时触发事件 */
    draw(e: PolygonToolEvent);
    /** 用户在多边形绘制过程中，每次点击底图添加节点时触发事件 */
    addpoint(e: PolygonToolEvent);
  }

  interface PolygonToolEvent extends ToolEvent<Polygon> {
    /** 用户当前绘制的多边形的点坐标数组 */
    currentLnglats: LngLat;
    /** 用户最后绘制的多边形的地理面积 */
    currentArea: number;
    /** 当前所画多边形的对象 */
    currentPolygon: Polygon;
    /** 获取工具所有绘制的多边形 */
    allPolygons: Polygon[];
  }

  class PolylineTool extends Mousetool<PolylineToolEvents> {
    /** 折线工具，可以通过事件来获取用户绘制的折线，包含测距功能 */
    constructor(map: Map, opts?: PolylineToolOptions);
    /**
     * 跟随鼠标移动的说明文字
     * @param text 文字内容
     */
    setTips(text: string): void;
    /**
     * 计算一系列地理坐标点的距离总和
     * @param points 点坐标LngLat数组
     */
    getDistance(points: LngLat[]): number;
    /** 获取所有编辑完成的线 */
    getPolylines(): Polyline[];
    /** 完成一个折线的绘制，运行此方法相当于用户点击双击结束当前折线的绘制 */
    endDraw();
  }

  interface PolylineToolOptions extends PolylineOptions {
    /** 是否显示距离，如果不显示距离，则可以作为画线控件使用。default:false */
    showLabel?: boolean;
  }

  interface PolylineToolEvents {
    /** 用户双击完成一次折线绘制时触发事件 */
    draw(e: PolylineToolEvent);
    /** 用户在多边形绘制过程中，每次点击底图添加节点时触发事件 */
    addpoint(e: PolylineToolEvent);
  }

  interface PolylineToolEvent extends ToolEvent<Polyline> {
    /** 用户当前绘制的折线的点坐标数组 */
    currentLnglats: LngLat;
    /** 用户当前绘制的折线的地理长度 */
    currentDistance: number;
    /** 当前测距所画线的对象 */
    currentPolyline: Polyline;
    /** 返回所有工具绘制的线对象 */
    allPolylines: Polyline[];
  }

  class RectangleTool extends Mousetool<RectangleToolEvents> {
    /** 矩形工具，用来实现在地图上选择一个矩形区域或绘制矩形的功能 */
    constructor(map: Map, opts?: RectangleToolOptions);
    /** 返回工具所有绘制的矩形 */
    getRectangles(): Rectangle[];
  }

  interface RectangleToolOptions extends RectangleOptions {}

  interface RectangleToolEvents {
    /** 用户每次完成拉框操作时触发事件 */
    draw(e: RectangleToolEvent);
  }

  interface RectangleToolEvent extends ToolEvent<Rectangle> {
    /** 用户拉框选择的地理范围 */
    currentBounds: LngLat;
    /** 用户绘制的矩形图形对象 */
    currentRectangle: Rectangle;
    /** 所有绘制的矩形对象 */
    allRectangles: Rectangle[];
  }

  class CircleTool extends Mousetool<CircleToolEvents> {
    /** 画圆工具，用来实现在地图上画圆的功能 */
    constructor(map: Map, opts?: CircleToolOptions);
    /** 获取工具中所有绘制的圆 */
    getCircles(): Circle[];
  }

  interface CircleToolOptions extends CircleOptions {}

  interface CircleToolEvents {
    /** 用户拖动绘制圆时触发 */
    draw(e: CircleToolEvent);
    /** 用户完成绘制圆时触发 */
    drawend(e: CircleToolEvent);
  }

  interface CircleToolEvent extends ToolEvent<Circle> {
    /** 中心点的地理坐标 */
    currentCenter: LngLat;
    /** 半径，单位为米 */
    currentRadius: LngLat;
    /** 用户最后绘制的圆对象 */
    currentCircle: Circle;
    /** 用户所有绘制的圆对象 */
    allCircles: Circle[];
  }
}
