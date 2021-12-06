import { defineComponent, computed, isVue2 } from "vue-demi";
import { IconSearch, IconClose } from "./icons";
import { h, debounce } from "../../../utils";
import "../styles/search-box.scss";

export const SearchBox = defineComponent({
  props: {
    value: { type: String, default: "" },
    modelValue: { type: String, default: "" },
    /** 显示在输入框的提示 */
    placeholder: { type: String, default: "输入关键字搜索" },
    /** 是否显示搜索按钮 */
    searchBtn: { type: Boolean, default: true }
  },
  emits: {
    input: (e: string) => true,
    "update:modelValue": (e: string) => true,
    // 点击搜索按钮事件或回车时触发
    search: (e: string) => true
  },
  setup(props, { emit }) {
    let isComposition = false;

    const keyword = computed({
      get() {
        return isVue2 ? props.value : props.modelValue;
      },
      set(val: string) {
        isVue2 ? emit("input", val) : emit("update:modelValue", val);
      }
    });

    return () =>
      h(
        "div",
        {
          class: "tdt-search-box"
        },
        [
          h("input", {
            class: "tdt-search-box__input",
            attrs: {
              type: "text",
              placeholder: props.placeholder
            },
            domProps: {
              value: keyword.value
            },
            on: {
              compositionstart: () => (isComposition = true),
              compositionend: () => (isComposition = false),
              input: debounce((e: any) => !isComposition && (keyword.value = e.target.value), 100),
              keyup: (e: KeyboardEvent) => e.code === "Enter" && emit("search", keyword.value)
            }
          }),
          h(
            "i",
            {
              class: "tdt-search-box__close",
              style: { display: props.value || props.modelValue ? "block" : "none" },
              on: {
                click: () => (keyword.value = "")
              }
            },
            [h(IconClose)]
          ),
          props.searchBtn &&
            h(
              "button",
              {
                class: "tdt-search-box__btn",
                on: {
                  click: () => emit("search", keyword.value)
                }
              },
              [h(IconSearch)]
            )
        ]
      );
  }
});
