<script>
import componentMixin from "../mixins/component-mixin";
import { toBounds } from "../utils/converter";

export default {
  name: "tdt-rectangle",
  mixins: [componentMixin],
  props: {
    color: { type: String }, //矩形边线颜色。
    weight: { type: Number }, //矩形边线的宽度，以像素为单位。
    opacity: { type: Number }, //矩形边线的透明度（范围0-1 之间）
    fillColor: { type: String }, //矩形填充颜色。当参数为空时，折线覆盖物将没有填充效果。
    fillOpacity: { type: Number }, //矩形填充的透明度（范围0-1 之间）。
    lineStyle: { type: String }, //矩形边线的样式（solid或dashed）。
    bounds: { type: Array }, //矩形范围。
    edit: { type: Boolean, default: false }, //是否可编辑
    extData: null //自定义属性
  },
  methods: {
    initComponent(option) {
      this.$tdtComponent = new T.Rectangle(toBounds(this.bounds), option);
    }
  }
};
</script>
