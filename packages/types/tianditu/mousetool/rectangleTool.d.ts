declare namespace T {
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
}
