<script>
import componentMixin from "../mixins/component-mixin";

export default {
  name: "tdt-tilelayer-wms",
  mixins: [componentMixin],
  props: {
    layers: { type: String }, //用","分隔的多个图层列表。
    styles: { type: String }, //每个请求图层的用","分隔的描述样式。
    format: { type: String }, //输出图像的类型。
    transparent: { type: Boolean }, //输出图像背景是否透明。
    version: { type: String }, //请求服务的版本
    srs: { type: String }, //地图投影类型。
    opacity: { type: Number }, //	设置图层的透明度（0.0-1.0）。默认值为 1.0不透明。
    zIndex: { type: Number }, //	图层的显示顺序。
    url: { type: String } //图层服务地址。
  },
  methods: {
    initComponent(option) {
      if (!this.url) return;
      this.$tdtComponent = new T.TileLayer.WMS(this.url, { ...option, ...this.$attrs });
      this.$tdtMap.addLayer(this.$tdtComponent);
    }
  }
};
</script>
