<script>
import componentMixin from "../mixins/component-mixin";

export default {
  name: "tdt-marker-cluster",
  mixins: [componentMixin],
  props: {
    markers: { type: Array }, //要聚合的标注点数组。
    styles: { type: Array }, //自定义聚合后的图标风格
    girdSize: { type: Number }, //聚合计算时网格的像素大小，默认60。
    maxZoom: { type: Number } //最大的聚合级别，大于该级别就不进行聚合。
  },
  methods: {
    initComponent(option) {
      this.$tdtComponent = new T.MarkerClusterer(this.$tdtMap, option);
    }
  }
};
</script>
