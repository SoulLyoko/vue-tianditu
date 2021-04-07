<template>
  <div class="tdt-control-custom">
    <slot></slot>
  </div>
</template>

<script>
import componentMixin from "../mixins/component-mixin";

export default {
  name: "tdt-control",
  mixins: [componentMixin],
  props: {
    position: { type: String }, //控件的停靠位置。
    offset: { type: Array } //控件停靠的偏移量
  },
  methods: {
    initComponent(option) {
      this.$tdtComponent = new T.Control(option);
      this.$tdtComponent.onAdd = () => this.$el;
      this.$tdtComponent.onRemove = () => this.$destroy();
      this.$tdtMap.addControl(this.$tdtComponent);
    }
  }
};
</script>
