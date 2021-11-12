import { PropType } from "vue-demi";
import { DefineEmits, DefineProps } from "../../../types";

export const NATIVE_PROPS = {
  /** 设置格网图层的网格大小，单位是像素。default:256 */
  tileSize: { type: Number, default: 256 },
  /** 显示格网图层的最小层级。default:0 */
  minZoom: { type: Number, default: 0 },
  /** 显示格网图层的最大层级。default:18 */
  maxZoom: { type: Number, default: 18 },
  /** 设置格网图层的透明度。default:1 */
  opacity: { type: Number, default: 1 },
  /** 设置格网图层边线的颜色、宽度、线样式。default:{width:1, style:'solid', color:'#999'} */
  outlineSize: {
    type: Object as PropType<T.GridlineLayerOptions["outlineSize"]>,
    default: () => ({ width: 1, style: "solid", color: "#999" })
  },
  /** 设置格网图层文字的样式，图层文字表现网格的行号、列号、层级。default:{display:false, fontSize:'14', fontWeight:true, color:'black'} */
  textSize: {
    type: Object as PropType<T.GridlineLayerOptions["textSize"]>,
    default: () => ({ display: false, fontSize: "14", fontWeight: true, color: "black" })
  }
};

export const EXTRA_PROPS = {
  /** 图层的叠放顺序 */
  zIndex: { type: Number }
};

export const NATIVE_EVENTS: Pick<T.TileLayerEvents, "load" | "loading"> = {
  loading: () => true,
  load: () => true
};

export const EXTRA_EVENTS = {
  init: (e: T.GridlineLayer) => e instanceof T.GridlineLayer
};

export const PROPS = { ...NATIVE_PROPS, ...EXTRA_PROPS };
export const EVENTS = { ...NATIVE_EVENTS, ...EXTRA_EVENTS };
export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
