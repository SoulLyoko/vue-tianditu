<script setup lang="ts">
import { onMounted } from 'vue'

import { useInitControl } from '../../composables'
import { controlMapTypeEmits, controlMapTypeProps } from './props'

defineOptions({ name: 'TdtControlMapType' })
const props = defineProps(controlMapTypeProps)
const emit = defineEmits(controlMapTypeEmits)

onMounted(() => {
  const mapTypes = props.mapTypes?.map((item) => ({
    ...item,
    layer: typeof item.layer === 'string' ? window[item.layer] : item.layer,
  })) as T.Control.MapTypes
  const control = new T.Control.MapType(mapTypes)
  useInitControl(props, control)
  emit('init', control)
})
</script>
