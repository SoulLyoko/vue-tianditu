<script>
import componentMixin from "../mixins/component-mixin";
import { toLngLat } from "../utils/converter";

export default {
  name: "tdt-circle",
  mixins: [componentMixin],
  props: {
    color: { type: String }, //圆边线颜色。
    weight: { type: Number }, //圆边线的宽度，以像素为单位。
    opacity: { type: Number }, //圆边线的透明度（范围0-1 之间）
    fillColor: { type: String }, //圆填充颜色。当参数为空时，折线覆盖物将没有填充效果。
    fillOpacity: { type: Number }, //圆填充的透明度（范围0-1 之间）。
    lineStyle: { type: String }, //圆边线的样式（solid或dashed）。
    center: { type: Array }, //圆心经纬度坐标。
    radius: { type: Number }, //圆的半径，以米为单位。
    edit: { type: Boolean, default: false }, //是否可编辑
    extData: null //自定义属性
  },
  methods: {
    initComponent(option) {
      this.$tdtComponent = new T.Circle(toLngLat(this.center), this.radius, option);
    }
  }
};
</script>
