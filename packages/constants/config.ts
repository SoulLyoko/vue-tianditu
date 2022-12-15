export const DEFAULT_CONFIG = {
  v: "4.0",
  tk: "",
  plugins: []
};

export const PLUGINS_URL = {
  D3: [
    "https://cdn.bootcss.com/d3/3.5.17/d3.min.js",
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/D3SvgOverlay.min.js"
  ],
  CarTrack: [
    "https://cdn.bootcss.com/d3/3.5.17/d3.min.js",
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/D3SvgOverlay.min.js",
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/CarTrack.min.js"
  ],
  HeatmapOverlay: ["http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/HeatmapOverlay.min.js"],
  BufferTool: [
    "https://cdn.bootcss.com/Turf.js/3.0.14/turf.js",
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/BufferTool.min.js"
  ],
  ImageOverLayer: ["http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/ImageOverlay.min.js"]
};
