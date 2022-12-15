import type { ExtractPropTypes, EmitsOptions, SetupContext, ComponentPublicInstance } from "vue-demi";

export type Data<V = any> = Record<string, V>;

export type DefineProps<P> = ExtractPropTypes<P>;

export type DefineEmits<E extends EmitsOptions> = SetupContext<E>["emit"];

export type ComponentInstance<P, E extends EmitsOptions> = ComponentPublicInstance<P, Data, Data, Data, Data, E>;

export type PropTypes<T> = Readonly<ExtractPropTypes<T>>;

export type EmitFn<T> = SetupContext<T>["emit"];
