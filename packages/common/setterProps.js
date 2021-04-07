/**
 * 定义组件可设置的动态属性，定义为字符串默认转为如setZoom的格式，定义为对象则传入name及转换的函数fn
 */
import { toLngLat, toBounds, toPoint, toIcon, toMarker } from "../utils/converter";
export default {
  "tdt-map": [
    "zoom",
    "minZoom",
    "maxZoom",
    "style",
    {
      name: "center",
      fn(component, val) {
        component.panTo(toLngLat(val));
      }
    },
    {
      name: "maxBounds",
      fn(component, val) {
        component.setMaxBounds(toBounds(val));
      }
    },
    {
      name: "viewport",
      fn(component, val) {
        component.setViewport(val.map(item => toLngLat(item)));
      }
    }
  ],
  "tdt-tilelayer": ["opacity", "zIndex", "url"],
  "tdt-tilelayer-tdt": ["opacity", "zIndex", "url"],
  "tdt-tilelayer-wms": ["opacity", "zIndex", "url"],
  "tdt-control": [
    {
      name: "offset",
      fn(component, val) {
        component.setOffset(toPoint(val));
      }
    }
  ],
  "tdt-label": [
    "title",
    "zindex",
    "fontSize",
    "fontColor",
    "backgroundColor",
    "borderLine",
    "borderColor",
    "opacity",
    {
      name: "offset",
      fn(component, val) {
        component.setOffset(toPoint(val));
      }
    },
    {
      name: "text",
      fn(component, val) {
        component.setLabel(val);
      }
    },
    {
      name: "position",
      fn(component, val) {
        component.setLngLat(toLngLat(val));
      }
    }
  ],
  "tdt-marker": [
    "zIndexOffset",
    "opacity",
    {
      name: "icon",
      fn(component, val) {
        component.setIcon(toIcon(val));
      }
    },
    {
      name: "position",
      fn(component, val) {
        component.setLngLat(toLngLat(val));
      }
    }
  ],
  "tdt-infowindow": [
    "content",
    {
      name: "target",
      fn(component, val, map) {
        if (val instanceof Array) {
          val.length ? map.openInfoWindow(component, toLngLat(val)) : map.closeInfoWindow();
        } else if (val instanceof Object) {
          val.openInfoWindow(component);
        } else {
          component.closeInfoWindow(component);
        }
      }
    },
    {
      name: "offset",
      fn(component, val) {
        component.setOffset(toPoint(val));
      }
    }
  ],
  "tdt-polyline": [
    "color",
    "opacity",
    "weight",
    "lineStyle",
    {
      name: "path",
      fn(component, val) {
        component.setLngLats(val.map(item => toLngLat(item)));
      }
    }
  ],
  "tdt-polygon": [
    "color",
    "opacity",
    "weight",
    "lineStyle",
    "fillColor",
    "fillOpacity",
    {
      name: "path",
      fn(component, val) {
        component.setLngLats(val.map(item => toLngLat(item)));
      }
    }
  ],
  "tdt-rectangle": [
    "color",
    "opacity",
    "weight",
    "lineStyle",
    "fillColor",
    "fillOpacity",
    {
      name: "bounds",
      fn(component, val) {
        component.setBounds(toBounds(val));
      }
    }
  ],
  "tdt-circle": [
    "radius",
    "color",
    "opacity",
    "weight",
    "lineStyle",
    "fillColor",
    "fillOpacity",
    {
      name: "center",
      fn(component, val) {
        component.setCenter(toLngLat(val));
      }
    }
  ],
  "tdt-marker-cluster": [
    "maxZoom",
    "gridSize",
    {
      name: "markers",
      fn(component, val) {
        component.clearMarkers();
        if (val && val.length) {
          component.addMarkers(val.map(item => toMarker(item)));
        }
      }
    },
    {
      name: "styles",
      fn(component, val) {
        component.setStyles(
          val.map(item => {
            return {
              ...item,
              offset: toPoint(item.offset)
            };
          })
        );
      }
    }
  ]
};
