<script>
import componentMixin from "../mixins/component-mixin";

export default {
  name: "tdt-label",
  mixins: [componentMixin],
  props: {
    offset: { type: Array }, //文本标注的位置偏移值。
    text: { type: String }, //文本标注的内容。
    title: { type: String }, //文本的提示内容。
    zindex: { type: Number }, //z-index。
    fontSize: { type: Number }, //文本的字体大小。
    fontColor: { type: String }, //文本的字体颜色。
    backgroundColor: { type: String }, //文本的背景颜色。
    borderLine: { type: Number }, //文本的边框线宽。
    borderColor: { type: String }, //文本的边框颜色
    opacity: { type: Number }, //文本的显示不透明度。
    position: { type: Array }, //文本标注的地理位置。
    extData: null //自定义属性
  },
  methods: {
    initComponent(option) {
      return new Promise(resolve => {
        if (!T.Label) {
          return setTimeout(() => {
            this.initComponent(option);
          });
        }
        this.$tdtComponent = new T.Label(option);
        resolve(this.$tdtComponent);
      });
    }
  }
};
</script>
