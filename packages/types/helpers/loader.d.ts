export type PluginName = "D3" | "CarTrack" | "HeatmapOverlay" | "BufferTool" | "ImageOverLayer";

export interface LoadConfig {
  apiUrl?: string;
  v?: string;
  tk?: string;
  plugins?: readonly PluginName[];
  pluginUrls?: Partial<Record<PluginName, readonly string[]>>;
}
