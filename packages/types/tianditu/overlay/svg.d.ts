declare namespace T {
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
