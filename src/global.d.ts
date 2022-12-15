declare module "vue" {
  export interface GlobalComponents {
    TdtMap: typeof import("vue-tianditu")["TdtMap"];
    TdtControl: typeof import("vue-tianditu")["TdtControl"];
    TdtMousetool: typeof import("vue-tianditu")["TdtMousetool"];
  }
}

export {};
