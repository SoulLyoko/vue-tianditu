<template>
  <button
    class="tdt-button"
    :class="[type?'tdt-button--'+type:'',size?'tdt-button--'+size:'']"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "default"
    }
  },
  name: "tdt-button",
  data() {
    return {};
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>