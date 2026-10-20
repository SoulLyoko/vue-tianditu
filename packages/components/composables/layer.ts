import { onUnmounted } from 'vue'

import { useMap } from './map'
import { useWatch } from './watch'

export function useInitLayer<L extends T.TileLayer>(props: any, layer: L) {
  const map = useMap()
  map.value.addLayer(layer)
  onUnmounted(() => layer && map.value?.removeLayer(layer))
  useWatch(props, {
    opacity: (val) => val != null && layer?.setOpacity(val),
    zIndex: (val) => val != null && layer?.setZIndex(val),
  })
}
