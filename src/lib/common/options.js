import { toLngLat, toBounds, toPoint, toIcon } from "../utils/converter";

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
  "tdt-label": [
    "text",
    { name: "offset", value: val => toPoint(val) },
    { name: "position", value: val => toLngLat(val) }
  ],
  "tdt-marker": [
    "title",
    "zIndexOffset",
    "opacity",
    { name: "icon", value: val => toIcon(val) }
  ],
  "tdt-infowindow": [
    "minWidth",
    "maxWidth",
    "maxHeight",
    "closeOnClick",
    { name: "offset", value: val => toPoint(val) },
    { name: "autoPanPadding", value: val => toPoint(val) }
  ],
  "tdt-polyline": ["color", "weight", "opacity", "lineStyle"],
  "tdt-polygon": [
    "color",
    "weight",
    "opacity",
    "fillColor",
    "fillOpacity",
    "lineStyle"
  ],
  "tdt-rectangle": [
    "color",
    "weight",
    "opacity",
    "fillColor",
    "fillOpacity",
    "lineStyle"
  ],
  "tdt-circle": [
    "color",
    "weight",
    "opacity",
    "fillColor",
    "fillOpacity",
    "lineStyle"
  ],
  "tdt-cartrack": [
    "interval",
    "speed",
    "dynamicLine",
    "carstyle",
    "polylinestyle",
    { name: "Datas", value: val => val.map(v => toLngLat(v)) }
  ]
};
