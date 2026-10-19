import { onUnmounted } from 'vue'

import { useMap } from './map'

export function useInitOverlay<O extends T.OverlayBase<any>>(instance: O) {
  const map = useMap()
  map.value?.addOverLay(instance)
  onUnmounted(() => instance && map.value?.removeOverLay(instance))
}
