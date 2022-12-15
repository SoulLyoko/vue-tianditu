import type { ToolInstances } from "../types";
import type { MousetoolEmitFn } from ".";

export function useEvent({ emit, instances }: { emit: MousetoolEmitFn; instances: ToolInstances }): void {
  instances.markTool?.addEventListener("mouseup", e => emit("mark-mouseup", e));

  instances.polygonTool?.addEventListener("draw", e => emit("polygon-draw", e));
  instances.polygonTool?.addEventListener("addpoint", e => emit("polygon-addpoint", e));

  instances.polylineTool?.addEventListener("draw", e => emit("polyline-draw", e));
  instances.polylineTool?.addEventListener("addpoint", e => emit("polyline-addpoint", e));

  instances.rectangleTool?.addEventListener("draw", e => emit("rectangle-draw", e));

  instances.circleTool?.addEventListener("draw", e => emit("circle-draw", e));
  instances.circleTool?.addEventListener("drawend", e => emit("circle-drawend", e));
}
