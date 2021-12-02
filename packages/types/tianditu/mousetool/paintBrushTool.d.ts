declare namespace T {
  class PaintBrushTool extends Mousetool<any> {
    /** 在地图容器中，创建一个可以随意画线的画笔工具 */
    constructor(map: Map, opts?: PaintBrushToolOptions);
    /** 获取工具中所有绘制的圆 */
    getLayers(): SVG[];
    /** 启用 */
    enable(): void;
    /** 禁用 */
    disable(): void;
  }

  interface PaintBrushToolOptions {
    /** 保持工具的连续可用性 */
    keepdrawing?: boolean;
    /** 	画笔留下笔迹的样式 */
    style?: { color?: string; weight?: number; opacity?: number };
  }
}
