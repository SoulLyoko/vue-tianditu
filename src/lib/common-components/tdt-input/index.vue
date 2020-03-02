<template>
  <input
    class="tdt-input"
    :class="[size?'tdt-input--'+size:'']"
    ref="input"
    :value="value"
    :placeholder="placeholder"
    :readonly="readonly"
    @compositionstart="handleCompositionStart"
    @compositionupdate="handleCompositionUpdate"
    @compositionend="handleCompositionEnd"
    @input="handleInput"
    @change="handleChange"
  />
</template>

<script>
export default {
  name: "tdt-input",
  props: {
    value: [String, Number],
    size: {
      type: String,
      default: "default"
    },
    placeholder: {
      type: String,
      default: ""
    },
    readonly: Boolean
  },
  data() {
    return {
      isComposing: false
    };
  },
  computed: {
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ""
        : String(this.value);
    }
  },
  methods: {
    handleCompositionStart() {
      this.isComposing = true;
    },
    handleCompositionUpdate(event) {
      function isKorean(text) {
        const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
        return reg.test(text);
      }
      const text = event.target.value;
      const lastCharacter = text[text.length - 1] || "";
      this.isComposing = !isKorean(lastCharacter);
    },
    handleCompositionEnd(event) {
      if (this.isComposing) {
        this.isComposing = false;
        this.handleInput(event);
      }
    },
    handleInput(event) {
      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (this.isComposing) return;

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (event.target.value === this.nativeInputValue) return;

      this.$emit("input", event.target.value);

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      this.$nextTick(this.setNativeInputValue);
    },
    handleChange(event) {
      this.$emit("change", event.target.value);
    },
    setNativeInputValue() {
      const input = this.$refs.input;
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>