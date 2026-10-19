import { toPoint } from '@vue-tianditu/core'
import { onUnmounted } from 'vue'

import { useMap } from './map'
import { useWatch } from './watch'

export function useInitControl<O extends T.Control>(props: any, control: O) {
  const map = useMap()
  map.value.addControl(control)
  onUnmounted(() => control && map.value?.removeControl(control))
  useWatch(props, {
    position: (val) => val && control?.setPosition(val),
    offset: (val) => val && control?.setOffset(toPoint(val)),
    visible: (val) => (val ? control?.show() : control?.hide()),
  })
}
