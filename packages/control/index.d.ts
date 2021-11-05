declare const _default: import("vue-demi").DefineComponent<
  {
    offset: {
      type: import("vue-demi").PropType<import("../types").Point>;
    };
    position: {
      type: import("vue-demi").PropType<Tianditu.ControlPosition>;
      default: string;
    };
  },
  () => import("vue-demi").VNode<
    import("vue-demi").RendererNode,
    import("vue-demi").RendererElement,
    {
      [key: string]: any;
    }
  >,
  unknown,
  {},
  {},
  import("vue-demi").ComponentOptionsMixin,
  import("vue-demi").ComponentOptionsMixin,
  {
    init: (e: Tianditu.Control) => boolean;
  },
  string,
  import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps,
  Readonly<
    {
      offset?: unknown;
      position?: unknown;
    } & {
      position: Tianditu.ControlPosition;
    } & {
      offset?: import("../types").Point | undefined;
    }
  > & {
    onInit?: ((e: Tianditu.Control) => any) | undefined;
  },
  {
    position: Tianditu.ControlPosition;
  }
>;
export default _default;
