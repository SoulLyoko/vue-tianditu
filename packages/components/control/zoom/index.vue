<script setup lang="ts">
import { onMounted } from 'vue'

import { useInitControl } from '../../composables'
import { controlZoomEmits, controlZoomProps } from './props'

defineOptions({ name: 'TdtControlZoom' })
const props = defineProps(controlZoomProps)
const emit = defineEmits(controlZoomEmits)

onMounted(() => {
  const control = new T.Control.Zoom({
    position: props.position,
    zoomInText: props.zoomInText,
    zoomOutText: props.zoomOutText,
    zoomInTitle: props.zoomInTitle,
    zoomOutTitle: props.zoomOutTitle,
  })
  useInitControl(props, control)
  emit('init', control)
})
</script>
