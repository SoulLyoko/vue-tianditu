/**
 * 定义组件的初始配置项，默认定义为字符串，定义为对象则传入name及转换的函数value
 *
 */
import { toLngLat, toBounds, toPoint, toIcon, toMarker } from "../utils/converter";
export default {
  "tdt-map": [
    "projection",
    "minZoom",
    "maxZoom",
    "zoom",
    { name: "center", value: val => toLngLat(val) },
    { name: "maxBounds", value: val => toBounds(val) }
  ],
  "tdt-tilelayer": [
    "minZoom",
    "maxZoom",
    "errorTileUrl",
    "opacity",
    "zIndex",
    { name: "bounds", value: val => toBounds(val) }
  ],
  "tdt-tilelayer-tdt": [
    "minZoom",
    "maxZoom",
    "errorTileUrl",
    "attribution",
    "opacity",
    "zIndex",
    { name: "bounds", value: val => toBounds(val) }
  ],
  "tdt-tilelayer-wms": ["layers", "styles", "format", "transparent", "version", "srs", "crs"],
  "tdt-control": ["position"],
  "tdt-label": [
    "text",
    { name: "offset", value: val => toPoint(val) },
    { name: "position", value: val => toLngLat(val) }
  ],
  "tdt-marker": ["title", "zIndexOffset", "opacity", { name: "icon", value: val => toIcon(val) }],
  "tdt-infowindow": [
    "minWidth",
    "maxWidth",
    "maxHeight",
    "closeOnClick",
    { name: "offset", value: val => toPoint(val) },
    { name: "autoPanPadding", value: val => toPoint(val) }
  ],
  "tdt-polyline": ["color", "weight", "opacity", "lineStyle"],
  "tdt-polygon": ["color", "weight", "opacity", "fillColor", "fillOpacity", "lineStyle"],
  "tdt-rectangle": ["color", "weight", "opacity", "fillColor", "fillOpacity", "lineStyle"],
  "tdt-circle": ["color", "weight", "opacity", "fillColor", "fillOpacity", "lineStyle"],
  "tdt-cartrack": [
    "interval",
    "speed",
    "dynamicLine",
    "carstyle",
    "polylinestyle",
    { name: "Datas", value: val => val.map(v => toLngLat(v)) }
  ],
  "tdt-marker-cluster": [
    "girdSize",
    "maxZoom",
    {
      name: "styles",
      value: val => {
        return val?.map(item => {
          return {
            ...item,
            offset: toPoint(item.offset)
          };
        });
      }
    },
    { name: "markers", value: val => val?.map(v => toMarker(v)) }
  ]
};
