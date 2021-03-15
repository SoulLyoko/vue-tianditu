import { capitalize, objectFilter } from "../utils/utils";
import events from "../common/events";
import options from "../common/options";
import enableProps from "../common/enableProps";
import setterProps from "../common/setterProps";

export default {
  data() {
    return {
      $tdtMap: null,
      $tdtComponent: null
    };
  },
  mounted() {
    this.$tdtMap = this.$tdtMap || this.$parent.$tdtMap;
    if (this.$tdtMap) {
      this.register();
    } else {
      this.$on("map-ready", _map => {
        this.$tdtMap = _map;
        this.register();
      });
    }
  },
  destroyed() {
    if (!this.$tdtComponent) return;
    this.$tdtComponent.getType && this.$tdtMap.removeOverLay(this.$tdtComponent); //移除覆盖物
    this.$tdtComponent.setUrl && this.$tdtMap.removeLayer(this.$tdtComponent); //移除图层
  },
  render(h) {
    return h();
  },
  computed: {
    tag() {
      return this.$options._componentTag;
    }
  },
  methods: {
    /**
     * 初始化组件
     */
    register() {
      const res = this.initComponent && this.initComponent(this.setOption());
      if (res && res.then) res.then(instance => this.registerRest(instance));
      else this.registerRest(res);
    },
    registerRest(instance) {
      if (!this.$tdtComponent && instance) this.$tdtComponent = instance;
      const { $tdtMap, $tdtComponent, extData } = this;
      $tdtComponent && $tdtComponent.getType && $tdtComponent.getType() !== 3 && $tdtMap.addOverLay($tdtComponent); //添加覆盖物（除信息窗口）
      this.addEvents();
      this.setProps();
      this.addWatchers();
      if ($tdtComponent) {
        this.$emit("init", $tdtComponent, extData);
      }
    },
    /**
     * 添加事件
     */
    addEvents() {
      const { $tdtComponent, extData, tag } = this;
      if (events[tag]) {
        events[tag].forEach(event => {
          $tdtComponent.addEventListener(event, e => {
            this.$emit(event, { ...e, extData });
          });
        });
      }
    },
    /**
     * 设置属性
     */
    setProps() {
      const { $tdtComponent, tag } = this;
      //组件的启用/禁用属性
      if (enableProps[tag]) {
        enableProps[tag].forEach(prop => {
          if (this[prop] !== undefined) {
            this[prop] ? $tdtComponent[`enable${capitalize(prop)}`]() : $tdtComponent[`disable${capitalize(prop)}`]();
          }
        });
      }
      //设置组件的属性
      if (setterProps[tag]) {
        setterProps[tag].forEach(prop => {
          if (this[prop] !== undefined) {
            if (typeof prop === "string") {
              $tdtComponent[`set${capitalize(prop)}`](this[prop]);
            } else if (typeof prop === "object") {
              prop.fn($tdtComponent, this[prop]);
            }
          }
        });
      }
    },
    /**
     * 添加动态属性监听
     */
    addWatchers() {
      const { $tdtComponent, tag } = this;
      //启用/禁用属性的监听
      if (enableProps[tag]) {
        enableProps[tag].forEach(prop => {
          this.$watch(prop, val => {
            val ? $tdtComponent[`enable${capitalize(prop)}`]() : $tdtComponent[`disable${capitalize(prop)}`]();
          });
        });
      }
      //设置属性的监听
      if (setterProps[tag]) {
        setterProps[tag].forEach(prop => {
          if (typeof prop === "string") {
            this.$watch(prop, val => {
              $tdtComponent[`set${capitalize(prop)}`](val);
            });
          } else if (typeof prop === "object") {
            this.$watch(prop.name, val => {
              prop.fn($tdtComponent, val);
            });
          }
        });
      }
    },
    setOption() {
      let option = {};
      if (options[this.tag]) {
        options[this.tag].forEach(item => {
          if (typeof item === "string") {
            option[item] = this[item];
          } else if (typeof item === "object") {
            option[item.name] = item.value(this[item.name]);
          }
        });
      }
      return objectFilter(option);
    },
    getMap() {
      return this.$tdtMap;
    },
    getComponent() {
      return this.$tdtComponent;
    },
    getExtData() {
      return this.extData;
    }
  }
};
