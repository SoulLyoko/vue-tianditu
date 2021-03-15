<script>
import componentMixin from "../mixins/component-mixin";
import { capitalize, objectFilter } from "../utils/utils";
import { toIcon } from "../utils/converter";
const toolNames = ["markTool", "polygonTool", "polylineTool", "rectangleTool", "circleTool"];

export default {
  name: "tdt-mousetool",
  mixins: [componentMixin],
  props: {
    markTool: { type: Object }, //标点的配置项
    polygonTool: { type: Object }, //多边形的配置项
    polylineTool: { type: Object }, //折线的配置项
    rectangleTool: { type: Object }, //矩形的配置项
    circleTool: { type: Object } //圆形的配置项
  },
  data() {
    return {
      tools: {
        markTool: null,
        polygonTool: null,
        polylineTool: null,
        rectangleTool: null,
        circleTool: null
      },
      events: {
        markTool: [{ origin: "mouseup", new: "markend" }],
        polygonTool: [
          { origin: "draw", new: "polygon-draw" },
          { origin: "addpoint", new: "polygon-addpoint" }
        ],
        polylineTool: [
          { origin: "draw", new: "polyline-draw" },
          { origin: "addpoint", new: "polyline-addpoint" }
        ],
        rectangleTool: [{ origin: "draw", new: "rectangle-draw" }],
        circleTool: [
          { origin: "draw", new: "circle-draw" },
          { origin: "drawend", new: "circle-drawend" }
        ]
      }
    };
  },
  methods: {
    initComponent(option) {
      return new Promise(resolve => {
        if (!T.MarkTool) {
          return setTimeout(() => {
            this.initComponent(option);
          });
        }
        toolNames.forEach(type => {
          if (type === "markTool") {
            if (this.markTool && this.markTool.icon) {
              this.tools.markTool = new T.MarkTool(
                this.$tdtMap,
                objectFilter({
                  ...this.markTool,
                  icon: toIcon(this.markTool.icon)
                })
              );
            } else {
              this.tools.markTool = new T.MarkTool(this.$tdtMap, this.markTool);
            }
          } else {
            this.tools[type] = new T[capitalize(type)](this.$tdtMap, this[type]);
          }
          this.addToolEvents(type);
        });
        resolve(this.tools);
      });
    },
    addToolEvents(type) {
      //将原生事件映射为新的组件事件
      this.events[type].forEach(t => {
        this.tools[type].addEventListener(t.origin, e => {
          this.$emit(t.new, e);
        });
      });
    },
    open(tool) {
      this.tools[tool].open();
    },
    close(tool) {
      this.tools[tool].close();
    },
    clear(tool) {
      this.tools[tool].clear();
    },
    clearAll() {
      toolNames.forEach(tool => {
        this.close(tool);
        this.clear(tool);
      });
    }
  }
};
</script>
