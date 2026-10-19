<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'

import { useInitControl } from '../../composables'
import { controlEmits, controlProps } from './props'

defineOptions({ name: 'TdtControl' })
const props = defineProps(controlProps)
const emit = defineEmits(controlEmits)
const controlEl = useTemplateRef('controlEl')

onMounted(() => {
  if (!controlEl.value) throw new Error('control container is not mounted')

  const control = new T.Control({ position: props.position })
  control.onAdd = () => controlEl.value
  control.onRemove = () => void 0
  useInitControl(props, control)
  emit('init', control)
})
</script>

<template>
  <div ref="controlEl" class="tdt-control-custom">
    <slot />
  </div>
</template>
