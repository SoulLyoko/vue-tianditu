<script setup lang="ts">
import { computed, ref } from "vue";
import IconClose from "./IconClose.vue";
import "../styles/search-box.scss";

defineOptions({ name: "SearchBox" });
const props = withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    searchBtn?: boolean;
    routeBtn?: boolean;
  }>(),
  { modelValue: "", placeholder: "输入关键字搜索", searchBtn: true, routeBtn: true },
);
const emit = defineEmits<{
  "update:modelValue": [value: string];
  search: [value: string];
  focus: [event: FocusEvent];
}>();
const composing = ref(false);
const keyword = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

function onInput(event: Event) {
  if (!composing.value) keyword.value = (event.target as HTMLInputElement).value;
}
</script>

<template>
  <div class="tdt-search-box">
    <input
      v-model="keyword"
      class="tdt-search-box__input"
      type="text"
      :placeholder="placeholder"
      @compositionstart="composing = true"
      @compositionend="composing = false"
      @input="onInput"
      @focus="emit('focus', $event)"
      @keyup.enter="emit('search', keyword)"
    />
    <i v-show="keyword" class="tdt-search-box__close" @click="keyword = ''"><IconClose /></i>
    <slot />
  </div>
</template>
