<script>
import componentMixin from "../mixins/component-mixin";
import { capitalize, objectFilter } from "../utils/utils";
import { toIcon } from "../utils/converter";

export default {
  name: "tdt-mousetool",
  mixins: [componentMixin],
  props: {
    mark: { type: Object }, //标点的配置项
    polygon: { type: Object }, //多边形的配置项
    polyline: { type: Object }, //折线的配置项
    rectangle: { type: Object }, //矩形的配置项
    circle: { type: Object } //圆形的配置项
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
        mark: [{ origin: "mouseup", new: "markend" }],
        polygon: [
          { origin: "draw", new: "polygon-draw" },
          { origin: "addpoint", new: "polygon-addpoint" }
        ],
        polyline: [
          { origin: "draw", new: "polyline-draw" },
          { origin: "addpoint", new: "polyline-addpoint" }
        ],
        rectangle: [{ origin: "draw", new: "rectangle-draw" }],
        circle: [
          { origin: "draw", new: "circle-draw" },
          { origin: "drawend", new: "circle-drawend" }
        ]
      }
    };
  },
  methods: {
    initComponent(option) {
      return new Promise((resolve, reject) => {
        if (!T.MarkTool) {
          return setTimeout(() => {
            this.initComponent(option);
          });
        }
        const tools = ["mark", "polygon", "polyline", "rectangle", "circle"];
        tools.forEach(type => {
          if (type === "mark") {
            if (this.mark && this.mark.icon) {
              this.tools.markTool = new T.MarkTool(
                this.$tdtMap,
                objectFilter({
                  ...this.mark,
                  icon: toIcon(this.mark.icon)
                })
              );
            } else {
              this.tools.markTool = new T.MarkTool(this.$tdtMap, this.mark);
            }
            this.addToolEvents("mark");
          } else {
            const toolName = type + "Tool";
            this.tools[toolName] = new T[capitalize(toolName)](
              this.$tdtMap,
              this[type]
            );
            this.addToolEvents(type);
          }
        });
        resolve(this.tools);
      });
    },
    addToolEvents(type) {
      //将原生事件映射为新的组件事件
      this.events[type].forEach(t => {
        this.tools[type + "Tool"].addEventListener(t.origin, e => {
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
      this.tools.markTool.clear();
      this.tools.polygonTool.clear();
      this.tools.polylineTool.clear();
      this.tools.rectangleTool.clear();
      this.tools.circleTool.clear();
    }
  }
};
</script>

