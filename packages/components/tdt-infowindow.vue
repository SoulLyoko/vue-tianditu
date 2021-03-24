<script>
import componentMixin from "../mixins/component-mixin";
export default {
  name: "tdt-infowindow",
  mixins: [componentMixin],
  props: {
    minWidth: { type: Number }, //弹出框的最小宽度。
    maxWidth: { type: Number }, //弹出框的最大宽度。
    maxHeight: { type: Number }, //设置后，如果内容超过弹出窗口的给定高度则产生一个可以滚动的容器。
    autoPan: { type: Boolean, default: false }, //是否开启信息窗口打开时地图自动移动（默认关闭）。
    closeButton: { type: Boolean, default: true }, //控制弹出窗口中出现的关闭按钮。
    offset: { type: Array }, //弹出窗口位置的补偿值。在同一图层中打开弹出窗口时对于控制锚点比较有用。
    autoPanPadding: { type: Array }, //在地图视图自动平移产生后弹出窗口和地图视图之间的边缘。
    closeOnClick: { type: Boolean, default: false }, //	是否开启点击地图关闭信息窗口（默认关闭）。
    content: { type: String, default: "" }, //信息窗口内容
    target: { type: Object } //打开信息窗口的覆盖物对象
  },
  methods: {
    initComponent(option) {
      this.$tdtComponent = new T.InfoWindow(this.content, option);
      this.target && this.target.openInfoWindow(this.$tdtComponent);
    }
  }
};
</script>
