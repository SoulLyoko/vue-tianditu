<template>
  <div class="tdt-map-container" style="height:100%;">
    <div class="tdt-map" :id="mid" style="height:100%;"></div>
    <slot></slot>
  </div>
</template>

<script>
import { guid, capitalize } from "../utils/utils";
import componentMixin from "../mixins/component-mixin";
import { ApiLoaderInstance } from "../utils/api-loader-instance";

export default {
  name: "tdt-map",
  mixins: [componentMixin],
  props: {
    drag: { type: Boolean, default: true }, //启用地图拖拽，默认启用。
    scrollWheelZoom: { type: Boolean, default: true }, //启用滚轮放大缩小，默认启用。
    doubleClickZoom: { type: Boolean, default: true }, //启用双击放大，默认启用。
    keyboard: { type: Boolean, default: true }, //启用键盘操作，默认启用。
    inertia: { type: Boolean, default: true }, //启用地图惯性拖拽，默认启用。
    continuousZoom: { type: Boolean, default: true }, //启用连续缩放效果，默认启用。
    pinchToZoom: { type: Boolean, default: true }, //启用双指操作缩放，默认启用。
    autoResize: { type: Boolean, default: true }, //启用自动适应容器尺寸变化，默认启用。
    maxBounds: { type: Array }, //当这个选项被设置后，地图被限制在给定的地理边界内，当用户平移将地图拖动到视图以外的范围时会出现弹回的效果，并且也不允许缩小视图到给定范围以外的区域（这取决于地图的尺寸）。使用setMaxBounds方法可以动态地设置这种约束。
    mid: { type: String, default: guid() }, //地图容器id
    projection: { type: String }, //EPSG:900913(墨卡托投影)，EPSG:4326(大地平面投影)
    center: { type: Array },
    zoom: { type: Number, default: 10 },
    minZoom: { type: Number },
    maxZoom: { type: Number },
    viewport: { type: Array }, //根据提供的坐标点数组设置地图视野，调整后的视野会保证包含提供的坐标点。
    controls: { type: Array } //控件
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      if (!(this.center && this.center.length)) {
        return;
      }
      ApiLoaderInstance.load().then(() => {
        this.$tdtMap = this.$tdtComponent = new T.Map(this.mid, this.setOption());
        this.addEvents();
        this.setProps();
        this.addWatchers();
        this.addControls();
        this.$children.forEach(component => {
          component.$emit("map-ready", this.$tdtMap);
        });
        this.$emit("init", this.$tdtMap);
      });
    },
    addControls() {
      if (this.controls && this.controls.length) {
        this.controls.forEach(option => {
          if (typeof option === "string") {
            this.addControlByName(option);
          } else if (typeof option === "object") {
            this.addControlByOption(option);
          }
        });
      }
    },
    addControlByName(option) {
      const controlName = capitalize(option);
      if (!T.Control[controlName]) {
        return setTimeout(() => {
          this.addControlByName(option);
        });
      }
      this.$tdtMap.addControl(new T.Control[controlName]());
    },
    addControlByOption(option) {
      const controlName = capitalize(option.name);
      if (!T.Control[controlName]) {
        return setTimeout(() => {
          this.addControlByOption(option);
        });
      }
      if (controlName === "MapType") {
        const mapTypes = option.mapTypes.map(item=>{
          return { 
            ...item,
            layer:window[item.layer]
          }
        })
        this.$tdtMap.addControl(new T.Control.MapType(mapTypes));
      } else {
        this.$tdtMap.addControl(new T.Control[capitalize(controlName)](option));
      }
    }
  }
};
</script>
