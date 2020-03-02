<script>
import componentMixin from "../mixins/component-mixin";

export default {
  name: "tdt-tilelayer",
  mixins: [componentMixin],
  props: {
    minZoom: { type: Number }, //此图层的最低缩放级别。
    maxZoom: { type: Number }, //	此图层的最高缩放级别。
    errorTileUrl: { type: String }, //	当没有瓦片时所显示的错误图片地址。
    opacity: { type: Number }, //	设置图层的透明度（0.0-1.0）。默认值为 1.0不透明。
    zIndex: { type: Number }, //	图层的显示顺序。
    bounds: { type: Array }, //	设置指定范围内显示瓦片。
    url: { type: String } //图层服务地址。
  },
  methods: {
    initComponent(option) {
      if (!this.url) return;
      this.$tdtComponent = new T.TileLayer(this.url, option);
      this.$tdtMap.addLayer(this.$tdtComponent);
    }
  }
};
</script>