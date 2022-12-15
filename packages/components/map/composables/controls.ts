import type { MapEmitFn, MapProps } from ".";

import { toBounds } from "~/utils";

export function useControls(props: MapProps, map: T.Map, emit: MapEmitFn) {
  props.controls?.forEach((option: VT.ControlName | VT.ControlOptions) => {
    if (typeof option === "string") {
      addControlByName(option);
    } else if (typeof option === "object") {
      addControlByOption(option);
    }
  });

  function addControlByName(option: VT.ControlName) {
    const controlName = option;
    if (!T.Control[controlName]) {
      setTimeout(() => addControlByName(option));
      return;
    }
    const control = new T.Control[controlName]();
    if (controlName === "OverviewMap") {
      const c = control as T.ControlOverviewMap;
      c.addEventListener("viewchange", e => emit("viewchange", e));
    }
    map.addControl(control);
  }

  function addControlByOption(option: VT.ControlOptions) {
    const controlName = option.name;
    if (!T.Control[controlName]) {
      setTimeout(() => addControlByOption(option));
      return;
    }
    switch (controlName) {
      case "MapType":
        {
          const mapTypes = option.mapTypes?.map(item => {
            return {
              ...item,
              layer: window[item.layer]
            };
          });
          const control = new T.Control.MapType(mapTypes);
          option.position && control.setPosition(option.position);
          map.addControl(control);
        }
        break;
      case "OverviewMap":
        {
          const control = new T.Control.OverviewMap(option);
          control.addEventListener("viewchange", e => emit("viewchange", e));
          map.addControl(control);
        }
        break;
      case "Copyright":
        {
          // 根据官网的示例，需要先初始化控件，再添加版权信息
          const control = new T.Control.Copyright({ position: option.position || "bottomleft" });
          map.addControl(control);
          control.addCopyright({
            ...option,
            bounds: option.bounds?.length ? toBounds(option.bounds) : undefined
          });
        }
        break;
      default:
        {
          const control = new T.Control[controlName](option);
          map.addControl(control);
        }
        break;
    }
  }
}
