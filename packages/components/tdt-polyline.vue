<script>
import componentMixin from "../mixins/component-mixin";
import { toLngLat } from "../utils/converter";

export default {
  name: "tdt-polyline",
  mixins: [componentMixin],
  props: {
    color: { type: String }, //折线颜色。
    weight: { type: Number }, //折线的宽度，以像素为单位。
    opacity: { type: Number }, //折线的透明度（范围0-1 之间）。
    lineStyle: { type: String }, //折线的样式（solid或dashed）。
    path: { type: Array }, //坐标数组。
    edit: { type: Boolean, default: false }, //是否可编辑
    extData: null //自定义属性
  },
  methods: {
    initComponent(option) {
      const paths = this.path.map(item => toLngLat(item));
      this.$tdtComponent = new T.Polyline(paths, option);
    }
  }
};
</script>
