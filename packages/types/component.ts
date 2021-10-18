import { DefineComponent, EmitsOptions, ExtractPropTypes } from "vue";

// export type DefineProps<P> = InstanceType<DefineComponent<P>>["$props"];
export type DefineProps<P> = ExtractPropTypes<P>;

export type DefineEmits<E extends EmitsOptions> = InstanceType<
  DefineComponent<any, any, any, any, any, any, any, E>
>["$emit"];

export type ComponentInstance<P, E extends string[]> = InstanceType<
  DefineComponent<P, any, any, any, any, any, any, E>
>;
