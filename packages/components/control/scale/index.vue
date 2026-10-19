<script setup lang="ts">
import { onMounted } from 'vue'

import { useInitControl, useWatch } from '../../composables'
import { controlScaleEmits, controlScaleProps } from './props'

defineOptions({ name: 'TdtControlScale' })
const props = defineProps(controlScaleProps)
const emit = defineEmits(controlScaleEmits)

onMounted(() => {
  const control = new T.Control.Scale({ position: props.position })
  useInitControl(props, control)
  useWatch(props, {
    color: (val) => val && control.setColor(val),
  })
  emit('init', control)
})
</script>
