export const DEFAULT_OPTIONS = {
  v: "4.0",
  tk: "",
  plugins: []
};

export const PLUGINS_URL = {
  D3: [
    "https://cdn.bootcss.com/d3/3.5.17/d3.js",
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/D3SvgOverlay.js"
  ],
  CarTrack: [
    "https://cdn.bootcss.com/d3/3.5.17/d3.js",
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/D3SvgOverlay.js",
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/CarTrack.js"
  ],
  HeatmapOverlay: ["http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/HeatmapOverlay.js"],
  BufferTool: [
    "https://cdn.bootcss.com/Turf.js/3.0.14/turf.js",
    "http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/BufferTool.js"
  ],
  ImageOverLayer: ["http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/ImageOverlay.js"]
};
