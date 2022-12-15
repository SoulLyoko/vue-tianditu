import { PropType } from "vue-demi";

import { DefineEmits, DefineProps } from "../../../types";

export const NATIVE_PROPS = {
  /** 从当前节点到下一节点的时间间隔 */
  interval: { type: Number, default: 1000 },
  /** 一个时间间隔移动的距离，单位是米。注：speed为0时，按照Datas数组中每个元素的坐标移动 */
  speed: { type: Number, default: 0 },
  /** 为true时轨迹线随车移动，而变化。false时，车辆运动轨迹提前画好且无动态变化 */
  dynamicLine: { type: Boolean, default: false },
  /** 数据来源 */
  Datas: { type: Array as PropType<VT.LngLats>, default: () => [] },
  /** 车辆样式 */
  carstyle: {
    type: Object as PropType<T.CarOverlayOptions["carstyle"]>
    // default: () => ({ display: true, iconUrl: "car.png", width: 52, height: 26 })
  },
  /** 车辆轨迹线样式 */
  polylinestyle: {
    type: Object as PropType<T.CarOverlayOptions["polylinestyle"]>
    // default: () => ({ display: true, color: "red", width: 3, opacity: 0.8 })
  }
};

export const EXTRA_PROPS = {};

export const NATIVE_EVENTS = {};

export const EXTRA_EVENTS = {
  init: (e: T.CarTrack) => e instanceof T.CarTrack,
  /**
   * 车辆移动一次时触发调用的方法
   * @param lnglat 经过的坐标
   * @param index 节点序号
   * @param length 总节点数量
   */
  passOneNode: (lnglat: VT.LngLat, index: number, length: number) => true
};

export const PROPS = { ...NATIVE_PROPS, ...EXTRA_PROPS };
export const EVENTS = { ...NATIVE_EVENTS, ...EXTRA_EVENTS };
export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
