<script>
import componentMixin from "../mixins/component-mixin";

export default {
  name: "tdt-cartrack",
  mixins: [componentMixin],
  props: {
    interval: { type: Number }, //从当前节点到下一节点的时间间隔。
    speed: { type: Number }, //一个时间间隔移动的距离，单位是米。 注：speed为0时，按照Datas数组中每个元素的坐标移动。
    dynamicLine: { type: Boolean, default: false }, //为true时轨迹线随车移动，而变化。 false时，车辆运动轨迹提前画好且无动态变化。
    Datas: { type: Array }, //数据来源。
    carstyle: { type: Object }, //车辆样式。
    polylinestyle: { type: Object }, //车辆轨迹线样式。
    startOnInit: { type: Boolean, default: false } //初始化完成后车辆立刻开始移动
  },
  watch: {
    Datas(val) {
      if (val?.length) {
        if (this.$tdtComponent) {
          this.clear();
        }
        this.register();
      }
    }
  },
  methods: {
    initComponent(option) {
      return new Promise(resolve => {
        if (!T.CarTrack) {
          return setTimeout(() => {
            this.initComponent(option);
          });
        }
        if (!this.Datas || !this.Datas.length) return;
        if (this.$tdtComponent) this.$tdtComponent.clear();
        this.$tdtComponent = new T.CarTrack(this.$tdtMap, {
          ...option,
          passOneNode: (lnglat, index, length) => {
            //车辆移动一次时触发调用的方法 Lnglat：经过的坐标 index：节点序号。 length:总节点数量。
            this.$emit("passOneNode", lnglat, index, length);
          }
        });
        this.startOnInit && this.start();
        resolve(this.$tdtComponent);
      });
    },
    start() {
      this.$tdtComponent.start();
    },
    stop() {
      this.$tdtComponent.stop();
    },
    pause() {
      this.$tdtComponent.pause();
    },
    clear() {
      this.$tdtComponent.clear();
    }
  }
};
</script>
