<script>
import componentMixin from "../mixins/component-mixin";
import { toLngLat } from "../utils/converter";

export default {
  name: "tdt-marker",
  mixins: [componentMixin],
  props: {
    icon: { type: [Object, String] }, //图标类用来表达注记。默认设置为new L.Icon.Default()。
    dragging: { type: Boolean, default: false }, //决定注记是否可被鼠标或触摸拖动。
    title: { type: String }, //	默认情况下，注记图片的叠置顺序由纬度自动设置。如果你想将某一注记放置于其他之上可用这个选项，设置一个较大的值即可，比如1000（或是相反地设置一个较大的负值）。
    zIndexOffset: { type: Number }, //设置z-index。
    opacity: { type: Number }, //设置透明度。
    position: { type: Array }, //标点的坐标
    edit: { type: Boolean, default: false }, //是否可编辑
    extData: null //自定义属性
  },
  methods: {
    initComponent(option) {
      this.$tdtComponent = new T.Marker(toLngLat(this.position), option);
    }
  }
};
</script>
